import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Post from './Post';

const ProfileScreen = () => {
  const renderItem = ({ item }) => {
    return <Post post={item} />;
  };
  const author = useSelector((state: RootState) => {
    return state.authors.find((author) => state.currentAuthor === author.id);
  });
  if (author) {
    return (
      <>
        <FlatList
          data={author.posts}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id.toString()}
        />
      </>
    );
  } else {
    return (
      <View>
        <Text>Not found</Text>
      </View>
    );
  }
};

export default ProfileScreen;
