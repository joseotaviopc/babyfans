import { BlurView } from "expo-blur";
import { Link, useNavigation, useRouter } from "expo-router";
import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {

  return (
    <BlurView intensity={70} style={styles.container} tint="light">
      <Text>SETTINGS</Text>
    </BlurView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  }
})