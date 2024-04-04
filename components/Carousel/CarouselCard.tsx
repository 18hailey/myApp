import  React  from 'react'
import { Box } from "@gluestack-ui/themed"
import { TripleWebtoon  } from "../../types"
import { Image } from 'expo-image';
import convertUrl from '../../utils/convertUrl';
import { Text } from '@gluestack-ui/themed';

interface LargeCardProps {
    webtoon: TripleWebtoon;
}

export default function CarouselCard({ webtoon }: LargeCardProps) {
  return (
    <Box w='$full' h='$full' justifyContent='flex-end'>
        <Box w='$full' h='$full' position='absolute' bg={`#${webtoon.bgColor}`} > 
            <Image 
                contentFit='contain'
                source={{uri: convertUrl(webtoon.bgImage)}} // onError={(error) => console.log(error)}
                style={{
                    width: '100%',
                    height: '100%'
                }}>
            </Image>
        </Box>
        <Box w='$full' h='$full' position='absolute'>
            <Image 
                contentFit='contain'
                source={{uri: convertUrl(webtoon.backImage)}} 
                style={{
                    width: '100%',
                    height: '100%'
                }}>
            </Image>
        </Box>
        <Box w='$full' h='$full' position='absolute'>
            <Image 
                contentFit='contain'
                source={{uri: convertUrl(webtoon.frontImage)}} 
                style={{
                    width: '100%',
                    height: '100%'
                }}>
            </Image>
        </Box>
        <Box pl={20} pb={20}>
            <Text size='xl' bold={true} bg='$backgroundDark900' alignSelf='flex-start' color='white'>{webtoon.title}</Text>
            <Text size='md'>{webtoon.displayAuthor}</Text>
        </Box>
   </Box>
   
  );
}

