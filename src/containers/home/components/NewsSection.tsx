import React from 'react';
import { Text, Dimensions, StyleSheet, FlatList, View } from 'react-native';

const WIDTH = Dimensions.get('window').width;

const DATA = [
    {
      id: '1',
      title: '5 things to know about the conundrum of lupus',
      author: 'Matt Villano',
      date: 'Sunday, 9 May 2021',
    },
    {
        id: '2',
        title: '4 ways families can ease anxiety together',
        author: 'Zain Korsgaard',
        date: 'Sunday, 9 May 2021',
    },
    {
        id: '3',
        title: 'What to do if youre planning or attending a wedding during the pandemic',
        author: 'Kristen Rogers',
        date: 'Sunday, 9 May 2021',
    },
    {
        id: '4',
        title: 'Doctors on digital front lines help flight Indias COVID surge',
        author: 'Kristen Rogers',
        date: 'Sunday, 9 May 2021',
    },
];

type ItemProps = {author: string, title: string, date: string};

const Item = ({title, author, date}: ItemProps) => {  
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        
        <View style={styles.bottom}>
            <Text style={styles.bottomText}>{author}</Text>
            <Text style={styles.bottomText}>{date}</Text>
        </View>
      </View>
    );
  };

const NewsSection = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item, index}) => 
          <Item 
            title={item.title} 
            author={item.author} 
            date={item.date} 
          />
        }
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default NewsSection

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    item: {
        borderWidth: 1,   
        width: WIDTH - 35,
        height: WIDTH - 247,
        marginBottom: 8,
        borderRadius: 8,
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
    title: {
        marginHorizontal: 8,
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 20.8,
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 8,
    },
    bottomText: {
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 20.8,
    }
})