import { config } from "@gluestack-ui/config"
import { GluestackUIProvider, StatusBar, SafeAreaView } from "@gluestack-ui/themed"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { ScreensParams } from "./types";
import HomeScreen from "./screens/HomeScreen"
import SearchScreen from "./screens/SearchScreen";

const Stack = createStackNavigator<ScreensParams>(); // 라우트 타입 지정(필수)

const queryClient = new QueryClient();

export default function App() {
  return (
  <QueryClientProvider client={queryClient}>
   <GluestackUIProvider config={config}>
    <StatusBar barStyle='light-content' />
    <SafeAreaView flex={1} backgroundColor='$backgroundDark950'>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            header: () => null,
        }}/>
        <Stack.Screen
          name='Search'
          component={SearchScreen}
          options={{
            header: () => null,
        }}/>
      </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
   </GluestackUIProvider>
  </QueryClientProvider>
  )
}