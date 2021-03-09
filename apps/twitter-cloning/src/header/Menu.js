import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import axios from 'axios';

const url = 'https://api.twitter.com/2/tweets/search/recent';

// const token = process.env.BearerToken;
const token = '';

const Menu = ({ setData }) => {
  const [text, onChangeText] = useState('#아침식사');
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const searchKeyword = async () => {
      try {
        const { data } = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            query: text,
          },
        });
        const twitts = data.data;
        setData(twitts);
      } catch (error) {
        console.log(error);
      }
    };
    searchKeyword();
  }, [searching]);

  return (
    <View style={styles.menuWrap}>
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
  menuWrap: {
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

export default Menu;
