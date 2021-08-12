import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, ScrollView, SafeAreaView, Button, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker';

export default class VolumePicker extends Component {
    constructor() {
        super();
        this.state = {
            choosenIndex1: 0,
            choosenIndex2: 0,
            text: '',
            unitConversion: '',
            Conversion1: 'Litres',
            Conversion2: 'Millilitres'

        }
    };

    handleConversion = () => {

        // console.warn(this.state.Conversion2);
        var unit
        if (this.state.Conversion1 == "Litres" && this.state.Conversion2 == "Millilitres")
            unit = this.state.text * 1000

        if (this.state.Conversion1 == "Litres" && this.state.Conversion2 == "Gallon")
            unit = this.state.text / 4.546

        if (this.state.Conversion1 == "Litres" && this.state.Conversion2 == "Litres")
            unit = this.state.text


        if (this.state.Conversion1 == "Millilitres" && this.state.Conversion2 == 'Litres')
            unit = this.state.text / 1000

        if (this.state.Conversion1 == "Millilitres" && this.state.Conversion2 == 'Gallon')
            unit = this.state.text / 4546

        if (this.state.Conversion1 == "Millilitres" && this.state.Conversion2 == 'Millilitres')
            unit = this.state.text


        if (this.state.Conversion1 == "Gallon" && this.state.Conversion2 == 'Litres')
            unit = this.state.text * 4.546

        if (this.state.Conversion1 == "Gallon" && this.state.Conversion2 == 'Millilitres')
            unit = this.state.text * 4546

        if (this.state.Conversion1 == "Gallon" && this.state.Conversion2 == 'Gallon')
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
                                    <Picker.Item label="Litres" value="Litres" />
                                    <Picker.Item label="Millilitres" value="Millilitres" />
                                    <Picker.Item label="Gallon" value="Gallon" />
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
                                    value={this.state.unitConversion}
                                    
                                />
                            </View>
                            <View style={{borderWidth:1,borderColor:'#E5DAFC',top:40,height:40,justifyContent:'center'}}>
                                <Picker style={styles.pickerStyle}
                                    selectedValue={this.state.Conversion2}
                                    onValueChange={(itemValue, itemPosition) =>
                                        this.setState({ Conversion2: itemValue, choosenIndex2: itemPosition })}
                                >
                                    <Picker.Item label="Millilitres" value="Millilitres" />
                                    <Picker.Item label="Gallon" value="Gallon" />
                                    <Picker.Item label="Litres" value="Litres" />
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
