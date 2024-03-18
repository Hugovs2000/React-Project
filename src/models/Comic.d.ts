export interface Comic {
  id?: number;
  slug?: string;
  title?: string;
  demographic?: number;
  content_rating?: string;
  genres?: number[];
  last_chapter?: number;
  md_covers?: MdCover[];
  created_at?: string;
  identities?: Identities;
  md_comics?: Comic;
  uploaded_at?: string;
  year?: string;
  season?: string;
  data?: Comic[];
  user_follow_count?: number;
  follow_rank?: number;
  desc?: string;
  mies?: MoreInfo;
  status?: number;
  hid?: string;
  follow_count?: number;
  count?: number;
  country?: string;
  translation_completed?: boolean;
  final_chapter?: string;
  firstChap?: FirstChap;
  comic?: Comic;
  artists?: Artist[];
  authors?: Author[];
  langList?: string[];
  recommendable?: boolean;
  englishLink?: unknown;
  matureContent?: boolean;
  checkVol2Chap1?: boolean;
  links?: Links;
  chapter_count?: number;
  hentai?: boolean;
  comment_count?: number;
  parsed?: string;
  mismatch?: unknown;
  bayesian_rating?: unknown;
  rating_count?: number;
  chapter_numbers_reset_on_new_volume_manual?: boolean;
  final_volume?: unknown;
  noindex?: boolean;
  adsense?: boolean;
  recommendations?: Recommendation[];
  relate_from?: unknown[];
  md_titles?: MdTitle[];
  md_comic_md_genres?: MdComicMdGenre[];
  mu_comics?: MuComics;
  iso639_1?: string;
  lang_name?: string;
  lang_native?: string;
  chap?: string;
  vol?: unknown;
  last_at?: string;
  group_name?: string[];
  updated_at?: string;
  up_count?: number;
  lang?: string;
  down_count?: number;
}

export interface FirstChap {
  chap: string;
  hid: string;
  lang: string;
  group_name: string[];
  vol: unknown;
}

export interface Links {
  mu?: string;
  mal?: string;
  raw?: string;
  engtl?: string;
  kt?: string;
  nu?: string;
}

export interface Recommendation {
  up: number;
  down: number;
  total: number;
  relates: Relates;
}

export interface Relates {
  title: string;
  slug: string;
  hid: string;
  md_covers: MdCover[];
}

export interface MdTitle {
  title: string;
  lang: string;
}

export interface MdComicMdGenre {
  md_genres: MdGenres;
}

export interface MdGenres {
  name: string;
  type?: string;
  slug: string;
  group: string;
}

export interface MuComics {
  mu_comic_publishers: MuComicPublisher[];
  licensed_in_english: unknown;
  mu_comic_categories: MuComicCategory[];
}

export interface MuComicPublisher {
  mu_publishers: MuPublishers;
}

export interface MuPublishers {
  title: string;
  slug: string;
}

export interface MuComicCategory {
  mu_categories: MuCategories;
  positive_vote: number;
  negative_vote: number;
}

export interface MuCategories {
  title: string;
  slug: string;
}

export interface Artist {
  name: string;
  slug: string;
}

export interface Author {
  name: string;
  slug: string;
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

export interface MdCover {
  w: number;
  h: number;
  b2key: string;
  name?: string;
  s?: number;
  optimized?: number;
}

export interface MoreInfo {
  id: number;
  type?: string;
  title: string;
  rating?: string;
  rating_count?: number;
  desc: string;
  slug: string;
  year: unknown;
  image: string;
  status: string;
  volumes: unknown;
  chapters: unknown;
  english_title?: string;
  japanese_title: string;
  published_date?: string;
  completed_date: unknown;
  ranked?: number;
  popularity: number;
  background: unknown;
  members: number;
  favourites: unknown;
  myid: number;
  episodes?: number;
  duration: string;
  premiered: unknown;
  broadcast?: string;
  source: string;
  age_restricted?: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  version: number;
  my_producer_id: unknown;
  type_url: string;
  crawl: boolean;
  anidb_id: unknown;
  promotional_videos: PromotionalVideo[];
  has_file: boolean;
  crawled_at: string;
}

export interface PromotionalVideo {
  title: string;
  youtubeId: string;
}
