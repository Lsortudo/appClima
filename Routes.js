import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import Home from './pages/Home';
import Weather from './pages/Weather';


const Stack = createStackNavigator();

const Routes = () => {
  return (

    <NavigationContainer>
    <Stack.Navigator headerMode = "none" initialRouteName  = "Home">
    <Stack.Screen name = "Home" component={Home} />
    <Stack.Screen name = "Weather" component={Weather} />
    </Stack.Navigator>
    </NavigationContainer>

  );
};

export default Routes;