import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import MyStack from './src/navigation';


const App = () => {
  return (
    <View  style = {styles.container}>
      <MyStack />
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
export default App;
