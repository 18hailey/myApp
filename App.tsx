import { config } from "@gluestack-ui/config"
import { GluestackUIProvider, Center } from "@gluestack-ui/themed"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import MySwiper from "./components/MySwiper"
import { Dimensions } from "react-native";

const queryClient = new QueryClient();

export default function App() {
  return (
  <QueryClientProvider client={queryClient}>
   <GluestackUIProvider config={config}>
    <Center flex={1} bg='$black'>
      <Center width={Dimensions.get('window').width} height={400}>
        <MySwiper />
      </Center>
    </Center>
   </GluestackUIProvider>
  </QueryClientProvider>
  )
}
