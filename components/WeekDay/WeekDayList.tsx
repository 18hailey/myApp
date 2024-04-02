import  React  from 'react'
import { Center, HStack } from "@gluestack-ui/themed"
import { WeekDayWebtoonResponse } from '../../types';
import { useQuery } from '@tanstack/react-query';
import WeekDayCard from './WeekDayCard';
import { ScrollView } from '@gluestack-ui/themed';

const fetchWebtoons = async (type: string) => { // 비동기 함수, promise 반환, async 익명함수
    const response = await fetch(`https://comic.naver.com/api/webtoon/titlelist/weekday?week=${type}&order=user`);
    return response.json();
}

interface WeekDayListProps {
    type: string
}

export default function WeekDayList({type}: WeekDayListProps) {
    const { data } = useQuery<WeekDayWebtoonResponse> ({ // Webtoon 배열
        queryKey: ['weekday', type], // 쿼리 식별하는 고유한 키, 따로따로 API 호출
        queryFn: () => fetchWebtoons(type), // 쿼리를 실행하는 비동기 함수
    });

    return (
        <ScrollView>
            <Center width='100%' height='100%'>
                <HStack flexWrap='wrap' gap={5} top={3} left={5}>
                    {data?.titleList.slice(0, 15).map((webtoon) => (
                        <WeekDayCard key={webtoon.titleId} webtoon={webtoon}/>
                    ))}
                </HStack>
            </Center>
        </ScrollView>
    );
}

