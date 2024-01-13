import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomNav from './BottomNavigation/BottomNav';
export default function App() {
  return (
    <SafeAreaView style={styles.background}>
      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
  },
});
