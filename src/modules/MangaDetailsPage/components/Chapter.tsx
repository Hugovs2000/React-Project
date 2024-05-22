import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { Chapter as Chap } from "../../../models/ChapterDetails";

export default function Chapter({ chap }: { chap: Chap }) {
  return (
    <>
      <div className="flex flex-col items-center min-w-[2.5rem]">
        <AiFillLike />
        {chap.up_count}
      </div>
      <div className="m-1">Chapter {chap.chap}</div>
      <div className="flex flex-col items-center min-w-[2.5rem]">
        <AiFillDislike />
        {chap.down_count}
      </div>
    </>
  );
}
