import AccessTimeIcon from './access-time-icon'
import BookmarkIcon from './bookmark-icon'
import ChevronLeft from './chevron-left'
import HeartFilled from './heart-filled'
import HeartOutline from './heart-outline'
import HomeIcon from './home-icon'
import OndemandVideoIcon from './ondemand-video-icon'
import { Search } from './search'
import { Star } from './star'

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
}

export type IconType = keyof typeof Icons;
export default Icons
