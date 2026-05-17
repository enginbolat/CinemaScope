import React from 'react'

import { View } from 'react-native'

import { Text } from '@shared/components/index'

import { styles } from '../../screens/style'

type Props = {
  overview: string;
};

const Overview = ({ overview }: Props) => (
  <View style={styles.phStatic}>
    <Text type="regularCaption14" text={overview} />
  </View>
)

export default Overview
