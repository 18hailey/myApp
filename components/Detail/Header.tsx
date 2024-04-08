import {  HStack, Pressable } from "@gluestack-ui/themed";
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ScreensParams } from "../../types";


export default function DetailHeader() {
    const navigation = useNavigation<NavigationProp<ScreensParams>>();
    return (
    <HStack position='absolute' height={30} alignItems='center' ml={10} top={45}>
        <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name='chevron-back-outline' size={30} color='white'/>
        </Pressable>
    </HStack>
    )
}