import { StyleSheet, View} from 'react-native';
import React from 'react'
//import WelCome from './Screen/WelCome';
//import Login from './Screen/Login';
import Register from './Screen/Register';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Register/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
