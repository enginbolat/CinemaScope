import React from 'react'

import { FlatList, View } from 'react-native'

import { Image } from 'expo-image'

import { Text } from '@shared/components/index'
import { BASE_W500_URL } from '@shared/constants/app-config'
import type { ProductionCompany } from '@shared/models/production-company'

import { styles } from '../../screens/style'

type Props = {
  companies: ProductionCompany[] | undefined;
};

const ProductionCompaniesList = ({ companies }: Props) => {
  const renderItemProducatioCompanies = ({ item }: { item: ProductionCompany }) => (
    <Image
      style={styles.smallImage}
      source={{ uri: BASE_W500_URL + item.logo_path }}
      contentFit="contain"
      priority="low"
      cachePolicy="memory-disk"
    />
  )

  return (
    <>
      <View style={styles.castListContainer}>
        <Text type="mediumCaption14" text="Production Companies" />
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        bounces={false}
        horizontal={true}
        data={companies}
        contentContainerStyle={styles.horizontalListContentContainer}
        renderItem={renderItemProducatioCompanies}
      />
    </>
  )
}

export default ProductionCompaniesList
