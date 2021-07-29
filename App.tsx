import 'react-native-gesture-handler';
import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme ,View} from 'react-native';
import Router from './router';
import Headers from './screens/Headers';

const App =()=> {
  const [svalue,setSValue]=useState('')
  const isDarkMode=useColorScheme()==='dark';
  const backgroundStyle={
    backgroundColor:isDarkMode ? Colors.darker : Colors.lighter,
    flex:1
  }
    return (
      <View  style={backgroundStyle}>
        <StatusBar  />
          <Headers svalue={svalue} setSValue={setSValue}></Headers>
         <Router></Router>
      </View>
    );
  }
export default App;
