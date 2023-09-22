import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { GlobalColors } from '../assets/Colors';
import Exercise from '../components/Exercise';
import { ImagesPath } from '../assets/Path';
import CalendarStrip from 'react-native-calendar-strip';



const MyCalender = () => {
    return (
        <View style={styles.container} >
            {/* Horizontal Calendar */}
            <View>
                <CalendarStrip
                    calendarAnimation={{ type: 'sequence', duration: 30 }}
                    daySelectionAnimation={{ type: 'background', duration: 300, highlightColor: GlobalColors.theme }}
                    style={{ height: 100, paddingTop: 10, paddingBottom: 10 }}
                    calendarHeaderStyle={{ color: 'white' }}
                    // calendarColor={'#7743CE'}
                    dateNumberStyle={{ color: 'white' }}
                    dateNameStyle={{ color: 'white' }}
                    iconContainer={{ flex: 0.1 }}
                    onDateSelected={(date) => console.log(date)}
                />
            </View>
            <View style={styles.lineDirection} >
                <Text style={styles.leftText} >Chest & Shoulders</Text>
                <Text style={styles.rightText}>9 total exercises</Text>
            </View>
            <Text style={{ color: GlobalColors.white }} >
                _____________________________________________________
            </Text>
            <View style={styles.exercise} >
                <View style={styles.lineDirection} >
                    <Text style={styles.leftText} >Superset</Text>
                    <Text style={styles.rightText}>4 rounds | 3 exercise</Text>

                </View>
                <ScrollView>
                    <Exercise
                        source={ImagesPath.boxing1}
                        title='Wheel Stretch' />
                    <Exercise
                        source={ImagesPath.boxing1}
                        title='Full Crunches' />
                </ScrollView>
            </View>
            <Text style={{ color: GlobalColors.white }} >
                _____________________________________________________
            </Text>
            <View style={styles.exercise} >
                <View style={styles.lineDirection} >
                    <Text style={styles.leftText} >Superset</Text>
                    <Text style={styles.rightText}>4 rounds | 3 exercise</Text>

                </View>
                <ScrollView>
                    <Exercise
                        source={ImagesPath.boxing1}
                        title='Battle rope' />
                    <Exercise
                        source={ImagesPath.boxing1}
                        title='Full Crunches' />
                </ScrollView>
            </View>
        </View >
    )
};

export default MyCalender;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: GlobalColors.charcoal,
        padding: 10,
    },
    lineDirection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        width: '100%'
    },
    leftText: {
        fontSize: 18,
        color: GlobalColors.white,
        // flex: 1, 
        marginRight: 20,
    },
    rightText: {
        fontSize: 14,
        color: GlobalColors.white,
        // flex: 1,
        marginLeft: 20
    },
    exercise: {
        padding: 10,
        margin: 10,
        left: -10
    }
});