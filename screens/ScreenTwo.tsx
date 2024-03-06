import { Button, Center, Text } from "@gluestack-ui/themed"
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { CounterScreenParams } from "../types";

export default function ScreenTwo() {
  const navigation = useNavigation<NavigationProp<CounterScreenParams>>();
  return (
    <Center bg ='$indigo300' w='$full' h='$full' gap={10}>
        <Text onPress={() => navigation.goBack}>Screen2</Text>
        <Button bg='$red500'>
            <Text color='$white' onPress={() => navigation.goBack()}>Go back</Text>
        </Button>
        <Button>
            <Text color='$white' onPress={() => navigation.navigate('One')}>Go To Screen1</Text>
        </Button>
        <Button>
            <Text color='$white' onPress={() => navigation.navigate('Three')}>Go To Screen3</Text>
        </Button>
    </Center>
  )
}