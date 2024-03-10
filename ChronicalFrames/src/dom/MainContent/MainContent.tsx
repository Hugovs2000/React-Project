import {
  useGetAllCatagoriesQuery,
  useGetTopTrendingQuery,
} from "../../services/api-services";

function MainContent() {
  const {
    data: catagoryData,
    error: catagoryError,
    isLoading: catagoryLoading,
  } = useGetAllCatagoriesQuery(null);
  const {
    data: topData,
    error: topError,
    isLoading: topLoading,
  } = useGetTopTrendingQuery(null);

  console.log(catagoryData);
  console.log(topData);

  return (
    <>
      <div className=" bg-zinc-800 h-auto p-6 text-slate-50">
        <h1>Top New Titles</h1>
        <div>
          {catagoryError ? (
            <>
              <br />
              Oh no, there was an error. Could not find Catagories
              <br />
            </>
          ) : catagoryLoading ? (
            <>Loading...</>
          ) : catagoryData ? (
            <>
              <div className="flex flex-col gap-4 mt-4">
                {/* {
            catagoryData.map((item) => (
            <div>
                {item.title}
            </div>
            ))} */}
              </div>
            </>
          ) : null}
          {topError ? (
            <>
              <br />
              Oh no, there was an error. Could not find Top Trending
            </>
          ) : topLoading ? (
            <>Loading...</>
          ) : topData ? (
            <>
              <div className="flex flex-col gap-4 mt-4">
                {/* {
            topData.map((item) => (
            <div>
                {item.title}
            </div>
            ))} */}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default MainContent;
