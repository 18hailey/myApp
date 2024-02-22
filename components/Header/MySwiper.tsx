import  React  from 'react'
import { useQuery } from "@tanstack/react-query"
import Swiper from "react-native-swiper"
import { Webtoon } from "../../types"
import LargeCard from "../Card/LargeCard"

interface WebtoonResponse {
    webtoons: Webtoon[];
}

const fetchWebtoons = async() => { // 비동기 함수, promise 반환
    const response = await fetch('https://korea-webtoon-api.herokuapp.com');
    return response.json();
}

export default function MySwiper() {
    const { data } = useQuery<WebtoonResponse> ({
        queryKey: ['https://korea-webtoon-api.herokuapp.com'],
        queryFn: fetchWebtoons, // 쿼리를 실행하는 비동기 함수
    });

  return (
    <Swiper showsButtons={false}>
        { data ? data.webtoons.map((webtoon) => (
        <LargeCard key={webtoon.webtoonId} webtoon={webtoon} />
        )) : []}
    </Swiper>
  );
}
