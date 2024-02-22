import { Button, Center, Text } from "@gluestack-ui/themed"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { RootStackParamList } from "../types";

export default function ScreenOne() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Center bg ='$success300' w='$full' h='$full' gap={10}>
        <Text>Screen1</Text>
        <Button onPress={() => navigation.navigate('Two')}>
            <Text color='$white'>Go To Screen2</Text>
        </Button>
        <Button onPress={() => navigation.navigate('Three')}>
            <Text color='$white'>Go To Screen3</Text>
        </Button>
    </Center>
  )
}
