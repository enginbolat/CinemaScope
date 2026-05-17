import React from 'react'

import { View } from 'react-native'

import { Text } from '@shared/components/index'
import { AppColors } from '@shared/constants/app-colors'

import { styles } from './overview.styles'

type Props = {
  overview: string
}

const Overview = ({ overview }: Props) => (
  <View style={styles.phStatic}>
    <Text text="Storyline" type="headlineLgMobile" />
    <Text type="bodySm" text={overview} color={AppColors.onSurfaceVariant} />
  </View>
)

export default Overview
