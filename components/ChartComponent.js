import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const ChartComponent = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  return (
    <LineChart
      data={data}
      width={Dimensions.get('window').width - 16}
      height={200}
      yAxisLabel="kWh"
      yAxisSuffix="k"
      chartConfig={{
        backgroundGradientFrom: '#f8fcfb',
        backgroundGradientTo: '#f8fcfb',
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(7, 19, 15, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(7, 19, 15, ${opacity})`,
        style: {
          borderRadius: 16,
        },
      }}
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  );
};

export default ChartComponent;