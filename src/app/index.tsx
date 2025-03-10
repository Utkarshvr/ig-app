import React, { useState, useEffect } from "react";
import auth from "@react-native-firebase/auth";
import { View, Text } from "react-native";
import { Redirect } from "expo-router";

function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );

  if (!user) {
    return <Redirect href={"/not-auth/index"} />;
  }
  return <Redirect href={"/auth/index"} />;
}
