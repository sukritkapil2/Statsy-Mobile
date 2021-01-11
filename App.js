import React from 'react';

import LandingScreen from './components/LandingScreen';
import GuideScreen from './components/GuideScreen';
import LoginScreen from './components/LoginScreen';
import DetailScreen from './components/DetailScreen';
import RegisterScreen from './components/RegisterScreen';
import HomeScreen from './components/HomeScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={LandingScreen} />
          <Stack.Screen name="Start Guide" component={GuideScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Personal Info" component={DetailScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
