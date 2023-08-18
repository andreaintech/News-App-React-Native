import React from 'react';
import { FlatList, StyleSheet, Dimensions, View, Text } from 'react-native';

import { PRIMARY } from '../../../styles/colors';
const WIDTH = Dimensions.get('window').width;

const DATA = [
    {
      id: '1',
      title: 'Healthy',
    },
    {
      id: '2',
      title: 'Technology',
    },
    {
      id: '3',
      title: 'Finance',
    },
    {
        id: '4',
        title: 'Arts',
    },
    {
        id: '5',
        title: 'Sports',
    },
];

type ItemProps = {title: string, index: number};


const Item = ({title}: ItemProps) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
};

const CategoriesSection = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={DATA}
        horizontal
        renderItem={({item, index}) => 
          <Item 
            index={index} 
            title={item.title} 
          />
        }
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default CategoriesSection

const styles = StyleSheet.create({
    container: {
        height: 32,
        marginLeft: 15,
        marginTop: 24,
    },
    item: {
        height: WIDTH - 343,
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: PRIMARY,
        borderRadius: 16,
        marginRight: 8,
    },
    title: {
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 16.37,
        color: "#FFF",
        textAlign: 'center'
    }
});