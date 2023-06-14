import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const NetflixCard = ({title, description}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.cardContainer}>
      <View style={styles.thumbnail} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const EmptyScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to My Netflix</Text>
      <ScrollView contentContainerStyle={styles.cardList}>
        <NetflixCard
          title="Arcane"
          description="Arcane is an animated series set in the League of Legends universe."
        />
        <NetflixCard
          title="Stranger Things"
          description="A group of young friends in a small town uncover supernatural mysteries."
        />
        {/* Add more NetflixCard components here */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  cardList: {
    paddingBottom: 20,
  },
  cardContainer: {
    backgroundColor: '#1f1f1f',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 5,
    marginBottom: 10,
  },
  thumbnail: {
    width: '100%',
    height: 200,
    backgroundColor: '#444',
  },
  contentContainer: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8,
  },
});

export default EmptyScreen;
