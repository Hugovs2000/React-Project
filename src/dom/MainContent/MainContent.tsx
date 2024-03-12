import TrendingComponent from "./TrendingComponent";

function MainContent() {
  // Hardcoded for testing. Will implement selection later.
  // const slug = "the-reborn-young-lord-is-an-assassin";
  // const hid = "Z4IoDx6I";

  // const { data: topData } = useQuery({
  //   queryKey: [`getTopData`],
  //   queryFn: () => getTopTrending(),
  // });
  // const { data: comicData } = useQuery({
  //   queryKey: [`getComicData`],
  //   queryFn: () => getComicBySlug(slug),
  // });
  // const { data: chapterData } = useQuery({
  //   queryKey: [`getChapterData`],
  //   queryFn: () => getChapterByHid(hid),
  // });
  // const { data: categoryData } = useQuery({
  //   queryKey: [`getCategoryData`],
  //   queryFn: () => getCategories(),
  // });

  // Output also for testing. Will change later
  return (
    <>
      <div className=" bg-zinc-800 h-auto text-slate-50">
        <TrendingComponent />
        <div>
          {/* {topData && (
            <>
              <div className="flex flex-col gap-4 mt-4">
                <select name="select-comic">
                  {topData.trending["7"].slice(0, 10).map((item) => (
                    <option key={item.id}>{item.title}</option>
                  ))}
                </select>
              </div>
              <h1>Selected Comic:</h1>
              <div>{comicData?.comic.title}</div>
              {chapterData?.chapter.md_images
                .slice(0, 10)
                .map((item) => (
                  <img
                    src={"https://meo3.comick.pictures/" + item.b2key}
                    alt={item.b2key}
                    key={item.b2key}
                  />
                ))}
              <h1>Categories:</h1>
              {categoryData
                ?.slice(0, 10)
                .map((item) => <h3 key={item.id}>{item.title}</h3>)}
            </>
          )} */}
        </div>
      </div>
    </>
  );
}

export default MainContent;
