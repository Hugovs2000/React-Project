import { MdCover, Recommendation } from "../../../models/Comic";
import convertToUrl from "../../../utils/convert-image-string";

export default function RecommendedCard({
  recom,
  cover,
}: {
  recom: Recommendation;
  cover: MdCover;
}) {
  return (
    <div className="overflow-hidden h-full rounded-xl shadow-around flex flex-col items-center justify-start gap-4 relative">
      <img
        src={convertToUrl(cover.b2key)}
        alt={recom.relates.title}
        className=" w-auto max-w-36 h-52 object-cover object-top overflow-hidden"
      />
      <div className=" absolute z-10 flex flex-col items-center  bottom-0">
        <span className="text-xl font-bold z-10 text-center my-1 mx-3 line-clamp-2 hover:line-clamp-5">
          {recom.relates.title}
        </span>
      </div>
      <div className=" absolute z-[5] w-full h-full bg-gradient-to-t from-black to-70%"></div>
    </div>
  );
}
