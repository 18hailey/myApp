import { Text, HStack, VStack, Icon, StarIcon } from "@gluestack-ui/themed"
import { DetailScreensParams, WebtoonArticleCard } from "../../types";
import { Image } from "expo-image";
import convertUrl from "../../utils/convertUrl";
import { Pressable } from "@gluestack-ui/themed";
import { NavigationProp, useNavigation } from "@react-navigation/native";

interface ArticleCardProps {
    article: WebtoonArticleCard;
}

export default function ArticleCard({article}: ArticleCardProps) {
    const navigation = useNavigation<NavigationProp<DetailScreensParams>>(); 
    return (
        <Pressable onPress={() => navigation.navigate('Viewer', {article})}>
            <HStack borderBottomWidth='$1' borderColor='$secondary800' alignItems='center' h={80} pl={10} top={-5}>
                <Image
                    transition={300}
                    source={{uri: convertUrl(article.thumbnailUrl)}}
                    style={{width: 90, height: 60, borderRadius: 10}}
                >
                </Image>
                <VStack left={10}>
                    <Text color='$backgroundLight200' size='md'>{article.subtitle}</Text>
                    <HStack alignItems='center' gap={10} >
                        <HStack alignItems='center' gap={2}>
                            <Icon as={StarIcon} fill='#737373' color='#737373' size='2xs'></Icon>
                            <Text color='$secondary400' size='sm'>{article.starScore.toFixed(2)}</Text>
                        </HStack>
                        <Text color='$secondary400' size='sm'>{article.serviceDateDescription}</Text>
                    </HStack>
                </VStack>
            </HStack>
        </Pressable>
    );
}
