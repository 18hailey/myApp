import  React  from 'react'
import { Text, Image, View, HStack, VStack, Icon, StarIcon } from "@gluestack-ui/themed"
import { Webtoon } from "../../types"

interface MediumCardProps {
    webtoon: Webtoon;
}

export default function MediumCard({ webtoon }: MediumCardProps) {
  return (
    <HStack style={{borderWidth: 0.3, borderColor: 'lightgray', borderRadius:5}} bg='white'>
        <Image
            alt={webtoon.title}
            bg='gray'
            size='lg'
            source ={{
                uri: webtoon.img,
            }}
            borderTopLeftRadius={5}
            borderBottomLeftRadius={5}
        />
        <VStack width={300} marginLeft={15} marginTop={15}>
            <View>
                <Text size='sm' color='$black' fontWeight='$bold'>{webtoon.title}</Text>
                <Text size='xs' color='$black' >{webtoon.author}</Text>
                <HStack>
                    <Icon as={StarIcon} fill='yellow' color='orange' size='sm'></Icon>
                    <Text size='xs' color='black' marginLeft={5}  >{webtoon.fanCount}</Text>
                </HStack>
            </View>
        </VStack>
    </HStack>
  );
}
