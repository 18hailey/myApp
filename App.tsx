import { config } from "@gluestack-ui/config"
import { GluestackUIProvider, Center, StatusBar, SafeAreaView, ScrollView } from "@gluestack-ui/themed"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Dimensions } from "react-native"
import MySwiper from "./components/MySwiper"
import WebtoonList from "./components/WebtoonList"

const queryClient = new QueryClient();

export default function App() {
  return (
  <QueryClientProvider client={queryClient}>
   <GluestackUIProvider config={config}>
    <SafeAreaView flex={0} backgroundColor='$backgroundDark900' />
    <SafeAreaView flex={1} backgroundColor='$skyblue'>
    <StatusBar barStyle='light-content' />
      <ScrollView width='$full'bg='$backgroundDark900'>
        <Center width={Dimensions.get('window').width} height={300}>
          <MySwiper />
        </Center>
        <WebtoonList />
      </ScrollView>
    </SafeAreaView>
   </GluestackUIProvider>
  </QueryClientProvider>
  )
}
