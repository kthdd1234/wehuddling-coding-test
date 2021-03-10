import React, { useState } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import Header from './src/header';
import Section from './src/section';
import Footer from './src/footer';

/* 화면 UI 요소별로 컴포넌트화 하여 앱을 구성 */
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
