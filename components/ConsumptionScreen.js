import React from 'react';
import { View, Text } from 'react-native';
import ChartComponent from './ChartComponent';

const ConsumptionScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#f8fcfb', alignItems: 'center', justifyContent: 'center' }}>
      <Text>Consumption Screen</Text>
      <ChartComponent />
    </View>
  );
};

export default ConsumptionScreen;