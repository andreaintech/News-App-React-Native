import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { PRIMARY } from '../../styles/colors';

const WIDTH = Dimensions.get('window').width;

const TEXT = `
LONDON — Cryptocurrencies “have no intrinsic value” and people who invest in them should be prepared to lose all their money, Bank of England Governor Andrew Bailey said.

Digital currencies like bitcoin, ether and even dogecoin have been on a tear this year, reminding some investors of the 2017 crypto bubble in which bitcoin blasted toward $20,000, only to sink as low as $3,122 a year later.

Asked at a press conference Thursday about the rising value of cryptocurrencies, Bailey said: “They have no intrinsic value. That doesn’t mean to say people don’t put value on them, because they can have extrinsic value. But they have no intrinsic value.”

“I’m going to say this very bluntly again,” he added. “Buy them only if you’re prepared to lose all your money.”

Bailey’s comments echoed a similar warning from the U.K.’s Financial Conduct Authority.

“Investing in cryptoassets, or investments and lending linked to them, generally involves taking very high risks with investors’ money,” the financial services watchdog said in January.

“If consumers invest in these types of product, they should be prepared to lose all their money.”

Bailey, who was formerly the chief executive of the FCA, has long been a skeptic of crypto. In 2017, he warned: “If you want to invest in bitcoin, be prepared to lose all your money.”`

const DATA = {
  date: 'Sunday, 9 May 2021',
  title: 'Crypto investors should be prepared to lose all their money, BOE governor says',
  author: 'Published by Ryan Browne',
}

const NewsDetail = () => {
  return (
    <>
      <Image
        style={styles.image}
        source={{uri: 'https://reactjs.org/logo-og.png'}}
      />
      <TouchableOpacity style={styles.goBackButton}></TouchableOpacity>

      <View style={styles.newsContainer}>
        <View style={styles.topNews}>
          <Text style={styles.dateText}>{DATA.date}</Text>
          <Text style={styles.titleText}>{DATA.title}</Text>
          <Text>{DATA.author}</Text>
        </View>
        
        <ScrollView style={styles.textContainer}>
          <Text style={styles.text}>{TEXT}</Text>
        </ScrollView>
      </View>

      <TouchableOpacity style={styles.likeButon}></TouchableOpacity>
      
    </>
  )
}

export default NewsDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 38,
  },
  image: {
    width: 400, 
    height: WIDTH + 25,
  },
  newsContainer: {
    borderTopLeftRadius: 24, 
    borderTopRightRadius: 24,
    width: WIDTH,
    height: WIDTH + 63,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFF'
  },
  topNews: {
    flex: 1,
    width: WIDTH - 64,
    height: WIDTH - 234,
    position: 'absolute',
    top: '-15%',
    alignSelf: 'center',
    borderRadius: 16,
    backgroundColor: 'rgba(220, 220, 220, 0.8)',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  textContainer: {
    marginTop: WIDTH - 287,
    paddingHorizontal: 15,
  },
  text: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'justify',
  },
  dateText: {
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 20.8,
  },
  titleText: {
    marginTop: 8,
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 19.2,
  },
  authorText: {
    marginTop: 8,
    fontWeight: '800',
    fontSize: 10,
    lineHeight: 13.64,
  },
  likeButon: {
    backgroundColor: PRIMARY,
    width: 56,
    height: 56,
    borderRadius: 32,
    bottom: '3%',
    position: 'absolute',
    right: '5%',
  },
  goBackButton: {
    backgroundColor: "rgba(245, 245, 245, 0.5)",
    width: 32,
    height: 32,
    borderRadius: 10,
    top: '5%',
    position: 'absolute',
    left: '4%',
  }
});