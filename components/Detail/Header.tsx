import {  Button, ButtonIcon, ChevronLeftIcon, HStack, Pressable } from "@gluestack-ui/themed";
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ScreensParams } from "../../types";

interface HeaderProp {
    color: string;
}

export default function Header({color}: HeaderProp) {
    const navigation = useNavigation<NavigationProp<ScreensParams>>();
    return (
    <HStack position='absolute' height={30} alignItems='center' ml={8} top={45}>
        <Button  bg='#00000000' w={1} onPress={() => navigation.goBack()}>
            <ButtonIcon as={ChevronLeftIcon} size='xl' color={color} />
        </Button>
    </HStack>
    )
}