import { IChapterDetails } from "../models/ChapterDetails";
import { IComic } from "../models/Comic";
import { ITopComics } from "../models/TopComics";

const baseUrl = "https://api.comick.io/";

export async function getTop(): Promise<ITopComics> {
  const res = await fetch(
    `${baseUrl}top?type=trending&comic_types=manhwa&accept_mature_content=false`
  );
  return await res.json();
}

export async function getComicBySlug(slug: string): Promise<IComic> {
  const res = await fetch(`${baseUrl}comic/${slug}/`);
  return await res.json();
}

export async function getChapterByHid(hid: string): Promise<IChapterDetails> {
  const res = await fetch(`${baseUrl}chapter/${hid}/`);
  return await res.json();
}

export async function getNewUpdates(): Promise<IComic[]> {
  const res = await fetch(
    `${baseUrl}chapter/?page=1&order=new&type=manhwa&accept_erotic_content=false`
  );
  return await res.json();
}

export async function getCategories(): Promise<IComic[]> {
  const res = await fetch(`${baseUrl}category/`);
  return await res.json();
}
