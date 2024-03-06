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
    Home: undefined,
    Search: undefined
};

export interface WebtoonResponse {
    webtoons: Webtoon[];
  }