import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const Author: React.FC<{ author: Author }> = ({ author }) => {
  const name = author.name.split(' ');
  return (
    <View style={styles.container}>
      <View style={styles.initials}>
        <Text>{`${name[0][0]}${name[1][0]}`}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.name}>{author.name}</Text>
        <Text style={styles.email}>{author.email}</Text>
      </View>
      <View style={styles.postWrapper}>
        <Text style={styles.numPosts}>
          {author.posts.length ? author.posts.length : 0} posts
        </Text>
        <Icon name="chevron-right" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 72,
  },
  initials: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#6fcf97',
  },
  details: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  postWrapper: {
    flexDirection: 'row',
  },
  numPosts: {
    fontSize: 16,
  },
  name: {
    fontSize: 16,
    color: '#382A2C',
    fontFamily: 'sans-serif-medium',
  },
  email: {
    fontSize: 12,
    color: '#948c8d',
    fontFamily: 'sans-serif',
  },
});

export default Author;
