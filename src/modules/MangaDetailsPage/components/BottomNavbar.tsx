export default function BottomNavbar({
  active,
  setActive,
}: {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}) {
  const activeClass =
    "active z-50 bg-zinc-800 border-emerald-600 text-emerald-400";
  return (
    <div className="btm-nav bg-zinc-900 z-20">
      <button
        id="chapters"
        className={`${active === "chapters" ? `${activeClass}` : "z-50"}`}
        onClick={(event) => {
          setActive(event.currentTarget.id);
        }}>
        Chapters
      </button>
      <button
        id="details"
        className={`${active === "details" ? `${activeClass}` : "z-50"}`}
        onClick={(event) => {
          setActive(event.currentTarget.id);
        }}>
        Details
      </button>
      <button
        id="recommended"
        className={`${active === "recommended" ? `${activeClass}` : "z-50"}`}
        onClick={(event) => {
          setActive(event.currentTarget.id);
        }}>
        Recommended
      </button>
    </div>
  );
}
