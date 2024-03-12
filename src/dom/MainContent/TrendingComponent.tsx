import { useQuery } from "@tanstack/react-query";
import {
  getCategories,
  getChapterByHid,
  getComicBySlug,
  getTopTrending,
} from "../../services/api-services";

function TrendingComponent() {
  const hid = "Z4IoDx6I";
  const slug = "the-reborn-young-lord-is-an-assassin";

  const { data: topData } = useQuery({
    queryKey: [`getTopData`],
    queryFn: () => getTopTrending(),
  });
  const { data: comicData } = useQuery({
    queryKey: [`getComicData`],
    queryFn: () => getComicBySlug(slug),
  });
  const { data: chapterData } = useQuery({
    queryKey: [`getChapterData`],
    queryFn: () => getChapterByHid(hid),
  });
  const { data: categoryData } = useQuery({
    queryKey: [`getCategoryData`],
    queryFn: () => getCategories(),
  });

  const imgUrls: string[] =
    topData?.trending[7].slice(0, 10).map((item) => {
      return "https://meo3.comick.pictures/" + item.md_covers[0].b2key;
    }) || [];

  return (
    <>
      <div>
        <h1 className="px-6 py-4">Top Trending Titles</h1>
        <div className="flex px-4 pb-4 gap-4 overflow-x-scroll overflow-y-hidden">
          {topData?.trending[7].slice(0, 10).map((item, index: number) => (
            <div
              className="relative rounded-xl overflow-hidden flex min-w-full h-60 bg-cover"
              style={{
                backgroundImage: `url(${imgUrls[index]})`,
              }}
              key={item.slug}>
              <div className="border-slate-50 border-2 rounded-xl min-h-full min-w-full absolute bg-black opacity-85"></div>
              <img
                src={imgUrls[index]}
                alt={item.md_covers[0].b2key}
                key={item.md_covers[0].b2key}
                className="rounded-xl border-2 border-slate-50 z-10 ml-4 my-4"
              />
              <div className="flex z-10 p-4 items-center justify-center text-left">
                <h2>{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TrendingComponent;
