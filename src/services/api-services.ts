import { ICategory } from "../models/category";
import { IChapter } from "../models/chapters";
import { IComic } from "../models/comics";
import { ITopTrending } from "../models/topTrending";

const baseUrl = "https://api.comick.io/";

export async function getTopTrending(): Promise<ITopTrending> {
  const res = await fetch(
    `${baseUrl}top?type=trending&comic_types=manhwa&accept_mature_content=false`
  );
  return await res.json();
}

export async function getComicBySlug(slug: string): Promise<IComic> {
  const res = await fetch(`${baseUrl}comic/${slug}/`);
  return await res.json();
}

export async function getChapterByHid(hid: string): Promise<IChapter> {
  const res = await fetch(`${baseUrl}chapter/${hid}/`);
  return await res.json();
}

export async function getCategories(): Promise<ICategory> {
  const res = await fetch(`${baseUrl}category/`);
  return await res.json();
}
