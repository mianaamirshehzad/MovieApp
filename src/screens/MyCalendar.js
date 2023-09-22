import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GlobalColors } from '../assets/Colors';


const MyCalender = () => {
    return (
        <View style={styles.container} >
            <View style={styles.lineDirection} >
                <Text style={styles.leftText} >Chest & Shoulders</Text>
                <Text style={styles.rightText}>9 total exercises</Text>
            </View>
        </View>
    )
};

export default MyCalender;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalColors.charcoal,
        padding: 10,
    },
    lineDirection: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingHorizontal: 16
    },
    leftText: {
        fontSize: 20,
        color: GlobalColors.white,
        // justifyContent: 'flex-start'
    },
    rightText: {
        fontSize: 14,
        color: GlobalColors.white,
        // justifyContent: 'flex-end'
    }
});