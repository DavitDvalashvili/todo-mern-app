import { parseISO, formatDistanceToNow } from "date-fns";
import { time } from "../types";

const TimeAgo = ({ timestamp, timeAgo }: time) => {
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `Last update ${timePeriod} ago`;
  }
  return <span>{timeAgo}</span>;
};

export default TimeAgo;
