import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, FlatList, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SECONDARY } from '../../styles/colors';

const WIDTH = Dimensions.get('window').width;

const DATA = [
  {
    id: '1',
    date: 'Monday, 10 May 2021',
    title: 'WHO classifies triple-mutant Covid variant from India as global health risk',
    newsContent: 'A World Health Organization official said Monday it is reclassifying the highly contagious triple-mutant Covid variant spreading in India as a “variant of concern,” indicating that it’s become a',
    author: 'Matt Villano',
    image: 'https://reactjs.org/logo-og.png',
  },
  {
    id: '2',
    date: 'Sunday, 9 May 2021',
    title: 'What to do if youre planning or attending a wedding during the pandemic',
    newsContent: 'They had the artsy, rustic venue, the tailored dress and a guest list including about 150 of their closest friends and family. But the pandemic had other plans, forcing Carly Chalmers and Mitchell Gauvin to make a difficult decision about their wedding',
    author: 'Zain Korsgaard',
    image: 'https://reactjs.org/logo-og.png',
  },
];

type ItemProps = {date: string, title: string, newsContent: string, author: string, image: string};

const Item = ({date, title, newsContent, author, image}: ItemProps) => {  
  return (
    <TouchableOpacity style={styles.item}>
      <Image 
        style={styles.image}
        source={{uri: image}}
      />
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.newsContent}>{newsContent}...<Text style={[styles.readMore, styles.newsContent]}>Read More</Text></Text>
      <Text style={styles.author}>{author}</Text>
    </TouchableOpacity>
  );
};

const Notification = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      contentContainerStyle={styles.listContainer}
        data={DATA}
        renderItem={({item, index}) => 
          <Item 
            date={item.date}
            title={item.title} 
            newsContent={item.newsContent}
            author={item.author} 
            image={item.image} 
          />
        }
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default Notification

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  item: {
    marginBottom: 24,
  },
  image: {
    width: WIDTH - 30, 
    height: WIDTH - 247,
    borderRadius: 8,
  },
  date: {
    marginTop: 16,
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 20.8
  },
  title: {
    marginTop: 4,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20.8,
  },
  newsContent: {
    marginTop: 8,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
  },
  author: {
    marginTop: 8,
  },
  readMore: {
    color: SECONDARY
  }
})