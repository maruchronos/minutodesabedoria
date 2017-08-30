import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Image, TouchableHighlight} from 'react-native';
import { Constants } from 'expo';
import {StackNavigator } from 'react-navigation'; // 1.0.0-beta.11

const window = Dimensions.get('window');

const styles = StyleSheet.create({  
  featured: {
    flex:1,
    backgroundColor: 'transparent'
  },
  featured_image:{
    flex:1,    
    padding:30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  close_image:{
    position: 'absolute',
    right: 10,
    top: 20
  },
  footer:{    
    position: 'absolute',
    bottom: 20,    
  },
  actions:{
    flexDirection: 'row'
  },
  circle:{    
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FFF',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 17,
    paddingBottom: 17,
    alignItems: 'center',
    margin: 5
  },
  action:{
    color: '#FFF'
  },
  title:{
    fontSize: 24,
    color: '#FFF',
    paddingLeft: 20
  },
  autor:{
    fontSize: 18,
    color: '#FFF',
    paddingLeft: 20
  },
  icon_container:{
    alignItems: 'center',
    width: window.width,    
  },
  overlay:{
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    width: window.width,
    height: window.height,
    opacity: 0.4,
    backgroundColor: 'black'
  }
});

export default class Card extends Component {
  static navigationOptions = {
    title: 'Card',
    header: null
  };
  _onPressClose () {
    this.props.navigation();
  }
  render() {
    return (      
      <View style={styles.featured}>
        <Image source={{ uri: 'https://static1.squarespace.com/static/51f796fae4b097de73d03da7/t/53876308e4b0ef904917bf5c/1430658126684/Prayer+Partners+Header+%281+of+1%29.jpg?format=1500w' }} style={styles.featured_image}>          
          <View style={styles.overlay}/>
          <TouchableHighlight onPress={this._onPressClose} style={styles.close_image}>
            <Image source={require('../assets/img/close.png')}/>
          </TouchableHighlight>
          <View style={styles.actions}>
            <View style={styles.circle}>
              <Image source={require('../assets/img/book-open-variant.png')} style={styles.icon}/>
              <Text style={styles.action}>Leia</Text>
            </View>
            <View style={styles.circle}>
              <Image source={require('../assets/img/headphones.png')} style={styles.icon}/>
              <Text style={styles.action}>Ouça</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.icon_container}>
              <Image source={require('../assets/img/chevron-up.png')} style={styles.icon}/>
            </View>
            <Text style={styles.title}>O Poder da Oração</Text>
            <Text style={styles.autor}>Pr. André Lins</Text>
          </View>          
        </Image>
      </View>        
    );
  }
}

const CardNavigator = StackNavigator({  
  Card: { screen: Card}
});