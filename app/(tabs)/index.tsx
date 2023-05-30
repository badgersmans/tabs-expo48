import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
        data={Array(12)}
        renderItem={() => <View style={styles.box}/>}
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
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // gap: 20,
    // rowGap: 30,
    // columnGap: 30
    
  },
  box: {
    width: 150,
    height: 150,
    flex: 1,
    aspectRatio: 1,

    backgroundColor: 'lightgreen',
    borderColor: 'red',
    borderWidth: 5,
   
  },
});
