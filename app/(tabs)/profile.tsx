import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/styles";
import { useAuth } from "@/context/Auth";
import { Ionicons } from "@expo/vector-icons";
import { Link, useNavigation, useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const profileImage = "";
const image = require("@/assets/images/user.png");

export default function Page() {
  const { user, setSession } = useAuth()


  return (
    <SafeAreaView style={[defaultStyles.container, styles.container]}>
      <View style={styles.profileBox}>
        <Image source={profileImage || image} style={styles.image} />
        <View style={{ padding: 8, gap: 16 }}>
          <Text style={styles.profileTextName}>{user?.id}</Text>
          <Text style={styles.profileTextEmail}>{user?.email}</Text>
        </View>
      </View>
      <View style={[styles.profileBox, { justifyContent: 'space-between'}]}>
        <Link href={"/(modals)/settings"} asChild>
          <TouchableOpacity style={styles.settingsBox}>
            <Text
              style={[styles.profileTextEmail, { color: Colors.dark.bodyText }]}
            >
              Alterar perfil
            </Text>
            <Ionicons
              name="settings-outline"
              size={24}
              color={Colors.dark.neutral}
            />
          </TouchableOpacity>
        </Link>
        <TouchableOpacity style={styles.settingsBox} onPress={() => setSession(null)}>
          <Text
            style={[styles.profileTextEmail, { color: Colors.dark.bodyText }]}
          >
            Logout
          </Text>
          <Ionicons
            name="log-out-outline"
            size={24}
            color={Colors.dark.neutral}
          />
        </TouchableOpacity>
      </View>
      <Text style={{ color: "#ddd" }}>
        {JSON.stringify(user, null, 4)}
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos non
        quos sunt, molestiae atque harum dicta nulla accusantium, et id sed a ad
        nihil libero laudantium sint quibusdam recusandae praesentium. */}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark.background,
    padding: 24,
  },
  profileBox: {
    flexDirection: "row",
    gap: 12,
    // borderWidth: StyleSheet.hairlineWidth,
    // borderColor: Colors.dark.neutral,
    paddingVertical: 12,
    // backgroundColor: Colors.dark.neutral
  },
  profileTextName: {
    fontSize: 24,
    fontFamily: "mon-sb",
    color: Colors.pink400,
  },
  profileTextEmail: {
    fontSize: 12,
    fontFamily: "mon",
    letterSpacing: 1.5,
    color: Colors.pink400,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 120,
    borderWidth: 1,
    // borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.dark.neutral,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  settingsBox: {
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
  },
});
