import  React  from 'react'
import { useQuery } from "@tanstack/react-query"
import Swiper from "react-native-swiper"
import LargeCard from "../Card/LargeCard"
import { WebtoonResponse } from '../../types'

const fetchWebtoons = async () => { // 비동기 함수, promise 반환, async 익명함수
    const response = await fetch('https://korea-webtoon-api.herokuapp.com');
    return response.json();
}

export default function MySwiper() {
    const { data } = useQuery<WebtoonResponse> ({
        queryKey: ['https://korea-webtoon-api.herokuapp.com'], // 쿼리 식별하는 고유한 키
        queryFn: fetchWebtoons, // 쿼리를 실행하는 비동기 함수
    });

  return (
    <Swiper showsButtons={false}>
        { data ? data.webtoons.map((webtoon) => ( // 배열 내의 모든 요소 각각 호출
        <LargeCard key={webtoon.webtoonId} webtoon={webtoon} />
        )): []}
    </Swiper>
  );
}
