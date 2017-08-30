import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  Button
} from 'react-native';

import { Font } from 'expo';
import AppIntro from 'react-native-app-intro'; // 1.1.5
import {StackNavigator} from 'react-navigation'; // 1.0.0-beta.11
import Catalogo from './screens/Catalogo'
import Card from './screens/Card'

const introStyle = {
  header: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pic: {
    width: 150,
    height: 150,
  },
  info: {
    flex: 0.5,
    alignItems: 'center',
    padding: 30,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    paddingBottom: 20,
  },
  description: {
    color: '#fff',
    fontSize: 20,
  },
  controllText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  dotStyle: {
    backgroundColor: 'rgba(255,255,255,.3)',
    width: 10,
    height: 10,
    borderRadius: 7,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 7,
    marginBottom: 7,
    borderColor: '#7b54d1',
    borderWidth: 1
  },
  activeDotStyle: {
    backgroundColor: '#fff',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 15,
    left: 0,
    right: 0,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  dotContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  nextButtonText: {
    fontSize: 22,
    fontWeight: 'bold',    
    
  },
  full: {
    position: 'absolute',
    //right: 15
    flex:1,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  nextButton:{
    //position: 'absolute',
    //right: 15
  }
}

const styles = StyleSheet.create({
  bgImage:{
    flex:1, 
    opacity: 0.7   
  },
  textBox: {
    position: 'absolute',
    top: 30,
    left: 30,
    borderWidth: 2,
    padding: 10,
    borderColor: '#FFF',
  },
  textLogo: {
    color: '#fff',
    fontSize: 30,
  },
  textBottom: {
    position: 'absolute',
    bottom: 20,    
    color: '#fff',
    fontWeight: '100',
    fontSize: 20,
    textAlign: 'center', 
    padding: 10   
  },
  slide: {
    flex: 1,
  }
});

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    header: null
  };

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Arial': require('./assets/fonts/arial.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  onSkipBtnHandle = (index) => {
    this.props.navigation.navigate('Card');
  }
  doneBtnHandle = () => {
    this.props.navigation.navigate('Catalogo');    
  }
  
  render() {
    return (
      this.state.fontLoaded ? (
        <AppIntro          
          onDoneBtnClick={this.doneBtnHandle}
          onSkipBtnClick={this.onSkipBtnHandle}          
          customStyles={introStyle}
          doneBtnLabel='Pronto'
          skipBtnLabel='Pular'
          nextBtnLabel='Próximo'
          leftTextColor='#dedede'
          rightTextColor='#7b54d1'
          dotColor="#FFF"
          activeDotColor="#7b54d1"
        >
          <View style={[styles.slide,{ backgroundColor: '#7b54d1' }]}>
            <View  level={10} style={{flex:7}}>              
              <Image source={{ uri: 'https://static1.squarespace.com/static/51f796fae4b097de73d03da7/t/53876308e4b0ef904917bf5c/1430658126684/Prayer+Partners+Header+%281+of+1%29.jpg?format=1500w' }} style={styles.bgImage}>
                <View style={styles.textBox}>
                  <Text style={styles.textLogo}>Minuto de</Text>
                  <Text style={styles.textLogo}>Sabedoria</Text>
                </View>
                <Text style={styles.textBottom}>Leia textos cristãos em alguns minutos e onde você estiver!</Text>
              </Image>
            </View>
            <View style={{flex:1, backgroundColor:'#FFFFFF'}}></View>
          </View>
          <View style={[styles.slide,{ backgroundColor: '#fa931d' }]}>
            <View style={styles.textBox}>
              <Text style={styles.textLogo}>Página 2</Text>
            </View>
          </View>
          <View style={[styles.slide,{ backgroundColor: '#fa931d' }]}>
            <View level={5} style={{flex:1}}>
              <Image source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }} style={{ flex:1 }}>
                <View style={styles.textBox}>
                  <Text style={styles.textLogo}>Aquele Abraço, Silo!</Text>
                </View>
              </Image>
            </View>
          </View>
        </AppIntro>
      ) : null
    );
  }
}

export default StackNavigator({
  Home: { screen: HomeScreen },
  Catalogo: { screen: Catalogo},
  Card: { screen: Card}
});