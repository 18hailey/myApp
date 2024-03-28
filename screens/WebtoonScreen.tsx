import { NavigationProp, useNavigation } from "@react-navigation/native"
import { ScreensParams } from "../types"
import { Center, Text, VStack } from "@gluestack-ui/themed";
import WebtoonCarousel from "../components/Carousel/WebtoonCarousel";
import { TabBar, TabView } from "react-native-tab-view";
import { useState } from "react";
import { DayArray } from "../constants";

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
            renderScene={() => (
                <Center>
                    <Text>Test</Text>
                </Center>
            )}
            onIndexChange={setIndex}
            renderTabBar= {(props) => <TabBar {...props} 
                activeColor = '#16a34a'
                indicatorStyle={{ backgroundColor: '#16a34a' }}
                style={{ backgroundColor: '' }}
            />
        }
        />
    </VStack>
    );
  }