import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {

  return (
    <View>
      <View style={{
        top: 0,
        left: 0,
        width: '100%',
        height: 40,
        backgroundColor: '#446DFF'
      }}>
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: "row",
          margin: 8,
        }}>
          <Text style={{
            fontSize: 17,
            color: "white",
          }}>Welcome To Quantity Measurement
          </Text>
        </View>

      </View>
    </View>


  );
}
