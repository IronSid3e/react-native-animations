import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
      title= "Button Animations"
      onPress={()=> navigation.navigate("Button Animations")}
      />
    </View>
  )
}

const styles = StyleSheet.create({})