import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/styles";
import React from "react"
import { SafeAreaView, Text, View } from "react-native";

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
        Profile
      </Text>
    </SafeAreaView>
  )
}