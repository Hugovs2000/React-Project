import { IComic } from "../models/Comic";

export interface ITopComics {
  rank: IComic[];
  recentRank: IComic[];
  trending: INumberDays;
  follows: IComic[];
  news: IComic[];
  extendedNews: IComic[];
  completions: IComic[];
  topFollowNewComics: INumberDays;
  topFollowComics: INumberDays;
  comicsByCurrentSeason: IComic;
}

export interface INumberDays {
  "7": IComic[];
  "30": IComic[];
  "90": IComic[];
}
