import React from 'react';
import { View, Text } from 'react-native';
import Chart from './Stat';

const ConsumptionScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#f8fcfb', alignItems: 'center', justifyContent: 'center' }}>
      <Text>Consumption Screen</Text>
      <Chart/>
    </View>
  );
};

export default ConsumptionScreen;