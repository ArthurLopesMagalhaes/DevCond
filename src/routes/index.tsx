import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { AuthStack } from "./AuthStack"

export const MainRoutes = () => {
  return (
    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>  
  )
}