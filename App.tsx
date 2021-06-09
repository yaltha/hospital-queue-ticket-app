import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Form, Started, Home, TicketSummary } from './screens'

import Navigator from './navigation/Navigator'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Navigator />
    </NavigationContainer>
  );
}