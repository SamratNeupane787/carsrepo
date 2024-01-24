import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {} from 'react-native-safe-area-context';

export default function About() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.colorback}>About</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  colorback: {
    color: 'red',
  },
});
