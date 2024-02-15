import  React  from 'react'
import { Text, Image, VStack } from "@gluestack-ui/themed"
import { Dimensions } from "react-native"
import { Webtoon } from "../../types"

interface LargeCardProps {
    webtoon: Webtoon;
}

export default function LargeCard({ webtoon }: LargeCardProps) {
  return (
    <VStack
        key={webtoon.webtoonId}
        bg='gray'
        width={Dimensions.get('window').width}
        height='100%'
        justifyContent='flex-end'
        pl={20}
        pb={40}
        position='relative'
        >
        <Image
            alt={webtoon.title}
            position='absolute'
            left={10}
            size='full'
            source ={{
                uri: webtoon.img,
            }}
        />
        <Text size='xl' color='$white' fontWeight='$bold' bg='$backgroundDark900' alignSelf='flex-start'>{webtoon.title}</Text>
        <Text size='sm' color='$white'>{webtoon.author}</Text>
    </VStack>
  );
}
