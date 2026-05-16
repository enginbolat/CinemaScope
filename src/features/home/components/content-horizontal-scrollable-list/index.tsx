import { FlatList, View } from 'react-native';

import { Popular } from '@shared/models/popular';
import { MovieCard, Text } from '@shared/components/index';
import { styles } from '@features/home/screens/style';

import { Props } from './type';

const ContentHorizontalScrollableList = ({ title, contentList, onPressItem }: Props) => {
  const renderItem = ({ item }: { item: Popular }) => <MovieCard item={item} onPress={onPressItem} />;

  return (
    <>
      <View style={styles.contentTitle}>
        <Text type="mediumHeading620" text={title} />
      </View>
      <FlatList
        data={contentList}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentListContainerStyle}
      />
    </>
  );
};

export default ContentHorizontalScrollableList;
