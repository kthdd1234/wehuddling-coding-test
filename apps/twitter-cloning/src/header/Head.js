import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Text, Alert } from 'react-native';
import axios from 'axios';
import { TOKEN } from '@env';

const url = 'https://api.twitter.com/2/tweets/search/recent';

const Head = ({ setData }) => {
  const [text, onChangeText] = useState('#아침식사');
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const searchKeyword = async () => {
      if (text === '') {
        Alert.alert(null, '검색어를 입력해주세요.'); // 예외처리: 검색어를 입력 하지 않을 경우 경고창 알림
      } else {
        try {
          const { data } = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
            params: {
              query: text,
            },
          });
          const twitterData = data.data === undefined ? [] : data.data; // 예외처리: 검색된 결과가 undefined 일 경우 빈 배열 할당
          setData(twitterData);
        } catch (error) {
          console.log(error);
        }
      }
    };
    searchKeyword();
  }, [searching]);

  return (
    <View style={styles.headWrap}>
      <Text style={styles.backBtn}>←</Text>
      <TextInput
        style={styles.TextInput}
        value={text}
        onChangeText={(text) => onChangeText(text)}
        onSubmitEditing={() => setSearching(!searching)}
      />
      <Text style={styles.setting}>∙∙∙</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headWrap: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '50%',
  },
  backBtn: {
    fontSize: 23,
    color: '#60a9ed',
  },
  TextInput: {
    backgroundColor: 'rgb(237, 237, 237)',
    width: 270,
    height: 30,
    paddingLeft: 10,
    borderRadius: 30,
  },
  setting: {
    fontSize: 23,
    color: '#60a9ed',
  },
});

export default Head;
