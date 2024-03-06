import { Button, Center, Text } from "@gluestack-ui/themed"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { CounterScreenParams } from "../types";

export default function ScreenThree() {
  const navigation = useNavigation<NavigationProp<CounterScreenParams>>();
  return (
    <Center bg ='$purple300' w='$full' h='$full' gap={10}>
        <Text>Screen3</Text>
        <Button bg='$red500'>
            <Text color='$white' onPress={() => navigation.goBack()}>Go back</Text>
        </Button>
        <Button onPress={() => navigation.navigate('One')}> 
            <Text color='$white'>Go To Screen1</Text>
        </Button>
        <Button onPress={() => navigation.navigate('Two')}>
            <Text color='$white'>Go To Screen2</Text>
        </Button>
    </Center>
  )
}