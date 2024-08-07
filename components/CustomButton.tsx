import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

type CustomButtonProps = {
  title: any;
  handlePress: any;
  containerStyles: any;
  textStyles?: any;
  isLoading?: any;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl  justify-center min-h-[62px] items-center ${containerStyles}  ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg  ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
