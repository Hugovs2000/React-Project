import { TopComics } from "../../../models/TopComics";
import TopTenCard from "./TopTenCard";

function TopTenSection({ topTenData }: { topTenData: TopComics }) {
  if (!topTenData?.recentRank?.[0]) return <>Not Found</>;

  const filteredComics = topTenData.recentRank
    .filter((item) => !!item?.md_covers?.[0]?.b2key)
    .slice(0, 10);

  return (
    <div>
      <h2 className="mx-6 mt-8 text-xl text-slate-50">Top 10</h2>
      <div className="snap-mandatory snap-x flex px-8 py-8 gap-12 overflow-x-scroll overflow-y-hidden">
        {filteredComics.map((item, index) => (
          <TopTenCard item={item} index={index} key={item.slug} />
        ))}
      </div>
    </div>
  );
}

export default TopTenSection;
