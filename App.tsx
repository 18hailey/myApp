import { config } from "@gluestack-ui/config"
import { GluestackUIProvider, StatusBar, SafeAreaView, View } from "@gluestack-ui/themed"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { ScreensParams, TabScreenParams } from "./types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import MyScreen from "./screens/MyScreen";
import WebtoonScreen from "./screens/WebtoonScreen";
import DetailScreen from "./screens/DetailScreen";
import Header from "./components/Detail/Header";

const queryClient = new QueryClient();
const Stack = createStackNavigator<ScreensParams>(); // 라우트 타입 지정(필수)
const Tab = createBottomTabNavigator<TabScreenParams>();

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ 
      headerShown: false,
      tabBarActiveTintColor: '#e11d48',
      tabBarActiveBackgroundColor: '#171717',
      tabBarInactiveBackgroundColor: '#171717',
      }}
    >
      <Tab.Screen 
        name='Home'
        component={WebtoonScreen}
        options={{
          tabBarIcon: ({ color, size })=> (
            <Ionicons name='list' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name='My'
        component={MyScreen}
        options={{
          tabBarIcon: ({ color, size })=> (
            <Ionicons name='happy' size={size} color={color} />
          ),
        }}
      />      
    </Tab.Navigator>
  );
}

export default function App() {
  return (
  <QueryClientProvider client={queryClient}>
   <GluestackUIProvider config={config}>
    <StatusBar barStyle='dark-content' />
      <View flex={1} backgroundColor='$backgroundDark950'>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Main' component={Tabs} />
            <Stack.Screen
              name='Detail' 
              component={DetailScreen}
              options={{ headerShown: true, header: () => <Header /> }}

            />
          </Stack.Navigator>
        </NavigationContainer>
        </View>
      <SafeAreaView bg='$backgroundDark950' />
   </GluestackUIProvider>
  </QueryClientProvider>
  )
}