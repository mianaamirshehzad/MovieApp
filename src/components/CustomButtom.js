import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ProgressViewIOSComponent } from 'react-native';
import { GlobalColors } from '../assets/Colors';

const CustomButton = (props) => {
    return (
        <TouchableOpacity style= {{...styles.btn, ...props.style}}
            onPress={props.onPress} >
            <Text style={styles.text}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: GlobalColors.theme,
        width: '90%',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        elevation: 5,
        shadowRadius: 5,
        padding: 10,
        margin: 10,
    },
    text: {
        color: 'white',
        // fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CustomButton;