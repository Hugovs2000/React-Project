import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { Chapter as Chap } from "../../../models/comicChapters";

export default function Chapter({ chap }: { chap: Chap }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <AiFillLike />
        {chap.up_count}
      </div>
      <div className="m-1">Chapter {chap.chap}</div>
      <div className="flex flex-col items-center">
        <AiFillDislike />
        {chap.down_count}
      </div>
    </>
  );
}
