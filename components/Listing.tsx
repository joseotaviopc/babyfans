import Colors from "@/constants/Colors"
import { FlatList, Image, ScrollView, Text, View } from "react-native"
import { categories } from "./ExploreHeader"

interface Props {
  category: number
}

const items = [
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
  return(
    <FlatList
      style={{
        // borderColor: Colors.pink500, 
        // borderTopWidth: 4, 
        marginTop: 200
      }}
      data={items}
      key={Math.random().toString(36).slice(2)}
      renderItem={({item}) => (
        <View style={{ flex: 1, gap: 8 }}>
          <Image source={item.image} height={400}/>
          <Text style={{
            fontSize: 24,
            fontFamily: 'mon-sb',
            color: Colors.dark.bodyText
          }}>
            Category: {categories[category].name} - {item.name}
          </Text>
        </View>
      )}
    />
  )
}