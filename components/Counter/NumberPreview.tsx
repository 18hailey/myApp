import { HStack, Text } from "@gluestack-ui/themed"

interface Props {
    count: number;
    inputNumber: number;
}

export default function NumberPreview({count, inputNumber}: Props) {
    return (
        <HStack gap={100}>
            <Text size='2xl' bold={true} color='$red500'>
                {inputNumber ? count - inputNumber : count}
            </Text>
            <Text size='2xl' bold={true} color='$blue500'>
                {inputNumber ? count + inputNumber : count}
            </Text>
        </HStack>
    );
}