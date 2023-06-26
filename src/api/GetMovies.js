import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

const GetMovies = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  //Get Req
  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //use effect hook
  useEffect(() => {
    getMovies();
  }, []);

  // Render item func
  const renderItemFunc = ({item}) => {
    return (
      <Text>
        {item.title}, {item.releaseYear}
      </Text>
    );
  };

  const keyExtractor = ({id}) => id;

  return (
    <View style={styles.main}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={keyExtractor}
          renderItem={renderItemFunc}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 24,
  },
});

export default GetMovies;
