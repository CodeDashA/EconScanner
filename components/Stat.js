import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'

import { useEffect, useState } from "react";
import {db, ref, onValue} from "../firebase";

const Chart = (props) => {
  const [selected, setSelected] = React.useState("");
  const [volt, setVolt] = useState(90);
  const [temperature, setTemperature] = useState(25);

  useEffect(() => {
    const voltRef = ref(db, 'Sensor/ldr_data');
    const tempRef = ref(db, 'Sensor/voltage');

    const unsubscribeVolt = onValue(voltRef, (snapshot) => {
      setVolt(snapshot.val());
    });

    const unsubscribeTemp = onValue(tempRef, (snapshot) => {
      setTemperature(snapshot.val());
    });

    // Clean up the subscriptions when the component unmounts
    return () => {
      unsubscribeVolt();
      unsubscribeTemp();
    };
  }, [db]);

  // const doubledVolt = volt * 2;
  return(

      <View>
        <Text style={styles.sample}>{volt}</Text>
        <Text style={styles.sample}>{temperature}</Text>
        <View style={styles.dropdown}>
        <SelectList 
                setSelected={(val) => setSelected(val)} 
                data={data} 
                save="value"
                dropdownStyles
        />
        </View>
      </View>
  )
};

            const data = [
              {key:'1', value:'Mobiles'},
              {key:'2', value:'Appliances', disabled:true},
              {key:'3', value:'Cameras'},
            ]

const styles = StyleSheet.create( {
  chartText: {
    margin: 'auto'
  },
  dropdown: {
    backgroundColor: '#9ae5c9',
    color: 'red',
    width: 200,
    borderRadius: 10
  },
  sample: {
    textAlign: 'center',
   
  }
});

export default Chart
