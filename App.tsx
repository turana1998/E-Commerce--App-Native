import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import Headers from './screens/Headers';
import { useColorScheme } from 'react-native';

const App =()=> {
  
  const isDarkMode=useColorScheme()==='dark';
  const backgroundStyle={
    backgroundColor:isDarkMode ? Colors.darker : Colors.lighter,
  }
    return (
      <SafeAreaView  style={backgroundStyle}>
        <StatusBar  />
        <Headers></Headers>
        <HomeScreen/>
      </SafeAreaView>
    );
  }
export default App;
