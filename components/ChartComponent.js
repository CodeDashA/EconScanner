// import React, { useEffect, useState } from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import { db, ref, onValue } from '../firebase';
// import { LineChart } from 'react-native-chart-kit';
// import { Dimensions } from 'react-native';

// const ChartComponent = () => {
//   const [sensorData, setSensorData] = useState({});

//   useEffect(() => {
//     const sensorRef = ref(db, 'Sensor');

//     const unsubscribeSensor = onValue(sensorRef, (snapshot) => {
//       if (snapshot.exists()) {
//         const data = snapshot.val();
//         console.log('Fetched data:', data);
//         setSensorData(data);
//       } else {
//         console.log('No data found in Firebase.');
//       }
//     });

//     // Clean up the subscription when the component unmounts
//     return () => {
//       unsubscribeSensor();
//     };
//   }, []);

//   // Filter out non-timestamp entries
//   const timestamps = Object.keys(sensorData).filter((key) => key !== 'ldr_data' && key !== 'voltage');
//   const ldrDataValues = timestamps.map((timestamp) => sensorData[timestamp]?.ldr_data);

//   // Show only the latest n data points (adjust n as needed)
//   const numLatestDataPoints = 6; // Change this to the desired number of data points to show
//   const latestTimestamps = ["30s ago", " ", "15s ago", " ", "Now"];
//   const latestLdrDataValues = ldrDataValues.slice(-numLatestDataPoints);

//   // Add logs to check extracted data
//   console.log('Latest Timestamps:', latestTimestamps);
//   console.log('Latest LDR Data Values:', latestLdrDataValues);

//   const lineChartData = {
//     labels: latestTimestamps,
//     datasets: [
//       {
//         data: latestLdrDataValues,
//       },
//     ],
//   };

//   return (
//     <View>
//       <Text style={styles.voltText}>Voltage Screen</Text>
//       <View>
//         <Text>Bezier Line Chart</Text>
//         <LineChart
//           data={lineChartData}
//           width={Dimensions.get('window').width} // from react-native
//           height={220}
//           yAxisLabel="$"
//           yAxisSuffix="k"
//           yAxisInterval={1} // optional, defaults to 1
//           chartConfig={{
//             backgroundColor: '#e26a00',
//             backgroundGradientFrom: '#fb8c00',
//             backgroundGradientTo: '#ffa726',
//             decimalPlaces: 2, // optional, defaults to 2dp
//             color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//             labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//             style: {
//               borderRadius: 16,
//             },
//             propsForDots: {
//               r: '6',
//               strokeWidth: '2',
//               stroke: '#ffa726',
//             },
//           }}
//           bezier
//           style={styles.chart}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   chart: {
//     marginVertical: 8,
//     borderRadius: 16,
//   },
//   voltText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default ChartComponent;
