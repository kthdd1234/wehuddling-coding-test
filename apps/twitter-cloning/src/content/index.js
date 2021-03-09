import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

const Content = ({ data }) => {
  return (
    <ScrollView>
      {data.map((twitterData, i) => (
        <View key={i} style={styles.content}>
          <Text>{twitterData.text}</Text>
        </View>
      ))}
    </ScrollView>
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
