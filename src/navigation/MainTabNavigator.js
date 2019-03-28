import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import AboutScreen from '../screens/AboutScreen';
import AdviceScreen from '../screens/AdviceScreen';
import GeekJokesScreen from '../screens/GeekJokesScreen';
import DadJokesScreen from '../screens/DadJokesScreen';

const AdviceStack = createStackNavigator(
  { Advice: AdviceScreen }, {
    defaultNavigationOptions: {
      title: 'Advice',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Advice',
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
    },
  }
);


const DadJokeStack = createStackNavigator(
  { DadJokes: DadJokesScreen }, {
    defaultNavigationOptions: {
      title: 'Dad Jokes',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Dad Jokes',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === 'ios'
              ? `ios-man`
              : 'md-man'
          }
        />
      ),
    },
  }
);


const GeekJokeStack = createStackNavigator(
  { GeekJokes: GeekJokesScreen }, {
    defaultNavigationOptions: {
      title: 'Geek Jokes',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Geek Jokes',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === 'ios'
              ? `ios-glasses`
              : 'md-glasses'
          }
        />
      ),
    },
  }
);

const AboutStack = createStackNavigator(
  { About: AboutScreen }, {
    defaultNavigationOptions: {
      title: 'About',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
    },
    navigationOptions: {
      tabBarLabel: 'About',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === 'ios'
              ? `ios-information-circle`
              : 'md-information'
          }
        />
      ),
    },
  }
);

export default createBottomTabNavigator({
  AdviceStack,
  DadJokeStack,
  GeekJokeStack,
  AboutStack
});
