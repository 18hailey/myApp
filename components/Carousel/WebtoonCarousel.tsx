import  React  from 'react'
import { useQuery } from "@tanstack/react-query"
import Swiper from "react-native-swiper"
import { TripleWebtoonResponse } from '../../types'
import CarouselCard from '../Carousel/CarouselCard'
import { Center } from '@gluestack-ui/themed'

const fetchWebtoons = async () => { // 비동기 함수, promise 반환, async 익명함수
    const response = await fetch('https://comic.naver.com/api/tripleRecommend?week=undefined&tag=true&sortByUpdate=true');
    return response.json();
}

export default function WebtoonCarousel() {
    const { data } = useQuery<TripleWebtoonResponse> ({ // Webtoon 배열
        queryKey: ['TripleRecommend'], // 쿼리 식별하는 고유한 키
        queryFn: fetchWebtoons, // 쿼리를 실행하는 비동기 함수
    });

    // console.log(data);
    const webtoons = data?.itemList || [];

  return (
    <Center flex={1} w='$full' h='$full'>
      { webtoons.length > 0 && (<Swiper showsButtons={false}>
        {webtoons?.map((webtoon) => ( 
          <CarouselCard key={webtoon.titleId} webtoon={webtoon} />
      ))}
      </Swiper>
      )}
    </Center>
    );
}