import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SCProgram from '../screens/SCPrograms';
import MyCalender from '../screens/MyCalendar';
import Home from '../screens/Home';
import { GlobalColors } from '../assets/Colors';

const Tab = createMaterialTopTabNavigator();

function TopTabs() {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarLabelStyle: {color: GlobalColors.white},
      tabBarStyle: {backgroundColor: GlobalColors.charcoal, },
    }} >
      <Tab.Screen name="S&C Programs" component={Home} />
      <Tab.Screen name="My Calender" component={MyCalender} />
    </Tab.Navigator>
  );
}

export default TopTabs;
