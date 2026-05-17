import type { IconType } from '@shared/assets/icons'
import type { MovieDetails } from '@shared/models'

export type IButtonRowProps = {
  movie?: MovieDetails
  handleAddFavorites: (id?: string) => void
  handleAddWatchList: (id?: string) => void
  watchLaterButtonText: string
  rightIconName: IconType
}
