import { View, TouchableOpacity } from 'react-native'

import { Button, Icon } from '@shared/components'
import { AppColors } from '@shared/constants/app-colors'

import { styles } from './button-row.styles'
import type { IButtonRowProps } from './button-row.types'

const ButtonRow = ({
  movie,
  handleAddFavorites,
  handleAddWatchList,
  watchLaterButtonText,
  rightIconName,
}: IButtonRowProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.addWatchListButtonContainer}>
        <Button
          onPress={() => handleAddWatchList(movie?.id.toString())}
          text={watchLaterButtonText}
          leftIcon="AccessTimeIcon"
          style={styles.button}
        />
      </View>
      <TouchableOpacity style={styles.favoriteButton} onPress={() => handleAddFavorites(movie?.id.toString())}>
        <Icon name={rightIconName} color={AppColors.white} />
      </TouchableOpacity>
    </View>
  )
}

export default ButtonRow
