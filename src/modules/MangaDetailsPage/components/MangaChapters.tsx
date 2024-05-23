import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { getComicChapters } from "../../../api/api-services";
import { Comic } from "../../../models/Comic";
import Chapter from "./Chapter";
import MangaChaptersSkeleton from "./Skeletons/MangaChaptersSkeleton";

export default function MangaChapters({
  comic,
  hid,
}: {
  comic: Comic;
  hid: string;
}) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(0);

  const { data: comicChaptersData, isLoading: loadingChapters } = useQuery({
    queryKey: [`getComicChapters`, hid, page],
    queryFn: () => getComicChapters(hid ?? "", page),
    enabled: !!hid,
  });

  useEffect(() => {
    if (
      comicChaptersData?.total &&
      comicChaptersData?.limit &&
      comicChaptersData.total > 0
    ) {
      setLimit(
        comicChaptersData.total < comicChaptersData.limit
          ? 1
          : Math.floor(comicChaptersData.total / 60 - 1),
      );
    }
  }, [comicChaptersData?.total]);

  const filteredChapters = comicChaptersData?.chapters?.filter(
    (item) => item.lang === "en",
  );

  const onPrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const onNextClick = () => {
    if (page < limit) {
      setPage(page + 1);
    }
  };

  const onSkipToEndClick = () => {
    if (page < limit) {
      setPage(() => limit);
    }
  };

  const onSkipToStartClick = () => {
    if (page > 1) {
      setPage(() => 1);
    }
  };

  if (loadingChapters) {
    return <MangaChaptersSkeleton page={page} />;
  }

  return (
    <>
      <div className="mb-4 flex w-full flex-col items-start space-y-6 px-4 md:items-center">
        <div className="join self-center">
          <button
            className="btn join-item border-0 bg-zinc-800 text-slate-50 shadow-none"
            onClick={onSkipToStartClick}
            disabled={page === 1}
          >
            ◀︎◀︎
          </button>
          <button
            className="btn join-item border-0 bg-zinc-800 text-slate-50 shadow-none"
            onClick={onPrevClick}
            disabled={page === 1}
          >
            ◀︎
          </button>
          <button className="btn join-item border-0 bg-zinc-800 text-slate-50 shadow-none">
            Page {page}
          </button>
          <button
            className="btn join-item border-0 bg-zinc-800 text-slate-50 shadow-none"
            onClick={onNextClick}
            disabled={page === limit}
          >
            ▶︎
          </button>
          <button
            className="btn join-item border-0 bg-zinc-800 text-slate-50 shadow-none"
            onClick={onSkipToEndClick}
            disabled={page === limit}
          >
            ▶︎▶︎
          </button>
        </div>

        {filteredChapters ? (
          filteredChapters.map(
            (chap) =>
              comic.slug &&
              chap.hid && (
                <Link
                  to="/read/$manga/$chapter"
                  params={{
                    manga: comic.slug,
                    chapter: chap.hid,
                  }}
                  className="flex w-full items-center justify-around gap-4 rounded-lg bg-zinc-700 py-2 md:w-4/5"
                  key={chap.hid}
                >
                  <Chapter chap={chap} />
                </Link>
              ),
          )
        ) : (
          <p className="self-center">No chapters were found!</p>
        )}
      </div>
    </>
  );
}
