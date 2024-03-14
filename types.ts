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