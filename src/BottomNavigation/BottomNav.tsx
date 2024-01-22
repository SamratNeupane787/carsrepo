import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../components/Home';
import Trending from '../components/Trending';
import Blog from '../components/Blog';
import About from '../components/About';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fire from 'react-native-vector-icons/Fontisto';
import Blogger from 'react-native-vector-icons/FontAwesome6';
import User from 'react-native-vector-icons/FontAwesome';
import ScanedInfo from '../components/ScanedInfo';
const Bottom = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <NavigationContainer>
      <Bottom.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#101A56',
            backfaceVisibility: 'hidden',
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            borderTopColor: '#EDF2EF',
          },
        }}>
        <Bottom.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <AntDesign name="home" size={24} color="#D9D9D9" />
            ),
          }}
        />
        <Bottom.Screen
          name="Inf"
          component={ScanedInfo}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <User name="user-circle-o" size={24} color="#D9D9D9" />
            ),
          }}
        />
        {/* --UNCOMMENT THIS AFTER SCANNEDINFO COMPLETED
         <Bottom.Screen
          name="Trending"
          component={Trending}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Fire name="fire" size={24} color="#D9D9D9" />
            ),
          }}
        /> */}

        <Bottom.Screen
          name="Scan"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <AntDesign name="qrcode" size={44} color="#D9D9D9" />
            ),
          }}
        />
        <Bottom.Screen
          name="Blog"
          component={Blog}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Blogger name="blog" size={24} color="#D9D9D9" />
            ),
          }}
        />
        <Bottom.Screen
          name="About"
          component={About}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <User name="user-circle-o" size={24} color="#D9D9D9" />
            ),
          }}
        />
      </Bottom.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
