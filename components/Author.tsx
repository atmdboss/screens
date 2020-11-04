import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

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
      <View>
        <Text style={styles.numPosts}>
          {author.posts.length ? author.posts.length : 0} posts
        </Text>
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
    backgroundColor: 'teal',
  },
  details: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  numPosts: {
    fontSize: 16,
  },
  name: {
    fontSize: 16,
  },
  email: {
    fontSize: 12,
  },
});

export default Author;
