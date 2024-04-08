import  React  from 'react'
import { Center, Divider, ScrollView, Spinner, VStack} from "@gluestack-ui/themed"
import { RouteProp, useRoute } from '@react-navigation/native';
import { ArticleResponse, DetailScreensParams } from '../types';
import DetailHeader from '../components/Detail/DetailHeader';
import { useInfiniteQuery } from '@tanstack/react-query';
import ArticleCard from '../components/Article/ArticleCard';

const fetchArticleList = async (titleId: number, page: number) => { // 비동기 함수, promise 반환, async 익명함수
  const response = await fetch(`https://comic.naver.com/api/article/list?titleId=${titleId}&page=${page}`);
  return response.json();
}

type DetailScreenRouteProp = RouteProp<DetailScreensParams, 'Detail'>;

export default function DetailScreen() {
    const route = useRoute<DetailScreenRouteProp>(); // 제네릭으로 타입 지정해야 함
    const titleId = route.params.titleId;

    const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<ArticleResponse>({
      queryKey: ['ArticleList', titleId],
      queryFn: ({ pageParam }) => {
        return fetchArticleList(titleId, pageParam as number);
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage) => 
        lastPage.pageInfo?.totalPages === lastPage.pageInfo?.page || !lastPage.pageInfo
          ? undefined
          : lastPage.pageInfo.page + 1,
    });

    return ( 
      <ScrollView bg='$backgroundDark950' onMomentumScrollEnd={() => fetchNextPage()}>
        <VStack bg='$backgroundDark950' w='$full' h='$full' pb={40}>
          <DetailHeader titleId={titleId} />
          <Divider my='$2' bgColor='$secondary800'/>
          {data?.pages.map((page) => 
                page.articleList?.map((article) => <ArticleCard key={article.no} article={article} />)
            )}
        </VStack>
        { isFetchingNextPage && <Center position='absolute' bottom={0} w='$full'>
            <Spinner color='$secondary400'/>
        </Center>
        }
    </ScrollView>
  );
}

