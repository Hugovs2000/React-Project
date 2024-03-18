import { ChapterDetails } from "../models/ChapterDetails";
import { Comic } from "../models/Comic";
import { TopComics } from "../models/TopComics";

const baseUrl = "https://api.comick.io/";

export async function getTop(): Promise<TopComics> {
  const res = await fetch(
    `${baseUrl}top?type=trending&comic_types=manhwa&accept_mature_content=false`
  );
  return await res.json();
}

export async function getComicBySlug(slug: string): Promise<Comic> {
  const res = await fetch(`${baseUrl}comic/${slug}/`);
  return await res.json();
}

export async function getChapterByHid(hid: string): Promise<ChapterDetails> {
  const res = await fetch(`${baseUrl}chapter/${hid}/`);
  return await res.json();
}

export async function getNewUpdates(): Promise<Comic[]> {
  const res = await fetch(
    `${baseUrl}chapter/?page=1&order=new&type=manhwa&accept_erotic_content=false`
  );
  return await res.json();
}

export async function getCategories(): Promise<Comic[]> {
  const res = await fetch(`${baseUrl}category/`);
  return await res.json();
}

export async function getComicChapters(hid: string): Promise<ChapterDetails> {
  const res = await fetch(`${baseUrl}comic/${hid}/chapters`);
  return await res.json();
}
