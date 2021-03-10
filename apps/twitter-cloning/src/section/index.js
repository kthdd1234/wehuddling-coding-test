import React from 'react';
import { StyleSheet, ScrollView, View, Alert } from 'react-native';
import Content from './Content';

const Section = ({ data }) => {
  return (
    <ScrollView>
      {data.length === 0
        ? Alert.alert(null, '검색된 결과가 없습니다.') // 예외처리: data 가 빈 배열일 경우 경고창 알림
        : data.map((tweet, i) => (
            <View key={i}>
              <Content text={tweet.text} />
            </View>
          ))}
    </ScrollView>
  );
};

// const styles = StyleSheet.create({});

export default Section;
