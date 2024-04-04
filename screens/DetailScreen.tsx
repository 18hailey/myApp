import  React  from 'react'
import { VStack} from "@gluestack-ui/themed"
import { RouteProp, useRoute } from '@react-navigation/native';
import { DetailScreensParams } from '../types';
import DetailHeader from '../components/Detail/DetailHeader';


type DetailScreenRouteProp = RouteProp<DetailScreensParams, 'Detail'>;

export default function DetailScreen() {
    const route = useRoute<DetailScreenRouteProp>(); // 제네릭으로 타입 지정해야 함
    const titleId = route.params.titleId;

    return ( 

    <VStack bg='$backgroundDark950' w='$full' h='$full'>
      <DetailHeader titleId={titleId} />
    </VStack>
  );
}

