/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native';

export default class DemoProject extends Component {
  render() {
    return (
      <Navigator initialRoute={{ title: 'Escena 1', index: 0 }}
      renderScene={(route, navigator) =>{
        if(route.index == 0) {
          return(
          <View style={[styles.container, {backgroundColor:'#ccc'}]}>
          <Text>{route.title}</Text>
          <TouchableOpacity style={styles.button} onPress={()=>{ navigator.push({title:'Escena 2', index:1}) }}><Text>Ir a escena 2</Text></TouchableOpacity>
          </View>);
        }else if(route.index ==1){
          return(
          <View style={styles.container}>
          <Text>{route.title}</Text>
          <TouchableOpacity style={styles.button} onPress={()=>{ navigator.pop() }}><Text>Regresar</Text></TouchableOpacity>
          </View>);
        }
      }
    }
    />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button:{
    backgroundColor:'#9cf',
    padding:10,
    margin:20
  }
});

AppRegistry.registerComponent('DemoProject', () => DemoProject);
