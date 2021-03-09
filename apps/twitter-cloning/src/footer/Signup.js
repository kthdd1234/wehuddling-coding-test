import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

const Signup = () => {
  return (
    <View style={styles.signupWrap}>
      <Button
        title='가입하기'
        titleStyle={styles.signupText}
        buttonStyle={styles.signupBtn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signupBtn: {
    width: 190,
    height: 30,
    borderRadius: 30,
  },
  signupText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default Signup;
