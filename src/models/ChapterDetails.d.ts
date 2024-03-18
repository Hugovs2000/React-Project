import { IComic, MdCover } from "../models/Comic";

export interface IChapterDetails {
  chapter: Chapter;
  next: Chapter;
  prev: Chapter;
  matureContent: boolean;
  chapters: Chapter[];
  dupGroupChapters: Chapter[];
  chapterLangList: Chapter[];
  canonical: string;
  seoTitle: string;
  seoDescription: string;
  chapTitle: string;
  checkVol2Chap1: boolean;
}

export interface Chapter {
  id?: number;
  chap?: string;
  vol?: unknown;
  title?: unknown;
  hid?: string;
  group_name?: string[];
  chapter_id?: unknown;
  created_at?: string;
  updated_at?: string;
  crawled_at?: string;
  mdid?: string;
  comment_count?: number;
  up_count?: number;
  down_count?: number;
  status?: string;
  adsense?: boolean;
  lang?: string;
  is_the_last_chapter?: boolean;
  md_comics?: IComic;
  md_images?: MdCover[];
  md_chapters_groups?: MdChaptersGroup[];
  href?: string;
}

export interface MdChaptersGroup {
  md_group_id?: number;
  md_groups: MdGroups;
}

export interface MdGroups {
  slug: string;
  title: string;
}
