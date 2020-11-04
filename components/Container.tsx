import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

const Container: React.FC = ({ children }) => {
  return (
    <>
      <StatusBar backgroundColor="#efeeee" barStyle="dark-content" />
      <View style={styles.view}>{children}</View>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 15,
    height: '100%',
  },
});

export default Container;
