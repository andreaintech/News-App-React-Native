import React from 'react';
import {Dimensions, Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Home from '../containers/home';
import Search from '../containers/search';
import NewsDetail from '../containers/news-detail';
import Notification from '../containers/notification';

import { HOME, NEWS_DETAIL, NOTIFICATION, SEARCH } from './routes';
import { PRIMARY } from '../styles/colors';

const WIDTH = Dimensions.get('window').width;

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
            name={NOTIFICATION} 
            component={Notification} 
            options={({ navigation }) => ({
              title: 'Hot Updates',
              headerStyle: {
                backgroundColor: 'transparent',
                width: WIDTH,
                height: WIDTH - 287,
              },
              headerTintColor: PRIMARY,
              headerTitleStyle: {
                fontWeight: '600',
                fontSize: 17,
                lineHeight: 22,
                letterSpacing: -0.41,
                textAlign: 'center',
              },
              headerLeft: () => (
                <TouchableOpacity
                  style={{ marginLeft: 15 }}
                  onPress={() => navigation.goBack()}
                >
                  {/* <Image
                    source={require('./path.png')}
                    style={{ width: 24, height: 24 }}
                  /> */}
                  <Text>{'<'}</Text>
                </TouchableOpacity>
              ),
            })}
          />

        <Stack.Screen 
          name={HOME} 
          component={Home} 
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen 
          name={SEARCH} 
          component={Search} 
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen 
          name={NEWS_DETAIL} 
          component={NewsDetail}
          options={{
            headerShown: false,
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation;