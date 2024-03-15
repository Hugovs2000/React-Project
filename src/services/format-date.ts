import { formatDistanceToNow } from "date-fns";

export default function formatDateToTime(date: string) {
  const isoDateString = date;

  const newdate = new Date(isoDateString);

  const formattedTime = newdate.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h24",
  });

  const result = formatDistanceToNow(formattedTime);

  return result + " ago";
}
