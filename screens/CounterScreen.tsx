import { AddIcon, Button, ButtonIcon, Center, HStack, KeyboardAvoidingView, RemoveIcon, Text, VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import NumberBoard from "../components/Counter/NumberBoard";
import NumberInput from "../components/Counter/NumberInput";
import NumberPreview from "../components/Counter/NumberPreview";

export default function CounterScreen() {
    const [ count, setCount ] = useState(0);
    const [ inputNumber, setInputNumber ] = useState(0);

    const handleChangeInputNumber = (inputNumber: number) => {
        if (!isNaN(inputNumber)) {
            setInputNumber(inputNumber);
        } else {
            setInputNumber(0);
        }
    }

    const handleAdd = () => {
        setCount(count + inputNumber);
        setInputNumber(0);
    }

    const handleMinus = () => {
        setCount(count - inputNumber);
        setInputNumber(0);
    }
 
    return (
        <KeyboardAvoidingView behavior="padding" enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Center width='$full' height='$full' bg='$blue300' gap={100}>
            <Text size='4xl' bold={true} color='$backgroundDark800'>This is My Counter</Text>
            <NumberBoard count={count} />
            <VStack gap={30} alignItems='center'>
                <NumberInput inputNumber={inputNumber} onChangeInputNumber={handleChangeInputNumber}/>
                <HStack gap={50}>
                    <Button  action='negative' bg='$red500' width={70} onPress={handleMinus}>
                        <ButtonIcon size='xl' as={RemoveIcon} />
                    </Button>
                    <Button  action='positive'  width={70} onPress={handleAdd}>
                        <ButtonIcon size='xl' as={AddIcon} />
                    </Button>
                </HStack>
                <NumberPreview count={count} inputNumber={inputNumber} />
            </VStack>  
        </Center>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}