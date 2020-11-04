import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Post from './Post';
import Searchbar from './SearchBar';

const ProfileScreen = () => {
  const author = useSelector((state: RootState) =>
    state.authors.find((author) => state.currentAuthor === author.id)
  );
  const [value, setValue] = useState('');
  const handleChange = (text: string) => {
    setValue(text);
  };
  const renderItem = ({ item }) => {
    return <Post post={item} />;
  };

  if (author) {
    return (
      <View style={styles.container}>
        <Searchbar value={value} handleChange={handleChange} />

        <FlatList
          data={author.posts.filter((post) => {
            return (
              post.body.toLowerCase().includes(value.toLowerCase()) ||
              post.title.toLowerCase().includes(value.toLowerCase())
            );
          })}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id.toString()}
        />
      </View>
    );
  } else {
    return (
      <View>
        <Text>Not found</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
});

export default ProfileScreen;
