import React from 'react';
import { Text, FlatList, StyleSheet, View, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const WIDTH = Dimensions.get('window').width;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    author: 'by Ryan Browne',
    title: 'Crypto investors should be prepared to lose all their money, BOE governor says',
    description: '“Im going to say this very bluntly again,” he added. “Buy them only if you’re prepared to lose all your money.”'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    author: 'by Andrea Da Silva',
    title: 'Crypto investors should be prepared to lose all their money, BOE governor says',
    description: '“Im going to say this very bluntly again,” he added. “Buy them only if you’re prepared to lose all your money.”'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    author: 'by Steve Jobs',
    title: 'Crypto investors should be prepared to lose all their money, BOE governor says',
    description: '“Im going to say this very bluntly again,” he added. “Buy them only if you’re prepared to lose all your money.”'
  },
];

type ItemProps = {author: string, title: string, description: string, index: number};

const firstItemHeight = WIDTH - 135;
const defaultItemHeight = WIDTH - 151;

const Item = ({author, title, description, index}: ItemProps) => {
  const itemHeightStyle = index === 0 ? {height: firstItemHeight} : {height: defaultItemHeight, marginTop: 8,};

  return (
    <TouchableOpacity style={[styles.itemContainer, itemHeightStyle]}>
      <View style={styles.item}>
        <>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.title}>{title}</Text>
        </>
        
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const LatestNewsListSection = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={DATA}
        horizontal
        renderItem={({item, index}) => 
          <Item 
            index={index} 
            author={item.author} 
            title={item.title} 
            description={item.description} 
          />
        }
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default LatestNewsListSection

const styles = StyleSheet.create({
  container: {
    height: WIDTH - 135,
    marginLeft: 15,
  },
  itemContainer: {
    width: WIDTH - 54,
    marginRight: 8,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  item: {
    marginTop: 80, 
    marginHorizontal: 8,
    marginBottom: 8,
  },
  author: {
    fontSize: 10,
    fontWeight: '800',
    lineHeight: 13.64,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20.8,
  },
  description: {
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 13.64,
  },
})