import { Pressable, StyleSheet, FlatList, Image as RNImage } from 'react-native';

import { Text, View } from '../../components/Themed';
import { Image } from 'expo-image';
import { useState } from 'react';
import { FlashList } from "@shopify/flash-list";

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function three() {

  const [seed, setSeed] = useState(696);

  return (
    <View style={styles.container}>
      <FlatList
        data={Array(100)}
        renderItem={({ index }) => (
          <RNImage
            style={styles.image}
            // source={`https://picsum.photos/seed/${index}/3000/2000`}
            source={{uri: `https://picsum.photos/seed/${index}/3000/2000`}}
            // placeholder={blurhash}
            // contentFit="cover"
            // transition={500}
            resizeMode='cover'
          />
        )}
        // estimatedItemSize={150}
        numColumns={3}
        contentContainerStyle={{ gap: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    flex: 1,
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#0553',
  },
});
