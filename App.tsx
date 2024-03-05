import { config } from "@gluestack-ui/config"
import { GluestackUIProvider, StatusBar, SafeAreaView } from "@gluestack-ui/themed"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import ScreenOne from "./screens/ScreenOne";
import ScreenTwo from "./screens/ScreenTwo";
import ScreenThree from "./screens/ScreenThree";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./types";
import CounterScreen from "./screens/CounterScreen";

const Stack = createStackNavigator<RootStackParamList>(); // 라우트 타입 지정(필수)

const queryClient = new QueryClient();

export default function App() {
  return (
  <QueryClientProvider client={queryClient}>
   <GluestackUIProvider config={config}>
    <StatusBar barStyle='light-content' />
    <SafeAreaView flex={1} backgroundColor='$backgroundDark900'>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Counter'
          component={CounterScreen}
          options={{
            header: () => null,
        }}/>
        <Stack.Screen 
          name = 'One'
          component={ScreenOne}
          options={{
            header: () => null,
          }} />
        <Stack.Screen 
          name = 'Two' 
          component={ScreenTwo}
          options={{
            header: () => null,
        }} />
        <Stack.Screen 
          name = 'Three'
          component={ScreenThree}
          options={{
            header: () => null,
        }} />
      </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
   </GluestackUIProvider>
  </QueryClientProvider>
  )
}