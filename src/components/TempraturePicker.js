import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, ScrollView, SafeAreaView, Button, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker';

export default class TempraturePicker extends Component {
    constructor() {
        super();
        this.state = {
            choosenIndex1: 0,
            choosenIndex2: 0,
            text: '',
            unitConversion: '',
            Conversion1: 'Celsius',
            Conversion2: 'Fahrenheit'

        }
    };

    handleConversion = () => {

        // console.warn(this.state.Conversion2);
        var unit
        if (this.state.Conversion1 == "Celsius" && this.state.Conversion2 == "Fahrenheit")
            unit = (this.state.text * 9/5) + 32

        if (this.state.Conversion1 == "Celsius" && this.state.Conversion2 == "Kelvin")
            unit = this.state.text + 273.15 

        if (this.state.Conversion1 == "Celsius" && this.state.Conversion2 == "Celsius")
            unit = this.state.text


        if (this.state.Conversion1 == "Fahrenheit" && this.state.Conversion2 == 'Celsius')
            unit = (this.state.text - 32) * 5/9

        if (this.state.Conversion1 == "Fahrenheit" && this.state.Conversion2 == 'Kelvin')
            unit = (this.state.text - 32) * 5/9 + 273.15

        if (this.state.Conversion1 == "Fahrenheit" && this.state.Conversion2 == 'Fahrenheit')
            unit = this.state.text


        if (this.state.Conversion1 == "Kelvin" && this.state.Conversion2 == 'Celsius')
            unit = this.state.text - 273.15

        if (this.state.Conversion1 == "Kelvin" && this.state.Conversion2 == 'Fahrenheit')
            unit = (this.state.text - 273.15) * 9/5 + 32

        if (this.state.Conversion1 == "Kelvin" && this.state.Conversion2 == 'Kelvin')
            unit = this.state.text

        this.setState({
            unitConversion: String(unit)
        });
    };

    render() {
        return (

            <View style={styles.container1}>
                <View style={styles.containe2}>
                    <View style={styles.container3}>
                        <View>
                            <View style={styles.from}>
                                <Text  >FROM</Text>
                            </View>
                            <View>
                                <TextInput
                                    style={styles.inputstyle}
                                    keyboardType='numeric'
                                    onChangeText={(text) => this.setState({ text })}

                                />
                            </View>
                            <View style={{borderWidth:1,borderColor:'#E5DAFC',top:40,height:40,justifyContent:'center'}}>
                                <Picker style={styles.pickerStyle}
                                    selectedValue={this.state.Conversion1}
                                    onValueChange={(itemValue, itemPosition) =>
                                        this.setState({ Conversion1: itemValue, choosenIndex1: itemPosition })}
                                >
                                   <Picker.Item label="Celsius" value="Celsius" />
                                    <Picker.Item label="Fahrenheit" value="Fahrenheit" />
                                    <Picker.Item label="Kelvin" value="Kelvin" />
                                </Picker>
                            </View>
                        </View>
                        <View>
                            <View style={styles.to}>
                                <Text  >To</Text>
                            </View>
                            <View>
                                <TextInput
                                    style={styles.inputstyle}
                                    keyboardType='numeric'
                                    vlaue={this.state.unitConversion}
                                />
                                {/* <Text style={{top:40,}}>{this.state.unitConversion}</Text> */}
                            </View>
                            <View style={{borderWidth:1,borderColor:'#E5DAFC',top:40,height:40,justifyContent:'center'}}>
                                <Picker style={styles.pickerStyle}
                                    selectedValue={this.state.Conversion2}
                                    onValueChange={(itemValue, itemPosition) =>
                                        this.setState({ Conversion2: itemValue, choosenIndex2: itemPosition })}
                                >
                                    <Picker.Item label="Fahrenheit" value="Fahrenheit" />
                                    <Picker.Item label="Kelvin" value="Kelvin" />
                                    <Picker.Item label="Celsius" value="Celsius" />

                                </Picker>
                            </View>
                        </View>
                    </View>

                    <View style={styles.buttonstyle}>

                        <Button
                            title='convert'
                            onPress={this.handleConversion
                            }
                        />
                        {/* <Text>{'Text is =' + this.state.unitConversion}</Text>
                        <Text>{'Text is =' + this.state.Conversion1}</Text>
                        <Text>{'Text is =' + this.state.Conversion2}</Text> */}


                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container1: {

        height: '100%',
        width: '100%'

    },

    containe2: {
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        flexDirection: 'column'
    },
   
    container3: {
        
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    from: {
        top: 40
    },
    to: {
        top: 40
    },

    inputstyle: {
      //  flex:1,
        top: 40,
        height: 40,
        backgroundColor: 'white',
        fontSize: 12,
        width: 140,
        fontWeight:'bold',
        borderWidth: 1,
        borderColor:'#E5DAFC',
        paddingLeft:17
       
              
    },

    pickerStyle: {       
        color: 'black',
               
    },

    buttonstyle:{
        top:50,   
    }
})
