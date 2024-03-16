import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { GiRead } from "react-icons/gi";
import { Route } from "../../routes/details.$manga";
import { getComicChapters } from "../../services/api-services";
import convertToUrl from "../../services/convert-image-string";
import Genre from "../../shared/Genre";
import MangaDetailsSkeleton from "./components/MangaDetailsSkeleton";

function MangaDetailsPage() {
  const topData = Route.useLoaderData();

  if (
    !(
      topData?.authors?.[0]?.name ||
      topData?.comic?.follow_count ||
      topData?.comic?.last_chapter ||
      topData?.comic?.title ||
      topData?.comic?.hid ||
      topData?.comic?.md_comic_md_genres?.[0]?.md_genres?.name ||
      topData?.comic?.md_covers?.[0]?.b2key ||
      topData?.comic?.desc ||
      topData?.comic?.user_follow_count
    )
  ) {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="m-4">Manga Not Found. Return Home</div>
        <Link to="/" className="underline text-blue-600">
          Home
        </Link>
      </div>
    );
  }

  const { data: comicChaptersData, isLoading: loadingChapters } = useQuery({
    queryKey: [`getComicChapters`, topData.comic.slug],
    queryFn: () => getComicChapters(topData?.comic.hid),
    enabled: !!topData,
  });

  if (loadingChapters) {
    return <MangaDetailsSkeleton />;
  }

  if (
    !(
      comicChaptersData?.chapters?.[0]?.chap ||
      comicChaptersData?.chapters?.[0]?.group_name?.[0]
    )
  ) {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="m-4">Manga Not Found. Return Home</div>
        <Link to="/" className="underline text-blue-600">
          Home
        </Link>
      </div>
    );
  }

  const chapters = comicChaptersData.chapters?.filter(
    (item) =>
      item.group_name?.[0] === comicChaptersData.chapters[0].group_name?.[0]
  );

  return (
    <div className=" bg-zinc-800 h-full text-slate-50 flex flex-col">
      <div
        className="flex flex-col justify-center items-center bg-cover relative shadow-slate-50/30 shadow-lg"
        style={{
          backgroundImage: `url(${convertToUrl(topData.comic.md_covers[0].b2key)})`,
        }}>
        <div className="z-[1] p-1 w-full flex justify-around bg-emerald-700 rounded-b-md">
          <div className="w-1/2 text-center">
            {topData.comic.last_chapter} chapters
          </div>
          |
          <div className="w-1/2 text-center">
            {topData.comic.user_follow_count} followers
          </div>
        </div>
        <div className="backdrop-blur-sm min-h-full min-w-full md:max-w-4xl md:min-w-full absolute bg-black/60"></div>
        <div className=" absolute z-[1] w-full h-full bg-gradient-to-t from-black/95 to-60%"></div>
        <div className="flex flex-col justify-center items-center z-[1] w-full">
          <img
            src={convertToUrl(topData.comic.md_covers[0].b2key)}
            alt="Cover"
            className="rounded-xl border-2 border-slate-50 max-h-52 md:max-h-96 m-8 mb-2 w-fit"
          />
          <div className="text-xs">
            By:{" "}
            {!topData.authors?.[0]?.name
              ? "Unknown"
              : topData?.authors?.[0]?.name}
          </div>
          <div className="text-xs">Released: {topData.comic.year}</div>
          <div className="w-full text-center text-3xl font-bold m-4 mt-8 px-2">
            {topData.comic.title}
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center gap-2 md:gap-4 m-4 mt-6 flex-wrap">
          {topData.comic.md_comic_md_genres.map((genre) => (
            <Genre
              genre={genre}
              className="p-1 md:p-2 text-sm"
              key={genre.md_genres.name}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className="mx-4 mb-0 font-bold">Description</h2>
        <div className="m-4 mt-2 line-clamp-6 hover:line-clamp-none">
          {topData.comic.desc}
        </div>
      </div>
      <button className="self-start bg-emerald-700 rounded-md p-2 m-4 gap-1 flex flex-nowrap items-center justify-around">
        Start Reading <GiRead />
      </button>
      <div className="carousel carousel-center max-w-full m-4 space-x-6">
        {chapters?.map((item) => (
          <div
            className="carousel-item gap-4 flex flex-col justify-center items-between rounded-lg bg-zinc-700 p-2"
            key={item.hid}>
            <div className="m-1">Chapter {item.chap}</div>
            <div className="m-1 flex items-center justify-around">
              <div className="flex flex-col items-center">
                <AiFillLike />
                {item.up_count}
              </div>
              <div className="flex flex-col items-center">
                <AiFillDislike />
                {item.down_count}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MangaDetailsPage;
