import React from 'react';
import { Alert, Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import TopTabs from '../navigation/TopTabs';
import Banner from '../components/Banner';
import CustomButton from '../components/CustomButtom';
import { ImagesPath } from '../assets/Path';
import { Colors, GlobalColors } from '../assets/Colors';

const Home = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* <View  style={styles.headContainer} >
                <Text style={styles.head} >
                    DaruStrong
                </Text>
            </View> */}
            <View
                style={styles.ban}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}  >
                    <Banner source={ImagesPath.boxing1} text='Heavy Hitter Boxing Program' />
                    <Banner source={ImagesPath.boxing2} text='The Grind: Grapping & Wrestling' />
                    <Banner source={ImagesPath.boxing3} text='Combat Kettlebel: only' />
                    <Banner source={ImagesPath.boxing1} text='The Grind: Grapping & Wrestling' />
                
                    <Banner source={ImagesPath.boxing3} text='Heavy Hitter Boxing Program' />
                    <Banner source={ImagesPath.boxing1} text='Heavy Hitter Boxing Program' />
                    <Banner source={ImagesPath.boxing1} text='Heavy Hitter Boxing Program' />

                </ScrollView>
            </View>
            <View style={styles.btnContainer} >
                <CustomButton title='Add Workout to my Calendar'
                onPress = {() => props.navigation.navigate('BottomTabs')} />
            </View>
        </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalColors.charcoal,
        padding: 10,
    },
    ban: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnContainer: {
        bottom: 10,
        position: 'absolute',
        width: '95%',
        alignItems: 'center'
    },
    head: {
        color: GlobalColors.white,
        fontSize: 20,
        fontWeight: 'bold'
    },
    headContainer: {
        padding: 10,
        marginTop: 10,

    }
});
export default Home;
