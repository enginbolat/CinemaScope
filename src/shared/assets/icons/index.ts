import HomeIcon from './home-icon';
import AccessTimeIcon from './access-time-icon';
import BookmarkIcon from './bookmark-icon';
import OndemandVideoIcon from './ondemand-video-icon';
import { Star } from './star';
import ChevronLeft from './chevron-left';
import HeartOutline from './heart-outline';
import HeartFilled from './heart-filled';
import { Search } from './search';

const Icons = {
  HomeIcon,
  AccessTimeIcon,
  BookmarkIcon,
  OndemandVideoIcon,
  Star,
  ChevronLeft,
  HeartOutline,
  HeartFilled,
  Search,
};

export type IconType = keyof typeof Icons;
export default Icons;
