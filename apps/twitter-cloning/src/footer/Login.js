import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

const Login = () => {
  return (
    <View style={styles.loginWrap}>
      <Button
        title='로그인'
        type='outline'
        titleStyle={styles.loginText}
        buttonStyle={styles.loginBtn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginBtn: {
    width: 190,
    height: 30,
    borderRadius: 30,
  },
  loginText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default Login;
