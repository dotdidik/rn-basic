import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import AppParent from '../AppParent';
import Profile from './tabbar/Profile'
import List from './tabbar/List'
const TabNavigator = createBottomTabNavigator({
  Home: AppParent,
  Profile: Profile,
  List: List
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#f2f2f2',
    activeBackgroundColor: "#2EC4B6",
    inactiveTintColor: '#666',
    labelStyle: {
      fontSize: 18,
      padding: 12
    }
  }
});

export default createAppContainer(TabNavigator);