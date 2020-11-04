import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

const Container: React.FC = ({ children }) => {
  return (
    <>
      <StatusBar />
      {/* <View style={styles.top}></View> */}
      <View style={styles.view}>{children}</View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 'auto',
  },
  top: {
    backgroundColor: 'grey',
    height: 35,
  },
  view: {
    // paddingTop: 25,
    paddingHorizontal: 10,
    // paddingBottom: 10,
    // backgroundColor: 'teal',
    height: '100%',
  },
});

export default Container;
