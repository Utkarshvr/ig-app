import React from "react";
import { Text, View } from "react-native";

type Props = {};

export default function index({}: Props) {
  return (
    <View>
      <Text className="text-2xl font-p6sbi">Hello</Text>
      <Text className="text-2xl " style={{ fontFamily: "p6sb" }}>
        Hello
      </Text>
    </View>
  );
}
