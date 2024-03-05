import { Text } from "@gluestack-ui/themed"

interface Props {
    count: number;
}
export default function NumberBoard({count}: Props) {
    return (
        <Text size='5xl' bold={true} color='$red600'>{count}</Text>
    );
}