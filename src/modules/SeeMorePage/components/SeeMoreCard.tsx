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
          className="w-24 h-36 rounded-xl shadow-around object-center"
          style={{
            backgroundImage: `url(${convertToUrl(b2key)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          {chapNum && (
            <div className="w-fit h-fit px-2 bg-emerald-600 rounded-md ">
              {chapNum}
            </div>
          )}
        </div>
        <div className="mt-2 flex text-center items-center flex-wrap max-w-32">
          <span className="text-base line-clamp-2">{title}</span>
        </div>
      </>
    )
  );
}
