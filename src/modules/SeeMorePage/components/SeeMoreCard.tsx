import convertToUrl from "../../../utils/convert-image-string";

export default function SeeMoreCard({
  b2key,
  title,
}: {
  b2key: string;
  title: string;
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
          }}></div>
        <div className="mt-2 flex text-center items-center flex-wrap max-w-32">
          <span className="text-base line-clamp-2">{title}</span>
        </div>
      </>
    )
  );
}
