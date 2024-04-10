// import { Pressable, Text, VStack } from "@gluestack-ui/themed"
// import ArticleCard from "./ArticleCard";
// import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
// import { ArticleResponse } from "../../types";


// const fetchArticleList = async (titleId: number, page: number) => { // 비동기 함수, promise 반환, async 익명함수
//     const response = await fetch(`https://comic.naver.com/api/article/list?titleId=${titleId}&page=${page}`);
//     return response.json();
// }

// interface ArticleListProp {
//     titleId: number;
// }

// export default function ArticleList({titleId}: ArticleListProp) {
//     // const { data } = useQuery<ArticleResponse> ({ // Webtoon 배열
//     //     queryKey: ['ArticleList', titleId], // 쿼리 식별하는 고유한 키, 따로따로 API 호출
//     //     queryFn: () => fetchArticleList(titleId, page), // 쿼리를 실행하는 비동기 함수
//     // });

//     const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<ArticleResponse>({
//         queryKey: ['ArticleList', titleId],
//         queryFn: ({ pageParam }) => {
//           return fetchArticleList(titleId, pageParam as number);
//         },
//         initialPageParam: 1,
//         getNextPageParam: (lastPage) => 
//           lastPage.pageInfo?.totalPages === lastPage.pageInfo?.page || !lastPage.pageInfo
//             ? undefined
//             : lastPage.pageInfo.page + 1,
//       });

// console.log(data?.pages[0]);

//     return (
//         <VStack>
//             <Pressable onPress={() => fetchNextPage()}>
//                 <Text>fetchNextPage</Text>
//             </Pressable>
//             {data?.pages.map((page) => 
//                 page.articleList?.map((article) => <ArticleCard key={article.no} article={article} />)
//             )}
            
//         </VStack>
//     );
// } 상위 부모인 DetailScreen과 병합
