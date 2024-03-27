import { Link } from "@tanstack/react-router";
import { Comic } from "../../../models/Comic";

export default function DrawerLatestUpdatesSection({
  latestUpdatesData,
}: {
  latestUpdatesData: Comic[];
}) {
  return (
    <>
      <h2 className="font-bold text-emerald-600 mt-4 text-lg">
        Latest Updates
      </h2>
      <ul className="mb-2">
        {latestUpdatesData.slice(0, 5).map(
          (comic) =>
            comic?.md_comics?.slug &&
            comic?.md_comics?.title && (
              <Link
                to="/details/$manga"
                params={{
                  manga: comic.md_comics.slug,
                }}
                key={comic.md_comics.slug}>
                <li className="text-slate-50 ml-4 my-1 text-nowrap max-w-full text-ellipsis overflow-hidden text-sm">
                  {comic.md_comics.title}
                </li>
              </Link>
            )
        )}
      </ul>
    </>
  );
}
