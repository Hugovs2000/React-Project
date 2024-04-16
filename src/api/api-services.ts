import { ChapterDetails } from "../models/ChapterDetails";
import { Comic } from "../models/Comic";
import { Genre } from "../models/Genre";
import { TopComics } from "../models/TopComics";

const baseUrl = "https://api.comick.fun/";

export async function getTop(): Promise<TopComics> {
  const res = await fetch(
    `${baseUrl}top?type=trending&comic_types=manhwa&accept_mature_content=false`,
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
    `${baseUrl}chapter/?page=1&order=new&type=manhwa&accept_erotic_content=false`,
  );
  return await res.json();
}

export async function getCategories(): Promise<Comic[]> {
  const res = await fetch(`${baseUrl}category/`);
  return await res.json();
}

export async function getComicChapters(
  hid: string,
  page: number,
): Promise<ChapterDetails> {
  const res = await fetch(`${baseUrl}comic/${hid}/chapters?page=${page}`);
  return await res.json();
}

export async function getGenres(): Promise<Genre[]> {
  const res = await fetch(`${baseUrl}genre/`);
  return await res.json();
}

export async function getSearchQuery(
  genres: string[],
  status: number,
  sortBy: string,
  query: string,
): Promise<Comic[]> {
  const res = await fetch(
    `${baseUrl}v1.0/search/?genres=${genres}&type=comic&page=1&limit=15&status=${status}&sort=${sortBy}&showall=false&q=${query}&t=false`,
  );
  return await res.json();
}
