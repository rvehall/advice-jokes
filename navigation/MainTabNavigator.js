import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-heart`
          : 'md-heart'
      }
    />
  ),
};

const JokeStack = createStackNavigator({
  Home: HomeScreen,
});

JokeStack.navigationOptions = {
  tabBarLabel: 'Jokes',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-happy`
          : 'md-happy'
      }
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  JokeStack,
});
