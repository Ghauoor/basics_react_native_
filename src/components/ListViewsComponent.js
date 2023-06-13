import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

const ListViewsComponent = () => {
  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <View style={styles.photoContainer}>
        <Image
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          style={styles.photo}
        />
      </View>
      <Text style={styles.itemText}>{item.key}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Flutter'},
          {key: 'React'},
          {key: 'React Native'},
          {key: 'Android Native'},
          {key: 'MERN'},
          {key: 'MEAN'},
          {key: 'MEVN'},
          {key: 'PERN'},
          {key: 'LAMP'},
        ]}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    paddingTop: 22,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#CBD5E0',
  },
  photoContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#d26060',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  itemText: {
    fontSize: 18,
    color: '#1F2937',
    fontFamily: 'Roboto',
  },
});

export default ListViewsComponent;
