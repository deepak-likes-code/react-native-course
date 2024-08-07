import { ScrollView, Text, View } from "react-native";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";

export default function Index() {
  return (
    <SafeAreaView className=" bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="items-center justify-center  w-full min-h-[85vh] px-4 ">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            resizeMode="contain"
            className="max-w-[380px] w-full h-[300px]"
          />

          <View className="relative mt-5">
            <Text className="text-3xl font-pbold text-white text-center">
              Discover Endless Possibilities{" "}
              <Text className="text-secondary-200">with Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="absolute w-[136px] h-[15px] -bottom-2 -right-8 "
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-8 text-center">
            Where creativity meets innovation: Embark on a journey of limitless
            exploration with Aora
          </Text>
          <CustomButton
            title={"Continue With Email"}
            handlePress={() => {
              router.push("/sign-in");
            }}
            containerStyles={"w-full mt-7"}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light"></StatusBar>
    </SafeAreaView>
  );
}
