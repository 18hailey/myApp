import { Center, HStack, VStack } from "@gluestack-ui/themed";
import { DetailScreensParams, ScreensParams, WeekDayWebtoon } from "../../types";
import { Image } from "expo-image";
import convertUrl from "../../utils/convertUrl";
import { Dimensions, Pressable } from "react-native";
import { Text } from "@gluestack-ui/themed";
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationProp, useNavigation } from "@react-navigation/native";

interface WeekDayCardProps {
    webtoon: WeekDayWebtoon;
}

const width = Dimensions.get('window').width;


export default function WeekDayCard({ webtoon }: WeekDayCardProps) {
  const navigation = useNavigation<NavigationProp<DetailScreensParams>>();

  return (
    <Pressable onPress={() => navigation.navigate('Detail', {titleId: webtoon.titleId})}>
      <VStack w={width / 3.2} gap={2} >
        <Image 
          transition={500}
          source={{uri: convertUrl(webtoon.thumbnailUrl)}} // onError={(error) => console.log(error)}
          style={{ width: '100%', height: (width / 3) * 1.3, borderRadius: 3}} >
        </Image>
        <VStack position='absolute' w={40} h={40} p={4} gap={1}>
          {webtoon.new && (
            <Center w={20} h={20} bg='$green500' borderRadius='$full'>
              <Text size='2xs' bold={true} color='$black'>신작</Text>
            </Center>
          )}
          {webtoon.bm && (
            <Center w={20} h={20}  borderRadius='$full' pl={0.2} paddingTop={0.1} style={{backgroundColor: 'rgba(0,0,0,0.7)' }} >
              <Icon size={20} name='timer-outline' color='#22c55e'></Icon>
            </Center>
          )}
          {webtoon.adult && (
            <Center w={20} h={20} >
              <Icon size={20} name='shield' color='#fb923c'></Icon>
              <Icon size={9} name='person' color='white' position='absolute' paddingBottom={1}></Icon>
            </Center>
          )}
        </VStack>
        <VStack p={2} paddingLeft={2} gap={-3}>
          <Text size='xs' color='$backgroundLight100' bold={true} isTruncated={true}>{webtoon.titleName}</Text>
          <HStack maxWidth={(width / 3.2) - 35} alignItems='center' gap={2}>
              <Text size='2xs' color='gray' isTruncated={true}>
                {webtoon.author}
              </Text>
              <HStack alignItems='center' gap={1}>
                <Icon size={8} name='star' color='gray'></Icon>
                <Text w={23} size='2xs' color='gray'>
                  {webtoon.starScore.toFixed(2)}
                </Text>
              </HStack>
          </HStack>
        </VStack>
      </VStack>
    </Pressable>
  );
}
