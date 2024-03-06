import { Button, ButtonText, Center, HStack, Input, InputField, ScrollView, Text, VStack } from "@gluestack-ui/themed";
import { useQuery } from "@tanstack/react-query";
import MediumCard from "../components/Card/MediumCard";
import { WebtoonResponse } from "../types";
import { useState } from "react";
import { ActivityIndicator } from "react-native";

const fetchWebtoons = async(keyword: string) => { 
    const response = await fetch(`https://korea-webtoon-api.herokuapp.com/search?keyword=${keyword}`);
    return response.json();
}

export default function SearchScreen() {
    const [ inputText, setInputText ] = useState('');
    const [ keyword, setKeyword] = useState('');

    const { data, isLoading } = useQuery<WebtoonResponse>({
        queryKey:  ['https://korea-webtoon-api.herokuapp.com', keyword],
        queryFn: () => fetchWebtoons(keyword),
        enabled: keyword.length >= 2,
    })

    console.log(data) // 데이터 확인 과정

    return (        
    <VStack width='$full' height='$full' bg='$backgroundDark950' gap={10}>
        <HStack p={20} gap={10} >
            <Input flex={1} variant='outline'size='md'>  
                <InputField 
                    placeholder='제목을 입력해 주세요.'
                    textAlign='left'
                    value={inputText}
                    onChangeText={setInputText}
                    onEndEditing={() => setKeyword(inputText)}
                    color='$blueGray300' />
            </Input>
            <Button size='md' action='secondary' onPress={() => {setInputText(''); setKeyword('')}}>
                <ButtonText>취소</ButtonText>
            </Button>
        </HStack>
        
        {isLoading ? (
            <Center flex={1}>
            <ActivityIndicator />   
            </Center>
         ) : (
        <ScrollView px={10} py={10}>
            {data ? data.webtoons.map((webtoon) => (
            <MediumCard key={webtoon.webtoonId} webtoon={webtoon} />
            )) : [] }
        </ScrollView>
        )}
    </VStack>
    );
}