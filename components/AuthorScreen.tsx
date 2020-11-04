import React, { useEffect, useState } from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthors } from '../redux/authors';
import { setAuthorId } from '../redux/currentAuthorSlice';
import { RootState } from '../redux/store';
import Author from './Author';
import { setup } from '../service/service';
import Searchbar from './SearchBar';

const AuthorScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState('');
  const handleChange = (text: string) => {
    setValue(text);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    setup()
      .then((authors: Author[]) => {
        dispatch(setAuthors(authors));
        setIsLoading(false);
      })
      .catch((err) => setIsLoading(false));
  }, []);
  const authors = useSelector((state: RootState) =>
    state.authors.filter((author) => {
      return (
        author.name.toLowerCase().includes(value.toLowerCase()) ||
        author.email.toLowerCase().includes(value.toLowerCase())
      );
    })
  );

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          dispatch(setAuthorId(item.id));
          navigation.navigate('Posts', { name: item.name });
        }}
      >
        <Author author={item} />
      </TouchableOpacity>
    );
  };
  return isLoading ? (
    <View style={styles.loadContainer}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  ) : (
    <View style={styles.container}>
      <Searchbar handleChange={handleChange} value={value} />

      <FlatList
        data={authors}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
  loadContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AuthorScreen;
