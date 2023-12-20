import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useRef, useState } from "react"
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const categories = [
  {
    name: 'Home',
    icon: 'home-outline',
  },
  {
    name: 'Trending baby',
    icon: 'flame-outline',
  },
  {
    name: 'Saved baby',
    icon: 'bookmark-outline',
  },
  {
    name: 'Loved baby',
    icon: 'heart',
  },
  {
    name: 'Trash baby',
    icon: 'md-trash-outline',
  },
  {
    name: 'Settings',
    icon: 'settings-outline',
  },
]

interface Props {
  setCategory: React.Dispatch<React.SetStateAction<string>>
}
const { width } = Dimensions.get('window')

export default function ExploreHeader({ setCategory }: Props) {
  const scrollRef = useRef<ScrollView>(null)
  const itemsRef = useRef<Array<TouchableOpacity | null>>([])
  const [activeIndex, setActiveIndex] = useState(0)

  function selectCategory(index: number) {
    // const selected = itemsRef.current[index]
    setActiveIndex(index)

    // selected?.measure((x) => {
    //   scrollRef.current?.scrollTo({ x: x - 20, y: 0, animated: true })
    // })

    setCategory(categories[index].name)
  }

  return (
    <SafeAreaView style={{ flex: 1, zIndex: 10 }}>
      <View style={styles.searchRow}>
        <Link href={'/(modals)/search'} asChild>
          <TouchableOpacity style={styles.searchBtn}>
            <Ionicons name='search' size={24} color={'#fff'} />
            <Text style={styles.searcText}>Search</Text>
          </TouchableOpacity>
        </Link>
        <TouchableOpacity style={styles.filterBtn}>
          <Ionicons name='options-outline' size={24} color={'#fff'} />
        </TouchableOpacity>
      </View>

      <ScrollView 
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={{
          alignItems: 'center',
          gap: 32,
          // paddingVertical: 12,
          paddingHorizontal: 20,
          height: 80,
          backgroundColor: Colors.dark.background
      }}>
          {categories.map((item, index) => (
            <TouchableOpacity
              onPress={() => selectCategory(index)} 
              key={index} 
              style={activeIndex === index ? styles.categoryBtnActive : styles.categoryBtn} 
              ref={(el) => itemsRef.current[index] = el} 
            >
              <Ionicons 
                name={item.icon as any} 
                size={28} 
                color={Colors.dark.bodyText} 
                style={activeIndex === index ? {} : { opacity: 0.8 }}/>
              <Text style={activeIndex === index ? styles.categoryTextActive : styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  searchRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 16,
    // paddingVertical: 24,
    backgroundColor: Colors.dark.background,
    height: 80
  },
  searchBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: Colors.dark.background,
    borderColor: Colors.pink400,
    borderWidth: 1,
    padding: 12,
    borderRadius: 30,

    // elevation: 5,
    // shadowColor: '#fff',
    // shadowOpacity: 0.12,
    // shadowRadius: 8,
    // shadowOffset: {
    //   width: 5,
    //   height: 5,
    // }
  },
  searcText: {
    fontFamily: 'mon-sb',
    color: '#fff'
  },
  filterBtn: {
    width: 48,
    height: 48,
    padding: 10,
    borderWidth: 1,
    backgroundColor: Colors.dark.background,
    borderColor: Colors.pink400,
    borderRadius: 24
  },
  categoryBtn: {
    alignItems: 'center',
    paddingBottom: 8,
  },
  categoryBtnActive: {
    alignItems: 'center',
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: Colors.dark.bodyText,
  },
  categoryText: {
    fontSize: 12 ,
    color: Colors.dark.bodyText, 
    opacity: 0.6
  },
  categoryTextActive: {
    fontSize: 12 ,
    color: Colors.dark.bodyText, 
  },
})