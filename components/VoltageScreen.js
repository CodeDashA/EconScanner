import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ChartCom from './ChartScreen';

const VoltageScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#f8fcfb', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.voltText}>Voltage Screen</Text>
      <ChartCom/>
    </View>
  );
};

const styles = StyleSheet.create({
  voltText: {
  },
});

export default VoltageScreen;