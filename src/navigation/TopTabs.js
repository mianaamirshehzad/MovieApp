import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SCProgram from '../screens/SCPrograms';
import MyCalender from '../screens/MyCalendar';
import Home from '../screens/Home';

const Tab = createMaterialTopTabNavigator();

function TopTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="S&C Programs" component={Home} />
      <Tab.Screen name="My Calender" component={MyCalender} />
    </Tab.Navigator>
  );
}

export default TopTabs;
