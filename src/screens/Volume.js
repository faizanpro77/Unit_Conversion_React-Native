import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import LengthPicker from '../components/LengthPicker';
import VolumePicker from '../components/VolumePicker';


export default class Volume1 extends Component {

    constructor(props) {
        super(props);
    }

    controlLength = () => {
        //console.warn(this.props)
        this.props.navigation.navigate('Length')
    }

    controlTemprature = () => {
        // console.warn(this.props);
        this.props.navigation.navigate('Temprature')
    }

    render() {

        return (

            <View style={styles.container1}>
                <Header />
                <View style={styles.container2}>
                    <View>
                        <View>
                            <Text>CHOOSE TYPE</Text>
                        </View>
                        <View style={styles.boxview}>
                            <TouchableOpacity onPress={this.controlLength}>
                                <View style={styles.box1}>
                                    <View style={styles.inner}>
                                        <Image source={require('../assets/logo/ColorLessScale.png')}
                                        ></Image>
                                        <Text>Length</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.controlTemprature}>
                                <View style={styles.box2}>
                                    <View style={styles.inner}>
                                        <Image source={require('../assets/logo/colorlesstemp.png')}
                                        // onPress={() => this.props.nevigation.navigate('Temprature')}
                                        ></Image>
                                        <Text>Temperature</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.box3}>
                                    <View style={styles.inner}>
                                        <Image source={require('../assets/logo/Volume.png')}
                                        ></Image>
                                        <Text style={{color:'#7224FF'}}>Volume</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>

                        </View>
                    </View>
                </View>

                <VolumePicker />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        height: '100%',
        width: '100%',
        
    },
    container2: {
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        flexDirection: 'column',
        top: 15,
    },
    boxview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        //flex:1

    },

    box1: {       
        width: 100,
        height: 90,
    },
    box2: {
 
        width: 100,
        height: 90,
    },

    box3: {
   
        width: 100,
        height: 90,
        // borderRadius: 5,
        // borderWidth: 2,
        borderRadius: 3,
        borderWidth: 1,
        borderColor:'#7224FF'


    },
    inner: {
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center'
    }
});
