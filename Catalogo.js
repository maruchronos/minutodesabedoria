import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { Constants } from 'expo';
import {TabNavigator } from 'react-navigation'; // 1.0.0-beta.11

class InicioScreen extends React.Component {
  render() {
    return (
      <ScrollView style={{
        flex:1
      }}>
        <Text style={{}}>Mais ouvidos</Text>
        <View style={{}}>
          <View style={{}}>
            <Image source={{ uri: 'https://www.shadesofgrace.org/wp-content/uploads/Desperate-Prayer.jpg' }} style={{}}>
              <View style={{}}>
                <Text style={{}}>O Poder da Oração</Text>
              </View>
              <View style={{}}>
                <Image source={{ uri: 'https://www.shadesofgrace.org/wp-content/uploads/Desperate-Prayer.jpg' }}  style={{}}/>
                <Image source={{ uri: 'https://www.shadesofgrace.org/wp-content/uploads/Desperate-Prayer.jpg' }} style={{}}/>
              </View>
            </Image>
          </View>  
        </View>
      </ScrollView>
      )
  }
}

class CategoriasScreen extends React.Component {
  render() {
    return <Text>List of all contacts</Text>
  }
}

const MainScreenNavigator = TabNavigator({
  Inicio: { screen: InicioScreen },
  Categorias: { screen: CategoriasScreen },
}, {
  tabBarOptions: {
    activeTintColor: '#7b54d1',
    inactiveTintColor:'#888',
    style:{
      backgroundColor:'#FFF'
    },
    indicatorStyle : {
      backgroundColor:'#7b54d1'
    }
  },
});

export default class App extends Component {
  static navigationOptions = {
    tabBarLabel: 'Welcome',
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.header_text}>Explorar</Text>
        </View>
        
        <View style={styles.featured}>
          <Image source={{ uri: 'https://www.shadesofgrace.org/wp-content/uploads/Desperate-Prayer.jpg' }} style={styles.featured_image}>
            <View style={styles.featured_textbox}>
              <Text style={styles.featured_title}>O Poder da Oração</Text>
              <Text style={styles.featured_abstract}>Pensamos a maior parte de nossas vidas no passado e imaginamos...</Text>
            </View>
            <View style={styles.featured_seal_container}>
              <View style={styles.featured_seal}>
                <Text style={styles.featured_seal_text}>TÍTULO INDICADO DO DIA</Text>
              </View>
            </View>
          </Image>
        </View>
        
        <View style={styles.header_search}>
          <Image source={{ uri: 'https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-128.png' }} style={styles.featured_image}/>
        </View>
        <MainScreenNavigator></MainScreenNavigator>
      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    //alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  header: {
    backgroundColor: '#7b54d1',
    flex: 1,
    padding:30
  },
  header_text: {
    fontSize: 28,
    color: '#FFF',
    fontWeight: '100'
  },
  header_search:{
    borderRadius: 50,
    backgroundColor: '#FFFFFFCC',
    position:'absolute',
    top: 65,
    right:15
  },
  featured: {
    backgroundColor: 'transparent'
  },
  featured_image:{
    flexDirection: 'row',
    padding:30
  },
  featured_textbox: {
    flexDirection: 'column',
    flex:3
  },
  featured_title: {
    fontSize: 34,
    color: '#FFF',
    fontWeight:'bold',
    flex: 2,
  },
  featured_abstract:{
    fontSize: 16,
    color: '#FFF',
    flex:2
  },
  featured_seal: {
    borderWidth:1,
    borderColor:'#FFF',
    padding:10
  },
  featured_seal_container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  featured_seal_text: {
    fontSize: 10,
    color: '#FFF'
  }
});
