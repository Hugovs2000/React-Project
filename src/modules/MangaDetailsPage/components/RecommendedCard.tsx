import { LazyLoadImage } from "react-lazy-load-image-component";
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
    <div className="relative flex h-full w-[8.5rem] flex-col items-center justify-start gap-4 overflow-hidden rounded-xl shadow-around">
      <LazyLoadImage
        src={convertToUrl(cover.b2key)}
        alt={recom.relates.title}
        className="h-52 w-auto min-w-36 overflow-hidden object-cover object-top"
      />
      <div className="absolute bottom-0 z-10 flex flex-col  items-center">
        <span className="z-10 mx-3 my-1 line-clamp-2 text-center text-xl font-bold hover:line-clamp-5">
          {recom.relates.title}
        </span>
      </div>
      <div className="absolute z-[5] h-full w-full bg-gradient-to-t from-black to-70%"></div>
    </div>
  );
}
