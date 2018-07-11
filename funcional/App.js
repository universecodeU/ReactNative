/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList, 
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(){
    super()
    this.state = {
    dataSource: []
  }
}

renderItem =( {item} ) => {
 return(

 <View>
    <Image style=  {{ width: 100, height: 100}}
      source= { {uri: item.image } }/>
    
  <View>
     <Text>
      { item.book_title }
     </Text>

     <Text>
      { item.author }
     </Text>
  </View>
   
 </View>


  )


  }

componentDidMount () {
  const url ='http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1'
  fetch(url)
  .then((response) => response.json() )
  .then((responseJson) => {
      this.setState({
        dataSource: responseJson.book_array

      })
  })
  .catch((error) =>{
    console.log(error)
  })
}



  render() {
    return (
      <View style={styles.container}>

  <FlatList
  data={this.state.dataSource}
  renderItem={this.renderItem}
  />



      </View>
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
  


});
