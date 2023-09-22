import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TopTabs from './TopTabs';
import Home from '../screens/Home';
import MyCalender from '../screens/MyCalendar';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator
      screenOptions={{
        headerShown: false     }} >
        {/* <Stack.Screen name="Home" component={Home} /> */}
        {/* <Stack.Screen name="MyCalender" component={MyCalender} /> */}
        <Stack.Screen
          name="TopTabs"
          component={TopTabs}
        /> 
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;