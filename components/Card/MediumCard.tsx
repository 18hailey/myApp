import  React  from 'react'
import { Text, Image, View, HStack, Icon, StarIcon } from "@gluestack-ui/themed"
import { ScreensParams, Webtoon } from "../../types"
import { Pressable } from '@gluestack-ui/themed';
import { NavigationProp, useNavigation } from '@react-navigation/native';

interface MediumCardProps {
    webtoon: Webtoon;
}

export default function MediumCard({ webtoon }: MediumCardProps) {

    const navigation = useNavigation<NavigationProp<ScreensParams>>();
    return (
    <HStack style={{borderWidth: 0.3, borderColor: 'gray'}} bg='$backgroundDark950'>
        <Image
            alt={webtoon.title}
            bg='gray'
            size='lg'
            source ={{
                uri: webtoon.img,
            }}
        />
        <Pressable
            justifyContent='center'
            alignItems='center'
            pb={10}
            pl={10}
            onPress={() => navigation.navigate('Detail', { webtoon })}
        >
            <View>
                <Text size='sm' color='$white' fontWeight='$bold'>{webtoon.title}</Text>
                <Text size='xs' color='$white' >{webtoon.author}</Text>
                <HStack>
                    <Icon as={StarIcon} fill='yellow' color='orange' size='sm'></Icon>
                    <Text size='xs' color='$white' marginLeft={5}  >{webtoon.fanCount}</Text>
                </HStack>
            </View>
        </Pressable>
    </HStack>
  );
}
