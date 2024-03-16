import { IComic } from "../../../models/comics";

export default function MangaDescription({ topData }: { topData: IComic }) {
  return (
    <div>
      <h2 className="mx-4 mb-0 font-bold">Description</h2>
      <div className="m-4 mt-2 line-clamp-6 hover:line-clamp-none">
        {topData.comic.desc}
      </div>
    </div>
  );
}
