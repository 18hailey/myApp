import { NavigationProp, useNavigation } from "@react-navigation/native"
import { ScreensParams } from "../types"
import { Center, VStack } from "@gluestack-ui/themed";
import WebtoonCarousel from "../components/Carousel/WebtoonCarousel";
import { TabBar, TabView } from "react-native-tab-view";
import { useState } from "react";
import { DayArray } from "../constants";
import WeekDayList from "../components/WeekDay/WeekDayList";

export default function WebtoonScreen() {   
    const [index, setIndex] = useState(0);
    
    const navigation = useNavigation<NavigationProp<ScreensParams>>();
    return (
    <VStack w='$full' h='$full' bg='$backgroundDark950'>
        <Center w='$full' h={250}>
            <WebtoonCarousel />
        </Center>

        <TabView
            navigationState={{ index, routes: DayArray }}
            renderScene={(route) => {
                return <WeekDayList type={route.route.key} />;
            }}
            onIndexChange={setIndex}
            renderTabBar= {(props) => <TabBar {...props} 
                activeColor = '#16a34a'
                indicatorStyle={{ backgroundColor: '#16a34a' }}
                style={{ backgroundColor: ''}}
                labelStyle={{color: 'white', fontSize: 13, margin: 0, padding: 0, borderBottomColor: 'white', borderWidth: 1}}
            />
            }
        />
    </VStack>
    );
  }