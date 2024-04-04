import { HStack, Pressable, Text, View } from "@gluestack-ui/themed";
import { VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

interface DetailInfoProps {
    synopsis: string,
    description: string;
}

const width = Dimensions.get('window').width;

export default function DetailInfo({synopsis, description}: DetailInfoProps) {
    const [isOpen, setIsOpen] =  useState(false); // (isOpen=false) == 밑으로 세부사항 보인다
    return (  
    <VStack> 
        <HStack>
            { isOpen ? (
            <View>
                <Text key={'up'} color='$secondary400' size='sm' isTruncated={!isOpen} width={width-50} bg='$secondary800'>{synopsis}</Text>
                <HStack gap={5} >
                    <Text color='$secondary400' size='sm'>연령</Text>
                    <Text color='$backgroundLight100' size='sm' >{`${description}`}</Text>
                </HStack>
            </View>
            ) : (<Text flex={1} key={'down'} color='$secondary400' size='sm' isTruncated={!isOpen} width={width-50}>{synopsis}</Text>)
            }
            <Pressable onPress={() => setIsOpen(!isOpen)}>
                <Icon
                    size={20}
                    name={isOpen ? 'chevron-up-outline' : 'chevron-down-outline'}
                    color='#737373'
                ></Icon>
            </Pressable>
        </HStack>
    </VStack>
    )
}