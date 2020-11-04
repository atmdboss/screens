import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Post: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginBottom: 15,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1,
    borderBottomWidth: 5,
    borderLeftWidth: 2,
    borderRightWidth: 2,
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    color: '#382A2C',
    textTransform: 'capitalize',
    fontFamily: 'sans-serif-medium',
  },
  body: {
    fontSize: 12,
    color: '#948c8d',
    fontFamily: 'sans-serif',
  },
});

export default Post;
