import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../components/Home';
import Trending from '../components/Trending';
import Blog from '../components/Blog';
import About from '../components/About';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: {
            backfaceVisibility: 'hidden',
            backgroundColor: '#101A56',
          },
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Trending" component={Trending} />
        <Tab.Screen name="Blog" component={Blog} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
