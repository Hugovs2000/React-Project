import { Link } from "@tanstack/react-router";
import { TopComics } from "../../../models/TopComics";
import TopTenCard from "./TopTenCard";

export default function TopTenSection({
  topTenData,
}: {
  topTenData: TopComics;
}) {
  if (
    !(
      topTenData?.recentRank?.[0]?.md_covers?.[0]?.b2key ||
      topTenData?.recentRank?.[0]?.slug
    )
  )
    return <></>;

  const filteredComics = topTenData.recentRank
    .filter((item) => !!item?.md_covers?.[0]?.b2key)
    .slice(0, 10);

  return (
    <>
      <div>
        <h2 className="mx-6 mt-8 text-xl text-slate-50">Top 10</h2>
        <div className="flex snap-x snap-mandatory gap-12 overflow-y-hidden overflow-x-scroll px-8 py-8">
          {filteredComics?.map(
            (item, index) =>
              item.slug && (
                <Link
                  to="/details/$manga"
                  params={{
                    manga: item.slug,
                  }}
                  key={item.slug}
                  className="min-w-full md:min-w-fit"
                >
                  <TopTenCard item={item} index={index} key={item.slug} />
                </Link>
              ),
          )}
        </div>
      </div>
    </>
  );
}
