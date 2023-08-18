import React from 'react';
import { View, Image } from 'react-native';

const BellIcon = () => {
  return (
    <View>
      <Image
        source={require('../svg/bell.svg')}
        style={{ width: 100, height: 100 }}
      />
    </View>
  )
}

export default BellIcon;
