import type { Popular } from '@shared/models'

export type Props = {
  movie?: Popular
  onPressItem: (item: Popular) => void
}
