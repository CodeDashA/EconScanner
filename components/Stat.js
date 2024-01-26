import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const Chart = (props) => {

  return(
      <View style={styles.chartContainer}>
        <View>
        <Text style={styles.chartText}>this is mock</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create( {
  chartContainer: {
    backgroundColor: 'red',
    position: 'absolute',
    left: 20,
    width: 350,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    top: 100
  },
  chartText: {
    margin: 'auto'
  }
});

export default Chart
