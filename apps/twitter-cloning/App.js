import React, { useState } from 'react';
import { StyleSheet, ScrollView, StatusBar, View } from 'react-native';
import Header from './src/header';
import Content from './src/content';
import Footer from './src/footer';

const App = () => {
  const [data, setData] = useState([]);

  return (
    <View style={styles.container}>
      <StatusBar />
      <Header setData={setData} />
      <Content data={data} />
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
