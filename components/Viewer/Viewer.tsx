import { Center, Text } from "@gluestack-ui/themed";
import { useQuery } from "@tanstack/react-query";
import { ViewerResponse } from "../../types";
import { Image } from "expo-image";
import convertUrl from "../../utils/convertUrl";
import { Dimensions } from "react-native";

const fetchViewImages = async () => { // 비동기 함수, promise 반환, async 익명함수
    const urls = Array.from({length: 82}, (_, i) => i + 1).map(
        (number) => `https://image-comic.pstatic.net/webtoon/758037/137/20240302095428_f9cac3b8efc03023672993239611ccce_IMAG01_${number}.jpg`
    )
    // console.log(urls);

    return {
        imageUrls: urls,
    }
}
export default function Viewer() {
    const { data } = useQuery<ViewerResponse> ({ // Webtoon 배열
        queryKey: ['viewerApi'], // 쿼리 식별하는 고유한 키
        queryFn: () => fetchViewImages(), // 쿼리를 실행하는 비동기 함수
    });

    const images = data?.imageUrls || [];
    const width = Dimensions.get('window').width;

    return (
        <Center w='$full' h='$full' bg='$backgroundDark950'>
           {images.map(uri =>
            <Image
                contentFit='fill'
                source={{uri: convertUrl(uri)}}
                style={{width: width,  height: width * 2.2}}
            >
            </Image>
           )}
        </Center>
    );
}