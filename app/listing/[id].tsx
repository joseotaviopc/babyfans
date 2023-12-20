import { items } from "@/components/Listing";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react"
import { Dimensions, Share, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { SlideInDown, interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from "react-native-reanimated";

const { width } = Dimensions.get('window')
const IMG_HEIGHT = 300

export const ListingHeaderRight = () => (
  <View style={styles.bar}>
    <TouchableOpacity style={styles.roundButton}>
      <Ionicons name="share-outline" size={22} color={Colors.pink500} />
    </TouchableOpacity>
  </View>
)

export default function Page() {
  const { id } = useLocalSearchParams()
  const listingItem = items.find((item, index) => index === Number(id))
  const scrollRef = useAnimatedRef<Animated.ScrollView>()
  const navigation = useNavigation()
  
  const scrollOffset = useScrollViewOffset(scrollRef)

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
          ),
        }
      ]
    }
  })

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollOffset.value,
        [0, IMG_HEIGHT / 1.5],
        [0, 1]
      )
    }
  })

  async function shareListing() {
    try {
      await Share.share({
        title: listingItem?.name,
        url: listingItem?.name || ''
      })
    } catch (error) {
      console.log(error)
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackground: () => (
        <Animated.View style={[styles.header, headerAnimatedStyle]}>
        </Animated.View>
      ),
      headerRight: () => {
        return (
          <View style={styles.bar}>
            <TouchableOpacity style={styles.roundButton} onPress={shareListing}>
              <Ionicons name="share-outline" size={22} color={Colors.pink500} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundButton}>
              <Ionicons name="heart-outline" size={22} color={Colors.pink500} />
            </TouchableOpacity>
          </View>
        )
      },
      headerLeft: () => (
        <TouchableOpacity style={styles.roundButton} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={22} color={Colors.pink500} />
        </TouchableOpacity>
      )
    })
  }, [])

  return (
    <View style={styles.container}>
      <Animated.ScrollView 
        ref={scrollRef} 
        contentContainerStyle={{ paddingBottom: 120 }}
        scrollEventThrottle={16}
      >
        <Animated.Image source={listingItem?.image} style={[styles.image, imageAnimatedStyle]} />

        <View style={styles.infoContainer}>
          <Text style={styles.text}>Listing detail {id}</Text>
          <View style={styles.divider} />
          <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos non quos sunt, molestiae atque harum dicta nulla accusantium, et id sed a ad nihil libero laudantium sint quibusdam recusandae praesentium. Listing detail {id}</Text>
          <View style={styles.divider} />
          <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos non quos sunt, molestiae atque harum dicta nulla accusantium, et id sed a ad nihil libero laudantium sint quibusdam recusandae praesentium. Listing detail {id}</Text>
          <View style={styles.divider} />
          <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos non quos sunt, molestiae atque harum dicta nulla accusantium, et id sed a ad nihil libero laudantium sint quibusdam recusandae praesentium. Listing detail {id}</Text>
          <View style={styles.divider} />
          <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos non quos sunt, molestiae atque harum dicta nulla accusantium, et id sed a ad nihil libero laudantium sint quibusdam recusandae praesentium. Listing detail {id}</Text>
          <View style={styles.divider} />
          <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos non quos sunt, molestiae atque harum dicta nulla accusantium, et id sed a ad nihil libero laudantium sint quibusdam recusandae praesentium. Listing detail {id}</Text>
          <View style={styles.divider} />
          <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos non quos sunt, molestiae atque harum dicta nulla accusantium, et id sed a ad nihil libero laudantium sint quibusdam recusandae praesentium. Listing detail {id}</Text>
          <View style={styles.divider} />
          <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos non quos sunt, molestiae atque harum dicta nulla accusantium, et id sed a ad nihil libero laudantium sint quibusdam recusandae praesentium. Listing detail {id}</Text>
          <View style={styles.divider} />
          <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos non quos sunt, molestiae atque harum dicta nulla accusantium, et id sed a ad nihil libero laudantium sint quibusdam recusandae praesentium. Listing detail {id}</Text>
          <View style={styles.divider} />
          <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos non quos sunt, molestiae atque harum dicta nulla accusantium, et id sed a ad nihil libero laudantium sint quibusdam recusandae praesentium. Listing detail {id}</Text>
        </View>
      </Animated.ScrollView>

      <Animated.View style={defaultStyles.footer} entering={SlideInDown.delay(200).duration(600)}>
        <View style={styles.footerContent}>
          <Text style={styles.text}>Some text</Text>
          <TouchableOpacity style={[defaultStyles.btn, {padding: 16}]}>
            <Text style={{ color: Colors.dark.titleText, fontSize: 16}}>Button</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background
  },
  image: {
    height: IMG_HEIGHT,
    width
  },
  infoContainer: {
    padding: 24,
    backgroundColor: Colors.dark.background
  },
  text: {
    color: Colors.dark.bodyText
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.pink400,
    marginVertical: 16
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: Colors.dark.background,
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.pink500,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.pink500
  },
  header: {
    backgroundColor: Colors.dark.background,
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: Colors.pink500,
    // borderWidth: StyleSheet.hairlineWidth,
  }
})