import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Content = ({ text }) => {
  return (
    <View style={styles.content}>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgb(230, 230, 230)',
    padding: 20,
  },
});

export default Content;
