import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/styles";
import BottomSheet from "@gorhom/bottom-sheet";
import React, { useMemo, useRef } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Listing from "./Listing";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  category: string
  listings: any
}

export default function ListingBottomSheet({ category,listings }: Props) {
  const bottomSheetRef = useRef<BottomSheet>(null)
  const snapPoints = useMemo(() => ['10%', '100%'], [])

  function hideBottomSheet() {
    bottomSheetRef.current?.collapse()
  }

  return (
    <BottomSheet 
      ref={bottomSheetRef} 
      snapPoints={snapPoints} 
      enablePanDownToClose={false} 
      index={0}
      handleIndicatorStyle={{ backgroundColor: Colors.pink500 }}
      containerStyle={{ marginTop: 200 }}
      handleStyle={{ backgroundColor: Colors.dark.background }}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.dark.background }}>
        <Listing category={category} />
        <View style={styles.absoluteBtn}>
          <TouchableOpacity 
            onPress={hideBottomSheet}
            style={[defaultStyles.btn, { flexDirection: 'row', gap: 8, padding: 8 }]}
          >
            <Text style={styles.btnText}>Hide</Text>
            <Ionicons name="chevron-down" size={22} color={Colors.dark.titleText}/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </BottomSheet>
  )
}

const styles = StyleSheet.create({
  absoluteBtn: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignItems: 'center',
    padding: 16
  },
  btnText: {
    fontSize: 16,
    fontFamily: 'mon-sb'
  }
})