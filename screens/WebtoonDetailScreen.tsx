import  React  from 'react'
import { Text, VStack, Icon, HStack, StarIcon, Center } from "@gluestack-ui/themed"
import { Image } from 'expo-image';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ScreensParams } from '../types';

type DetailScreenRouteProp = RouteProp<ScreensParams, 'Detail'>;

export default function WebtoonDetailScreen() {
    const route = useRoute<DetailScreenRouteProp>(); // 제네릭으로 타입 지정해야 함
    const webtoon = route.params.webtoon;
    // console.log(webtoon);
    return (
    <VStack
        key={webtoon.webtoonId}
        bg='$backgroundDark950'
        width='$full'
        height='$full'
    >
      <Center width='$full' height={300}>
        <Image
          alt={webtoon.title}
          source ={webtoon.img}
          contentFit='contain' // 가로 세로 비율 유지하며 축소 및 확대
          transition={2000}
          style={{width: '100%', height: '100%'}}
        />
      </Center>
        <VStack pl={20} pb={40} pt={5} gap={2}>
          <Text size='xl' color='$white' fontWeight='$bold'>{webtoon.title}</Text>
          <Text size='md' color='$white'>{webtoon.author}</Text>
          <HStack>
              <Icon as={StarIcon} fill='yellow' color='orange' size='sm'></Icon>
              <Text size='sm' color='$white' marginLeft={5}>{webtoon.fanCount}</Text>
          </HStack>
        </VStack>
    </VStack>
  );
}

