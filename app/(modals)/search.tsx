import React from "react"
import { StyleSheet, Text, View } from "react-native";
import { BlurView } from 'expo-blur';

export default function Page() {
  return (
    <View style={styles.container}>
      <Text>Back</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  }
})