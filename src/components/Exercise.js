import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { GlobalColors } from '../assets/Colors';


const Exercise = ({ source, title }) => {
    return (
        <View style={styles.container} >
            <Image
                source={source}
                style={styles.img} />
            <View style={{ padding: 5 }}>
                <Text style={{ fontSize: 16, color: GlobalColors.white, marginLeft: 5 }} >
                    {title}
                </Text>
                <Text style={{ fontSize: 12, color: GlobalColors.white, marginLeft: 5 }}>
                    3 min | 1 set | 14 reps
                </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    img: {
        width: 70,
        height: 70,
        borderRadius: 10
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 5
    }
})
export default Exercise;