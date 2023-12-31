import Colors from "@/constants/Colors"
import { ActivityIndicator, FlatList, Image, ListRenderItem, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { categories } from "./ExploreHeader"
import { defaultStyles } from "@/constants/styles"
import { useEffect, useRef, useState } from "react"
import { Link } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import Animated, { FadeInRight, FadeOutLeft } from "react-native-reanimated"
import { BottomSheetFlatList, BottomSheetFlatListMethods } from "@gorhom/bottom-sheet"

interface Props {
  category: string
}

export const items = [
  {
    image: require('../assets/images/album01.jpeg'),
    name: 'Image1'
  },
  {
    image: require('../assets/images/album01.jpeg'),
    name: 'Image2'
  },
  {
    image: require('../assets/images/album01.jpeg'),
    name: 'Image3'
  },
  {
    image: require('../assets/images/album01.jpeg'),
    name: 'Image4'
  },
]

export default function Listing({ category }: Props) {
  const [loading, setLoading] = useState(false)
  const listRef = useRef<BottomSheetFlatListMethods>(null)

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 600)
  }, [category])

  if (loading) return (
    <View style={[defaultStyles.container, defaultStyles.center]}>
      <ActivityIndicator size={"large"} color={Colors.pink400} />
    </View>
  )

  interface renderItemProps { 
    id: string
    image: string
    name: string
  }
  
  const renderRow: ListRenderItem<any> = ({ item, index }) => {
    return(
      <Link href={`/listing/${index}`} asChild >
        <TouchableOpacity>
          <Animated.View style={[styles.itemLink, index === items.length - 1 ? {marginBottom: 48} : {}]} entering={FadeInRight} exiting={FadeOutLeft}>
            <Image source={item.image} style={styles.image}/>
            <TouchableOpacity style={styles.heart}>
              <Ionicons name="heart-outline" size={24} color={Colors.dark.bodyText} />
            </TouchableOpacity>
            <Text style={styles.itemText}>
              Category: {category} - {item.name}
            </Text>
          </Animated.View>
        </TouchableOpacity>
      </Link>
    )
  }

  return(
    <View style={defaultStyles.container}>
      <BottomSheetFlatList
        ref={listRef}
        style={{
          // borderColor: Colors.pink500, 
          // borderTopWidth: 2, 
          // marginTop: 180,
          padding: 20,
        }}
        showsVerticalScrollIndicator={false}
        data={items}
        key={Math.random().toString(36).slice(2)}
        renderItem={renderRow}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  itemLink: { 
    // flex: 1, 
    gap: 16,
    marginBottom: 32
  },
  image: { 
    width: '100%', 
    height: 400, 
    borderRadius: 16
  },
  itemText: {
    fontSize: 24,
    fontFamily: 'mon-sb',
    color: Colors.dark.bodyText
  },
  heart: {
    position: "absolute",
    top: 20,
    right: 20
  }
})
