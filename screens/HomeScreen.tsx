import { Box, Button, Center, ScrollView, SearchIcon } from "@gluestack-ui/themed"
import { ButtonIcon } from "@gluestack-ui/themed"
import MySwiper from "../components/Header/MySwiper"
import WebtoonList from "../components/List/WebtoonList"
import { Dimensions } from "react-native"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { ScreensParams } from "../types"

export default function HomeScreen() {
    const navigation = useNavigation<NavigationProp<ScreensParams>>();
    return (
    <ScrollView width='$full'bg='$backgroundDark950'>
        <Box position='absolute' right={20} top={20} zIndex={10}>
            <Button
                borderRadius="$full"
                size="lg"
                p="$3.5"
                bg="#ffffff00"
                borderColor="$indigo600"
                onPress={() => navigation.navigate('Search')}
            >
                <ButtonIcon as={SearchIcon} />
            </Button>
        </Box>
        <Center width={Dimensions.get('window').width} height={300}>
            <MySwiper />
        </Center>
        <WebtoonList />
    </ScrollView>
  )
}