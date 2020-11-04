import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';

const Searchbar: React.FC<{
  handleChange: (text: string) => void;
  value: string;
}> = ({ value, handleChange }) => {
  return (
    <View style={styles.container}>
      <Icon name="search" style={{ marginLeft: 10 }} size={26} />
      <TextInput
        value={value}
        onChangeText={handleChange}
        placeholder="Search"
        style={styles.search}
      />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efeeee',
    borderRadius: 10,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  search: {
    fontSize: 18,
    marginLeft: 10,
    flexGrow: 1,
    alignSelf: 'stretch',
  },
});
