import React, {useState} from 'react';
import { Image, TextInput, StyleSheet, View, Dimensions } from 'react-native';

import {PRIMARY} from '../../../styles/colors';

const WIDTH = Dimensions.get('window').width;

const SearchSection = () => {
    const [text, onChangeText] = useState('Dogecoin to the Moon...');

  return (
        <View style={styles.search}>
            <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            </View>
            
            <View style={styles.notificationIcon}>
            <Image
                source={require('../../../assets/svg/just-bell.svg')}
                style={{ width: 13, height: 16 }}
            />
            </View>
        </View>
    );
}

export default SearchSection

const styles = StyleSheet.create({
    search: {
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginHorizontal: 16,
    },
    inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 32,
      width: WIDTH - 79,
      borderWidth: 1,
      borderRadius: 16,
      borderColor: '#e0e0e1',
      marginRight: 8,
    },
    input: {
      // borderRadius: 16,
      // borderWidth: 1,
      // borderColor: "#e0e0e1", 
      // height: 32,
      // width: WIDTH - 79,
      // paddingHorizontal: 16,
      // paddingVertical: 8,
  
      // borderRadius: 16,
      // borderWidth: 1,
      // borderColor: '#e0e0e1',
      height: '100%',
      width: '100%',
      paddingHorizontal: 16,
      fontSize: 12,
      
    },
    notificationIcon: {
      height: 33, 
      width: 33, 
      borderRadius: 33, 
      backgroundColor: PRIMARY,
    }
});