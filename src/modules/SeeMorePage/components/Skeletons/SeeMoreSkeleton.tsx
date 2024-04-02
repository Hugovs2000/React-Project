export default function SeeMoreSkeleton() {
  const skeletonElements = [];

  for (let i = 0; i < 12; i++) {
    skeletonElements.push(<div key={i} className="skeleton h-32 w-20"></div>);
  }

  return (
    <div className="m-4 flex flex-col gap-4">
      <div className="skeleton h-10 w-32 rounded-md"></div>
      <div className="flex h-full max-w-xl flex-wrap justify-around gap-4">
        {skeletonElements}
      </div>
    </div>
  );
}
