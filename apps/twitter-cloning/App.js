import React, { useState } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import Header from './src/header';
import Section from './src/section';
import Footer from './src/footer';

const App = () => {
  const [data, setData] = useState(['']);

  return (
    <View style={styles.container}>
      <StatusBar />
      <Header setData={setData} />
      <Section data={data} />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
