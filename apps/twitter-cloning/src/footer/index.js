import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './Login';
import Signup from './Signup';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Login />
      <Signup />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 70,
    borderTopWidth: 1,
    borderColor: 'rgb(230, 230, 230)',
  },
});

export default Footer;
