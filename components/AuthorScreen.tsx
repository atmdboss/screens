import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthors } from '../redux/authors';
import { setAuthorId } from '../redux/currentAuthorSlice';
import { RootState } from '../redux/store';
import Author from './Author';
import { setup } from '../service/service';

const AuthorScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    // start func call
    setIsLoading(true);
    setup()
      .then((authors: Author[]) => {
        dispatch(setAuthors(authors));
        setIsLoading(false);
      })
      .catch((err) => setIsLoading(false));
  }, []);
  const authors = useSelector((state: RootState) => state.authors);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          dispatch(setAuthorId(item.id));
          navigation.navigate('Posts');
        }}
      >
        <Author author={item} />
      </TouchableOpacity>
    );
  };
  return isLoading ? (
    <View>
      <Text>Loading..</Text>
    </View>
  ) : (
    <>
      <FlatList
        data={authors}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id.toString()}
      />
    </>
  );
};

export default AuthorScreen;
