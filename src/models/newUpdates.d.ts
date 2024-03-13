export type INewUpdates = NewUpdates[];

export interface NewUpdates {
  id: number;
  status: string;
  chap: string;
  vol: any;
  last_at?: string;
  hid: string;
  created_at: string;
  group_name: string[];
  updated_at: string;
  up_count: number;
  lang: string;
  down_count: number;
  md_comics: MdComics;
  count: number;
}

export interface MdComics {
  id: number;
  hid: string;
  title: string;
  slug: string;
  content_rating: string;
  country: string;
  status: number;
  translation_completed?: boolean;
  last_chapter: number;
  final_chapter?: string;
  created_at: string;
  genres: number[];
  demographic?: number;
  md_covers: MdCover[];
}

export interface MdCover {
  w: number;
  h: number;
  b2key: string;
}
