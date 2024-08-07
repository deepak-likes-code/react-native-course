import { View, Text, ImageSourcePropType } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import { Image } from "react-native";
import { icons } from "../../constants";

type TabIconProps = {
  icon: ImageSourcePropType;
  color: string;
  focus: boolean;
  name: string;
};

const TabIcon: React.FC<TabIconProps> = ({ icon, color, focus, name }) => {
  return (
    <View className="items-center justify-center gap-2 mt-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      ></Image>
      <Text
        className={`${focus ? "font-psemibold" : "font-pregular"}`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                name="Home"
                icon={icons.home}
                focus={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                name="Profile"
                icon={icons.profile}
                focus={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                name="Create"
                icon={icons.plus}
                focus={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                name="Bookmark"
                icon={icons.bookmark}
                focus={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
