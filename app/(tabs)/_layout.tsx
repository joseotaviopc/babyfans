import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, StyleSheet, View, useColorScheme } from 'react-native';

import Colors from '@/constants/Colors';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { defaultStyles } from '@/constants/styles';

export default function Layout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: Colors.pink400,
      // tabBarInactiveTintColor: Colors.pink400,
      tabBarActiveBackgroundColor: Colors.dark.background,
      tabBarInactiveBackgroundColor: Colors.dark.background,
      tabBarStyle: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: Colors.pink400,
        paddingVertical: 0,
        backgroundColor: Colors.dark.background,
      },
      headerTransparent: true,
      headerTintColor: Colors.pink400,
      // headerShown: false,
      tabBarLabelStyle: {
        fontFamily: 'mon',
        fontSize: 12,
        // paddingVertical: 2,
      },
    }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size}) => <Ionicons name="search" color={color} size={size} />
        }}
        />
      <Tabs.Screen
        name="favorite"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size}) => <Ionicons name="heart-outline" color={color} size={size} />
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size}) => <Ionicons name="add-circle-outline" color={color} size={40} />
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size}) => <MaterialCommunityIcons name="message-outline" color={color} size={size} />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size}) => <Ionicons name="person-circle-outline" color={color} size={size} />
        }}
      />
    </Tabs>
  );
}
