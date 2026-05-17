import { View } from 'react-native'

import { useTranslation } from 'react-i18next'

import { Text } from '@shared/components/index'

import { styles } from './styles'
import type { Props } from './types'

const EmptyList = ({ title }: Props) => {
  const { t } = useTranslation()
  return (
    <View style={styles.container}>
      <Text text={t('app.library.nothingFoundAbout', { title })} type="boldHeading620" style={styles.text} />
    </View>
  )
}

export default EmptyList
