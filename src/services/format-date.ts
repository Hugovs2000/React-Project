import { formatDistance } from "date-fns";

export default function formatDateToTime(date: string) {
  return formatDistance(new Date(date), Date.now(), { addSuffix: true });
}
