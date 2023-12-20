import ExploreHeader from "@/components/ExploreHeader";
import Listing, { items } from "@/components/Listing";
import ListingBottomSheet from "@/components/ListingBottomSheet";
import ListingGray from "@/components/ListingGray";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/styles";
import { Link, Stack, useNavigation, useRouter } from "expo-router";
import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  const router = useRouter()
  const navigation = useNavigation()

  const [category, setCategory] = useState('Home')

  return (
    <View style={[
      defaultStyles.container,
      {backgroundColor: Colors.dark.background }
    ]}>
      <Stack.Screen options={{
        header: () => <ExploreHeader setCategory={setCategory} />
      }}
      />
      <ListingGray category={'Home'}/>
      <ListingBottomSheet category={category} listings={items} />
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