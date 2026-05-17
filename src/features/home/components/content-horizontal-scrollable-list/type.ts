import type { Popular } from '@shared/models/popular'

export type Props = {
  title: string
  contentList: Popular[]
  handleOnPressSeeAll: () => void
}
