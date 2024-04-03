import { HStack, Text } from "@gluestack-ui/themed";
import { VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { Dimensions, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

interface DetailInfoProps {
    synopsis: string;
}

const width = Dimensions.get('window').width;

export default function DetailInfo({synopsis}: DetailInfoProps) {
    const [isOpen, setIsOpen] =  useState(false);
    return (
    <VStack>
        <HStack>
            {isOpen ? (<Text flex={1} color='$secondary400' size='sm'>{synopsis}</Text>) : 
                <Text flex={1} color='$secondary400' size='sm' width={width-20} isTruncated={true}>{synopsis} </Text>
            }
            <Pressable onPress={() => setIsOpen(!isOpen)}>
                <Icon
                    width={20}
                    size={20}
                    name={isOpen ? 'chevron-up-outline' : 'chevron-down-outline'}
                    color='#737373'
                ></Icon>
            </Pressable>
        </HStack>
    </VStack>
    )
}