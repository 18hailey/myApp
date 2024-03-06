import  React  from 'react'
import { Text, Image, VStack, Box } from "@gluestack-ui/themed"
import { Dimensions } from "react-native"
import { Webtoon } from "../../types"

interface LargeCardProps {
    webtoon: Webtoon;
}

export default function LargeCard({ webtoon }: LargeCardProps) {
  return (
    <VStack
        key={webtoon.webtoonId}
        bg='$backgroundDark950'
        width={Dimensions.get('window').width}
        height='100%'
        justifyContent='flex-end'   
    >
      <Image
          alt={webtoon.title}
          position='absolute'
          size='full'
          source ={{
              uri: webtoon.img,
          }}
      />
      <Box pl={20} pb={40} >
        <Text size='xl' color='$white' fontWeight='$bold'>{webtoon.title}</Text>
        <Text size='md' color='$white'>{webtoon.author}</Text>
      </Box>
    </VStack>
  );
}

