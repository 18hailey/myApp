export interface Webtoon {
    webtoonId: number,
    title: string,
    author: string,
    img: string,
    fanCount: number 
}

export type CounterScreenParams = {
    Counter: undefined,
    One: undefined,
    Two: undefined,
    Three: undefined
};

export type ScreensParams = {
    Main: undefined,
    Search: undefined,
    Detail: {webtoon: Webtoon}
};

export type TabScreenParams = {
    Home: undefined,
    My: undefined
}

export interface WebtoonResponse {
    webtoons: Webtoon[];
}

export interface Author {
    id: number,
    name: string
}

export interface TripleWebtoon {

    titleId: number,
    no: number,
    title: string,
    displayAuthor: string,
    writers: Author[],
    painters: Author[],
    novelOriginAuthors: Author[],
    summary: string,
    starScore: number,
    bgImage: string,
    backImage: string,
    frontImage: string,
    bgColor: string,
    bm: boolean,
    adult: boolean,
    rating: boolean,
    up: boolean,
    rest: boolean,
    tagList: TagList[],
    new: boolean
}

export interface TripleWebtoonResponse {
    itemList: TripleWebtoon[];
}

export interface TagList {
    id: number,
    tagName: string,
    urlPath: string,
    curationType: string
}