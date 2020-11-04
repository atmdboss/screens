import React from 'react';
import { FlatList } from 'react-native';
import { testPosts } from '../App';
import Post from './Post';

const ProfileScreen = () => {
  const renderItem = ({ item }) => {
    return <Post post={item} />;
  };
  return (
    <>
      <FlatList
        data={testPosts}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
      />
    </>
  );
};

export default ProfileScreen;
