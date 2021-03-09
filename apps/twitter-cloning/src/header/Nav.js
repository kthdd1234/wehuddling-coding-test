import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Nav = () => {
  const [eventTarget, setEventTarget] = useState('인기');
  const navItems = ['인기', '최신', '사용자', '사진', '동영상'];

  return (
    <View style={styles.navWrap}>
      <View style={styles.navBar}>
        {navItems.map((item, i) => (
          <TouchableOpacity
            key={i}
            style={
              item === eventTarget
                ? [styles.navItem, styles.highlightBottom]
                : styles.navItem
            }
            onPress={() => setEventTarget(item)}
          >
            <Text
              style={
                item === eventTarget
                  ? [styles.itemText, styles.highlightColor]
                  : styles.itemText
              }
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navWrap: {
    height: '50%',
  },
  navBar: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
  },
  navItem: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontWeight: 'bold',
    color: 'rgb(80, 104, 125)',
  },
  highlightColor: {
    color: '#60a9ed',
  },
  highlightBottom: {
    borderBottomColor: '#60a9ed',
    borderBottomWidth: 2,
  },
});

export default Nav;
