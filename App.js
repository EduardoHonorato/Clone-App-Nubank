import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native'

import HomeScreen from './src/screens/Home';

const Stack = createStackNavigator();


export default function App(){
  return (
    <>
    <StatusBar barStyle='light-content' backgroundColor="#8b10ae"/>

   <NavigationContainer>
    <Stack.Navigator >
 
      <Stack.Screen 
      name="Home" 
      component={HomeScreen}
      options={{
        headerShown:false,
      }}
      />
  
    </Stack.Navigator>
   </NavigationContainer>
   </>
  )

}