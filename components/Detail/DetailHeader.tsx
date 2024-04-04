import { Center, Text } from "@gluestack-ui/themed";
import { HStack } from "@gluestack-ui/themed";
import { WebtoonDetail } from "../../types";
import { useQuery } from "@tanstack/react-query";
import { VStack } from "@gluestack-ui/themed";
import { Box } from "@gluestack-ui/themed";
import { Image } from "expo-image";
import convertUrl from "../../utils/convertUrl";
import { Dimensions, Pressable } from "react-native";
import DetailInfo from "./DetailInfo";

interface DetailHeaderProp {
    titleId: number;
}

const width = Dimensions.get('window').width;

const fetchArticleList = async(titleId: number) => {
    const res = await fetch(`https://comic.naver.com/api/article/list/info?titleId=${titleId}`);
    return res.json();
}

export default function DetailHeader({titleId}: DetailHeaderProp) {
    const { data } = useQuery<WebtoonDetail> ({ // Webtoon 배열
        queryKey: ['fetchArticleList', titleId], // 쿼리 식별하는 고유한 키
        queryFn: () => fetchArticleList(titleId), // 쿼리를 실행하는 비동기 함수
    });
 
    if(!data) {
        return;
    }

    return (
    <VStack w='$full'>
        <Box position='absolute' bg='$blueGray500' w='$full' h={width / 2}></Box>
        <VStack justifyContent='flex-end' alignItems='center'>
            <Image 
                contentFit='contain'
                source={{uri: convertUrl(data.thumbnailUrl)}} // onError={(error) => console.log(error)}
                style={{ width: width, height: width }}
            ></Image>
            <Pressable onPress={() => alert('로그인 후 다시 시도해 주세요.')}>
                <Center width={120} height={30} borderRadius={30} bg='$green600' bottom={40}>
                    <Text color='$white' size='sm'>{`+ 관심 ${data.favoriteCount.toLocaleString('ko-KO')}`}</Text>
                </Center>
            </Pressable>
        </VStack>
        <VStack px={15} py={10} gap={4}>
            <Text color='$backgroundLight100' size='xl'>{data.gfpAdCustomParam.titleName}</Text>
            <HStack>
                <Text color='$backgroundLight100' size='sm'>{data.gfpAdCustomParam.displayAuthor}</Text>
                <Text color='$secondary400' size='sm'>{`ㆍ${data.publishDescription}`}</Text>
            </HStack>
            <DetailInfo synopsis={data.synopsis} description={data.age.description}  />
        </VStack>
    </VStack>
    )
}