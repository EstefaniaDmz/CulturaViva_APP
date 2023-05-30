import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screen/Home";
import DetailEvento from "../screen/DetailEvento";

const HomeNavigator = () =>{
    const HomeStack = createNativeStackNavigator();

    return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
        <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
        <HomeStack.Screen name="DetailsScreen" component={DetailEvento} />
    </HomeStack.Navigator>
    );
};

export default HomeNavigator;