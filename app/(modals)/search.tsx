import { Link, useRouter } from "expo-router";
import React from "react"
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  const router = useRouter()
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => router.back()}>
      <Text>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}