import { View, Text, Image, ScrollView } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

type FormType = {
  username: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const [form, setForm] = useState<FormType>({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[83vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="h-[35px] w-[135px]"
          />
          <Text className="text-2xl text-white text-semibold  mt-10 font-psemibold">
            Log In To Aora
          </Text>
          <FormField
            title="Username"
            value={form.email}
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            placeholder={"Jon Doe"}
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            placeholder={"jondoe@acme.inc"}
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e: any) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            placeholder={"Enter Password"}
          />

          <CustomButton
            title={"Sign In"}
            containerStyles={"w-full mt-16"}
            handlePress={() => {}}
            isLoading={isSubmitting}
          />

          <View className="gap-2 flex-row justify-center mt-5">
            <Text className="text-lg text-gray-100 font-pregular">
              Have on account already?
            </Text>
            <Link
              href={"/sign-in"}
              className="text-lg font-psemibold text-secondary"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
