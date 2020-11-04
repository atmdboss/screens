import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { testAuths } from '../App';
import Author from './Author';

const AuthorScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Posts')}>
        <Author author={item} />
      </TouchableOpacity>
    );
  };
  return (
    <>
      <FlatList
        data={testAuths}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
      />
    </>
  );
};

export default AuthorScreen;
