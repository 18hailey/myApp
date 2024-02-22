import { Center, ScrollView } from "@gluestack-ui/themed"
import { Dimensions } from "react-native"
import MySwiper from "../components/Header/MySwiper"
import WebtoonList from "../components/List/WebtoonList"

export default function DashboardScreen() {
  return (
    <ScrollView width='$full'bg='$backgroundDark900'>
        <Center width={Dimensions.get('window').width} height={300}>
            <MySwiper />
        </Center>
        <WebtoonList />
    </ScrollView>
  )
}
