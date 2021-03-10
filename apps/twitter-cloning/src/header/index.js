import React from 'react';
import { StyleSheet, View } from 'react-native';
import Head from './Head';
import Nav from './Nav';

const Header = ({ setData }) => {
  return (
    <View style={styles.header}>
      <Head setData={setData} />
      <Nav />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 110,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(230, 230, 230)',
  },
});

export default Header;
