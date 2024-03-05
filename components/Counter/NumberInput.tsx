import { Input, InputField } from "@gluestack-ui/themed"

interface Props {
    inputNumber: number;
    onChangeInputNumber: (inputCount: number) => void;
}
export default function NumberInput({inputNumber, onChangeInputNumber}: Props) {

    const handleChangeInputNumber = (inputStr: string) => {
        const inputNumber = Number(inputStr);
        onChangeInputNumber(inputNumber);
    }

    return (
        <Input
        variant='outline'
        size='md'
        width={190}
        borderColor='$backgroundDark600'
        >  
            <InputField
                size='sm'
                textAlign='right'
                alignItems='center'
                onChangeText={handleChangeInputNumber}
                keyboardType='numeric'
                returnKeyType='done'
                value= {`${inputNumber ? inputNumber : ''}`}
            />
        </Input>
    );
}