import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Started from './screens/Started'
import Home from './screens/Home'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Started /> */}
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
