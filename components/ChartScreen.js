import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { db, ref, onValue } from '../firebase';
import { Dimensions } from 'react-native';


const ChartCom = () => {
  const [sensorData, setSensorData] = useState({});

  useEffect(() => {
    const sensorRef = ref(db, 'Sensor');

    const unsubscribeSensor = onValue(sensorRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log('Fetched data:', data);
        setSensorData(data);
      } else {
        console.log('No data found in Firebase.');
      }
    });

    // Clean up the subscription when the component unmounts
    return () => {
      unsubscribeSensor();
    };
  }, []);

  // Filter out non-timestamp entries
  const timestamps = Object.keys(sensorData).filter((key) => key !== 'ldr_data' && key !== 'voltage');
  const voltageValues = timestamps.map((timestamp) => sensorData[timestamp]?.voltage);

  // Show only the latest n data points (adjust n as needed)
  const numLatestDataPoints = 10; // Change this to the desired number of data points to show
  const latestTimestamps = ["30s ago", " ", "15s ago", " ", "Now"];
  const latestVoltageValues = voltageValues.slice(-numLatestDataPoints);

  // Add logs to check extracted data
  console.log('Latest Timestamps:', latestTimestamps);
  console.log('Latest Voltage Values:', latestVoltageValues);

  const chartData = {
    labels: latestTimestamps,
    datasets: [
      {
        data: latestVoltageValues,
      },
    ],
  };

  return (
    <View>
      {/* <Text>{JSON.stringify(sensorData)}</Text> */}
      <View>
      <LineChart
          data={chartData}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          // yAxisLabel="$"
          yAxisSuffix="V"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundGradientFrom: '#ffff',
            backgroundGradientTo: '#9ae5c9',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '3',
              strokeWidth: '1',
              stroke: '#07130f',
            },
          }}
          bezier
          style={styles.chart}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chart: {
    marginVertical: 8,
    borderRadius: 16,    
    flex: 1
  },
});

export default ChartCom;
