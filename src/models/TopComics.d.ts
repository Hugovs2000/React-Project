import { Comic } from "./Comic";

export interface TopComics {
  rank: Comic[];
  recentRank: Comic[];
  trending: NumberDays;
  follows: Comic[];
  news: Comic[];
  extendedNews: Comic[];
  completions: Comic[];
  topFollowNewComics: NumberDays;
  topFollowComics: NumberDays;
  comicsByCurrentSeason: Comic;
}

export interface NumberDays {
  "7": Comic[];
  "30": Comic[];
  "90": Comic[];
}
