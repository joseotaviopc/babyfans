import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/styles";
import React from "react"
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  return (
    <SafeAreaView style={[defaultStyles.container, defaultStyles.center ,{backgroundColor: Colors.
      dark.background }]}>
      <Text 
        style={{ 
          fontSize: 24,
          fontFamily: 'mon-sb',
          color: Colors.pink400
        }}
       >
        Create
      </Text>
    </SafeAreaView>
  )
}