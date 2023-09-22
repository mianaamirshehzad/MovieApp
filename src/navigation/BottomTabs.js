import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Workout from '../screens/Workout';
import Skills from '../screens/Skills';
import Exercise from '../components/Exercise';
import Messages from '../screens/Messages';
import Activity from '../screens/Activity';
import HomeScreen from '../screens/HomeScreen';
import MyCalender from '../screens/MyCalendar';
import { GlobalColors } from '../assets/Colors';


const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName='MyCalendar'
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {color: GlobalColors.white},
                tabBarStyle: {backgroundColor: GlobalColors.black, },
                tabBarActiveBackgroundColor: 'white',
            }}
        >
            <Tab.Screen name="Home" component={MyCalender} />
            <Tab.Screen name="Workout" component={Workout} />
            <Tab.Screen name="Skills" component={Skills} />
            <Tab.Screen name="Exercise" component={Exercise} />
            <Tab.Screen name="Messages" component={Messages} />
            <Tab.Screen name="Activity" component={Activity} />
        </Tab.Navigator>
    );
}

export default BottomTabs;