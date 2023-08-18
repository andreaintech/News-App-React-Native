import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;

const LatestNewsSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Latest News</Text>
      <Text>See all</Text>      
    </View>
  )
}

export default LatestNewsSection

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 16,
    width: WIDTH - 30,
    height: 32,
    marginTop: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 20.8,
  }
})