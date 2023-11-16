import ExploreHeader from "@/components/ExploreHeader";
import Listing from "@/components/Listing";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/styles";
import { Link, Stack } from "expo-router";
import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  const [category, setCategory] = useState(0)

  return (
    <View style={[defaultStyles.container ,{backgroundColor: Colors.
    dark.background }]}>
      <Stack.Screen options={{
        header: () => <ExploreHeader setCategory={setCategory} />
      }}
      />
      <Listing category={category}/>
    </View>
  )
}

const styles = StyleSheet.create({
  mainText: {
    fontSize: 24,
    fontFamily: 'mon-sb',
    color: Colors.pink400,
  }
})