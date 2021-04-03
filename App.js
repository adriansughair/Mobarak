import React from 'react';
import {Node} from 'react';
import Router from'./src/Router/index';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';
import {Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';



const App: () => Node = () => {
  return <Router/>;
};


export default App;
