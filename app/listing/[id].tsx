import { useLocalSearchParams } from "expo-router";
import React from "react"
import { Text, View } from "react-native";

export default function Page() {
  const { id } = useLocalSearchParams()
  return (
    <View>
      <Text>Listing detail {id}</Text>
    </View>
  )
}