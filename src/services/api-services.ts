import { ICategory } from "../models/category";
import { IChapter } from "../models/chapter";
import { IComicChapters } from "../models/comicChapters";
import { IComic } from "../models/comics";
import { INewUpdates } from "../models/newUpdates";
import { ITopTrending } from "../models/topTrending";

const baseUrl = "https://api.comick.io/";

export async function getTop(): Promise<ITopTrending> {
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

export async function getNewUpdates(): Promise<INewUpdates> {
  const res = await fetch(
    `${baseUrl}chapter/?page=1&order=new&type=manhwa&accept_erotic_content=false`
  );
  return await res.json();
}

export async function getCategories(): Promise<ICategory> {
  const res = await fetch(`${baseUrl}category/`);
  return await res.json();
}

export async function getComicChapters(hid: string): Promise<IComicChapters> {
  const res = await fetch(`${baseUrl}comic/${hid}/chapters`);
  return await res.json();
}
