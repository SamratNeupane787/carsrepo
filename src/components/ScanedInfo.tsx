import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaView>
      <View style={styles.headerback}>
        <Text>dfasgdf</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerback: {
    backgroundColor: '#00000',
    color: 'red',
  },
});
