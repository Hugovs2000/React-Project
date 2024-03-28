export default function SeeMoreSkeleton() {
  const skeletonElements = [];

  for (let i = 0; i < 12; i++) {
    skeletonElements.push(<div key={i} className="skeleton w-20 h-32"></div>);
  }

  return (
    <div className="m-4 flex flex-col gap-4">
      <div className="h-10 w-32 skeleton rounded-md"></div>
      <div className="flex flex-wrap h-full gap-4 justify-around max-w-xl">
        {skeletonElements}
      </div>
    </div>
  );
}
