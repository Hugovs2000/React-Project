export interface ITopTrending {
  rank: Rank[];
  recentRank: RecentRank[];
  trending: Trending;
  follows: Follow[];
  news: News[];
  extendedNews: ExtendedNew[];
  completions: Completion[];
  topFollowNewComics: TopFollowNewComics;
  topFollowComics: TopFollowComics;
  comicsByCurrentSeason: ComicsByCurrentSeason;
}

export interface Rank {
  slug: string;
  title: string;
  demographic?: number;
  content_rating: string;
  genres: number[];
  last_chapter: number;
  md_covers: MdCover[];
}

export interface MdCover {
  w: number;
  h: number;
  b2key: string;
}

export interface RecentRank {
  slug: string;
  title: string;
  demographic?: number;
  content_rating: string;
  genres: number[];
  md_covers: MdCover2[];
}

export interface MdCover2 {
  w: number;
  h: number;
  b2key: string;
}

export interface Trending {
  "7": N7[];
  "30": N30[];
  "90": N90[];
}

export interface N7 {
  id: number;
  title: string;
  slug: string;
  content_rating: string;
  genres: number[];
  demographic?: number;
  md_covers: MdCover3[];
}

export interface MdCover3 {
  w: number;
  h: number;
  b2key: string;
}

export interface N30 {
  id: number;
  title: string;
  slug: string;
  content_rating: string;
  genres: number[];
  demographic?: number;
  md_covers: MdCover4[];
}

export interface MdCover4 {
  w: number;
  h: number;
  b2key: string;
}

export interface N90 {
  id: number;
  title: string;
  slug: string;
  content_rating: string;
  genres: number[];
  demographic?: number;
  md_covers: MdCover5[];
}

export interface MdCover5 {
  w: number;
  h: number;
  b2key: string;
}

export interface Follow {
  created_at: string;
  identities: Identities;
  md_comics: MdComics;
}

export interface Identities {
  id: string;
  traits: Traits;
}

export interface Traits {
  username: string;
  id: string;
  gravatar: string;
}

export interface MdComics {
  id: number;
  title: string;
  content_rating: string;
  slug: string;
  follow_count: number;
  demographic?: number;
  genres: number[];
  md_covers: MdCover6[];
}

export interface MdCover6 {
  w: number;
  h: number;
  b2key: string;
}

export interface News {
  slug: string;
  title: string;
  demographic?: number;
  genres: number[];
  content_rating: string;
  created_at: string;
  last_chapter: number;
  md_covers: MdCover7[];
}

export interface MdCover7 {
  w: number;
  h: number;
  b2key: string;
}

export interface ExtendedNew {
  slug: string;
  title: string;
  demographic?: number;
  genres: number[];
  content_rating: string;
  created_at: string;
  last_chapter?: number;
  md_covers: MdCover8[];
}

export interface MdCover8 {
  w: number;
  h: number;
  b2key: string;
}

export interface Completion {
  slug: string;
  title: string;
  demographic?: number;
  genres: number[];
  created_at: string;
  uploaded_at: string;
  last_chapter: number;
  content_rating: string;
  md_covers: MdCover9[];
}

export interface MdCover9 {
  w: number;
  h: number;
  b2key: string;
}

export interface TopFollowNewComics {
  "7": N72[];
  "30": N302[];
  "90": N902[];
}

export interface N72 {
  title: string;
  slug: string;
  content_rating: string;
  genres: number[];
  demographic?: number;
  md_covers: MdCover10[];
}

export interface MdCover10 {
  w: number;
  h: number;
  b2key: string;
}

export interface N302 {
  title: string;
  slug: string;
  content_rating: string;
  genres: number[];
  demographic?: number;
  md_covers: MdCover11[];
}

export interface MdCover11 {
  w: number;
  h: number;
  b2key: string;
}

export interface N902 {
  title: string;
  slug: string;
  content_rating: string;
  genres: number[];
  demographic?: number;
  md_covers: MdCover12[];
}

export interface MdCover12 {
  w: number;
  h: number;
  b2key: string;
}

export interface TopFollowComics {
  "7": N73[];
  "30": N303[];
  "90": N903[];
}

export interface N73 {
  title: string;
  slug: string;
  content_rating: string;
  id: number;
  genres: number[];
  demographic?: number;
  md_covers: MdCover13[];
  count: number;
}

export interface MdCover13 {
  w: number;
  h: number;
  b2key: string;
}

export interface N303 {
  title: string;
  slug: string;
  content_rating: string;
  id: number;
  genres: number[];
  demographic?: number;
  md_covers: MdCover14[];
  count: number;
}

export interface MdCover14 {
  w: number;
  h: number;
  b2key: string;
}

export interface N903 {
  title: string;
  slug: string;
  content_rating: string;
  id: number;
  genres: number[];
  demographic?: number;
  md_covers: MdCover15[];
  count: number;
}

export interface MdCover15 {
  w: number;
  h: number;
  b2key: string;
}

export interface ComicsByCurrentSeason {
  year: string;
  season: string;
  data: Daum[];
}

export interface Daum {
  title: string;
  slug: string;
  content_rating: string;
  id: number;
  genres: number[];
  user_follow_count: number;
  follow_rank: number;
  demographic?: number;
  last_chapter?: number;
  desc: string;
  mies?: Mies;
  status: number;
  created_at: string;
  hid: string;
  md_covers: MdCover16[];
}

export interface Mies {
  id: number;
  type?: string;
  title: string;
  rating?: string;
  rating_count?: number;
  desc: string;
  slug: string;
  year: undefined;
  image: string;
  status: string;
  volumes: undefined;
  chapters: undefined;
  english_title?: string;
  japanese_title: string;
  published_date?: string;
  completed_date: undefined;
  ranked?: number;
  popularity: number;
  background: undefined;
  members: number;
  favourites: undefined;
  myid: number;
  episodes?: number;
  duration: string;
  premiered: undefined;
  broadcast?: string;
  source: string;
  age_restricted?: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  version: number;
  my_producer_id: undefined;
  type_url: string;
  crawl: boolean;
  anidb_id: undefined;
  links: undefined;
  promotional_videos: PromotionalVideo[];
  has_file: boolean;
  crawled_at: string;
}

export interface PromotionalVideo {
  title: string;
  youtubeId: string;
}

export interface MdCover16 {
  w: number;
  h: number;
  b2key: string;
}
