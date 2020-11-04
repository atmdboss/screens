import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Author: React.FC<{ author: Author }> = ({ author }) => {
  return (
    <View style={styles.container}>
      <View style={styles.initials}>
        <Text>JS</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.name}>{author.name}</Text>
        <Text style={styles.email}>{author.email}</Text>
      </View>
      <View>
        <Text style={styles.numPosts}>5 Posts ?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'brown',
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
    // backgroundColor: 'yellow',
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
