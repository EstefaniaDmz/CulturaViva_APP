import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { globalStyle } from './src/styles';
import HomeNavigator from './src/navigator/HomeNavigator';


function App(): JSX.Element{
    return (
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
);
};

export default App;