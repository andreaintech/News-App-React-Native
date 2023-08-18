import React from 'react';
import {StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../containers/home';
import Search from '../containers/search';
import NewsDetail from '../containers/news-detail';
import Notification from '../containers/notification';

import { HOME, NEWS_DETAIL, NOTIFICATION, SEARCH } from './routes';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name={HOME} component={Home} />
            <Stack.Screen name={SEARCH} component={Search} />
            <Stack.Screen name={NEWS_DETAIL} component={NewsDetail} />
            <Stack.Screen name={NOTIFICATION} component={Notification} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation;