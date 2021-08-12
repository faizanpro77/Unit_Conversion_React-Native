import React from 'react';
//import {View,Text, StyleSheet, ScrollView,SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Length from './src/screens/Length';
import Volume from './src/screens/Volume';
import Temprature from './src/screens/Temprature';

const Stack = createNativeStackNavigator(); //screen and navigator

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Volume' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Volume" component={Volume} />
        <Stack.Screen name="Temprature" component={Temprature} />
        <Stack.Screen name="Length" component={Length} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;