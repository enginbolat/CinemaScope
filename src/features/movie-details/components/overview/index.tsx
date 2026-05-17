import React from 'react'

import { View } from 'react-native'

import { useTranslation } from 'react-i18next'

import { Text } from '@shared/components/index'
import { AppColors } from '@shared/constants/app-colors'

import { styles } from './overview.styles'

type Props = {
  overview: string
}

const Overview = ({ overview }: Props) => {
  const { t } = useTranslation()
  return (
    <View style={styles.phStatic}>
      <Text text={t('app.details.storyline')} type="headlineLgMobile" />
      <Text type="bodySm" text={overview} color={AppColors.onSurfaceVariant} />
    </View>
  )
}

export default Overview
