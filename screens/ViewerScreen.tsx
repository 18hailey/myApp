import { Center, ScrollView, Text, VStack } from "@gluestack-ui/themed";
import Viewer from "../components/Viewer/Viewer";
import { RouteProp, useRoute } from "@react-navigation/native";
import { DetailScreensParams } from "../types";

type DetailScreenRouteProp = RouteProp<DetailScreensParams, 'Viewer'>;

export default function ViewerScreen() {
    const route = useRoute<DetailScreenRouteProp>(); // 제네릭으로 타입 지정해야 함
    const article = route.params.article;

    return (
        <ScrollView w='$full' h='$full' bg='$backgroundDark950'>
            <Viewer />
        </ScrollView>
    );
}