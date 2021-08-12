import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default class Box extends Component {
    constructor() {
        super();

    }

    render() {

        return (

            <View style={styles.container1}>
                <View >
                    <Text>CHOOSE TYPE</Text>
                </View>

                <View style={styles.container2}>

                    <View style={styles.box}>
                        <View style={styles.inner}>
                            <Image source={require('../assets/logo/Length.png')} ></Image>
                            <Text>Length</Text>
                        </View>
                    </View>

                    <View style={styles.box}>
                        <View style={styles.inner}>
                            <Image source={require('../assets/logo/Temprature.png')}></Image>
                            <Text>Temperature</Text>
                        </View>
                    </View>

                    <View style={styles.box}>
                        <View style={styles.inner}>
                            <Image source={require('../assets/logo/Volume.png')}></Image>
                            <Text>Volume</Text>
                        </View>
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container1: {
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black'
    },
    container2: {
        flex: 1,
        width: '100%',
        //height: '85%',
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    box: {
        flex: 1,
        //justifyContent:'space-between',
        marginHorizontal: 10,
        top: 50,
        width: 90,
        height: 90,
        padding: 1,
        backgroundColor: "blue",
    },
    inner: {
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center'
    }
});
