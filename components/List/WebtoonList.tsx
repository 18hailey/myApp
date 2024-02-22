import  React  from 'react'
import { useQuery } from "@tanstack/react-query"
import { Webtoon } from "../../types"
import { VStack } from "@gluestack-ui/themed"
import MediumCard from "../Card/MediumCard"

interface WebtoonResponse {
    webtoons: Webtoon[];
}

const fetchWebtoons = async() => { // 비동기 함수, promise 반환
    const response = await fetch('https://korea-webtoon-api.herokuapp.com');
    return response.json();
}

export default function WebtoonList() {
    const { data } = useQuery<WebtoonResponse> ({
        queryKey: ['https://korea-webtoon-api.herokuapp.com'],
        queryFn: fetchWebtoons, // 쿼리를 실행하는 비동기 함수
    });

  return (
    <VStack padding={10} bg='$white' gap={10}> 
        { data ? data.webtoons.map((webtoon) => (
            <MediumCard key={webtoon.webtoonId} webtoon={webtoon} />
        )) : []}
    </VStack>
  );
}
