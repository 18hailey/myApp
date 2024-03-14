import { Text } from "@gluestack-ui/themed";
import { Center } from "@gluestack-ui/themed";
import { ScreensParams } from "../types";
import { RouteProp, useRoute } from "@react-navigation/native";

type DetailScreenRouteProp = RouteProp<ScreensParams, 'Detail'>;

export default function MyScreen() {
    const route = useRoute<DetailScreenRouteProp>();
    // console.log(route.params.webtoon);
    return (
        <Center width='$full' height='$full' bg='$blue300' gap={10}>
            <Text>MyScreen</Text>
        </Center>
    );
}