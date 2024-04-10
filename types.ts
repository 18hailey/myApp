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
    Detail: {webtoon?: Webtoon}
};

export type DetailScreensParams = {
    Main: undefined,
    Detail: {titleId: number},
    Viewer: {article: WebtoonArticleCard}
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
    blogUrl? : string
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

export interface WeekDayWebtoonResponse {
    titleList: WeekDayWebtoon[]
}

export interface WeekDayWebtoon {
    titleId: number,
    titleName: string,
    author: string,
    writers: Author[],
    painters: Author[],
    novelOriginAuthors: Author[],
    thumbnailUrl: string,
    up: boolean,
    rest: boolean,
    bm: boolean,
    adult: boolean,
    starScore: number,
    viewCount: number,
    openToday: boolean,
    potenUp: boolean,
    bestChallengeLevelUp: boolean,
    finish: boolean,
    new: boolean
}

export interface Author {
    artistId: number,
    name: string,
    artistTypeList: string[],
    profileBadge: string,
    profileImageUrl: string,
    profilePageUrl: string,
    postDescription: string
}

export interface Tag {
    id: number,
    tagName: string,
    urlPath: string,
    curationType: string
}

export interface WebtoonDetail {
    titleId: number,
    thumbnailUrl: string,
    posterThumbnailUrl: string,
    sharedThumbnailUrl: string,
    titleName: string,
    contentsNo: number,
    webtoonLevelCode: string,
    rest: boolean,
    finished: boolean,
    dailyPass: boolean,
    publishDayOfWeekList: string[],
    chargeBestChallenge: boolean,
    communityArtists: Author[],
    synopsis: string,
    favorite: boolean,
    favoriteCount: number,
    age: {
        type: string,
        description: string;
    },
    publishDescription: string,
    curationTagList: Tag[],
    thumbnailBadgeList: [],
    adBannerList: [],
    firstArticle: {
        no: number,
        subtitle: string,
        charge: boolean
    },
    gfpAdCustomParam: {
        titleId: number,
        webtoonLevelCode: string,
        titleName: string,
        displayAuthor: string,
        cpid: string,
        cpName: string,
        genreTypes: string[],
        rankGenreTypes: string[],
        tags: string[],
        weekdays: string[],
        finishedYn: string,
        adultYn: string,
        dailyPlusYn: string,
        dailyFreeYn: string
    },
    new: boolean
}

export interface ArticleList {
    no: number,
    thumbnailUrl: string,
    subtitle: string,
    starScore: number,
    bgm: boolean,
    up: boolean,
    charge: boolean,
    serviceDateDescription: string,
    volumeNo: number,
    hasReadLog: boolean,
    recentlyReadLog: boolean,
    thumbnailClock: boolean,
    thumbnailLock: boolean
}

export interface Article {
    titleId: number,
    webtoonLevelCode: string,
    totalCount: number,
    contentsNo: number,
    finished: boolean,
    dailyPass: boolean,
    chargeBestChallenge: boolean,
    articleList: ArticleList[]
}

export interface ArticleResponse {
    titleId: number,
    webtoonLevelCode: string,
    totalCount: number,
    contentsNo: number,
    finished: boolean,
    dailyPass: boolean,
    chargeBestChallenge: boolean,
    articleList?: WebtoonArticleCard[],
    chargeFolderArticleList: WebtoonArticleCard[],
    chargeFolderUp: boolean,
    pageInfo: {
        totalRows: number,
        pageSize: number,
        indexSize: number,
        page: number,
        rawPage: number,
        endRowNum: number,
        lastPage: number,
        totalPages: number,
        startRowNum: number,
        firstPage: number,
        prevPage: number,
        nextPage: number
    },
    sort: string
}

export interface WebtoonArticleCard {
    no: number,
    thumbnailUrl: string,
    subtitle: string,
    starScore: number,
    bgm: boolean,
    up: boolean,
    charge: boolean,
    serviceDateDescription: string,
    volumeNo: number,
    hasReadLog: boolean,
    recentlyReadLog: boolean,
    thumbnailClock: boolean,
    thumbnailLock: boolean
}

export interface ViewerResponse {
    imageUrls: string[]
}