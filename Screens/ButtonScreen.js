import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { SimpleButton } from '../components/SimpleButton';

export default function ButtonScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Animated Buttons</Text>
      
      <SimpleButton 
        title="Simple Button"  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: '600',
  }
});