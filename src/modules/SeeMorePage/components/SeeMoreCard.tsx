import convertToUrl from "../../../utils/convert-image-string";

export default function SeeMoreCard({
  b2key,
  title,
  chapNum,
}: {
  b2key: string;
  title: string;
  chapNum?: string;
}) {
  return (
    b2key && (
      <>
        <div
          className="h-36 w-24 rounded-xl object-center shadow-around"
          style={{
            backgroundImage: `url(${convertToUrl(b2key)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {chapNum && (
            <div className="h-fit w-fit rounded-md bg-emerald-600 px-2 ">
              {chapNum}
            </div>
          )}
        </div>
        <div className="mt-2 flex max-w-32 flex-wrap items-center text-center">
          <span className="line-clamp-2 text-base">{title}</span>
        </div>
      </>
    )
  );
}
