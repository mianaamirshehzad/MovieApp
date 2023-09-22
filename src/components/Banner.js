import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';


const Banner = ({source, text}) => {
    return (
        <View style={styles.container} >
            <ImageBackground
                source={source}
                style={styles.img}
                imageStyle={{ borderRadius: 10,  }} >
                <View style={styles.textContainer} >
                    <Text style={styles.text} >
                        {text}
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Banner;

const styles = StyleSheet.create({
    img: {
        width: 340,
        height: 130,
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    },
    textContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 5,

    },
    container: {
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

});