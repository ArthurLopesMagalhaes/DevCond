import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Preload } from "../screens/Preload";
import React from "react";
import { SignIn } from "../screens/SignIn";

const  Stack = createNativeStackNavigator()

export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Preload" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="SignIn" component={SignIn} />
  </Stack.Navigator>
  )
}