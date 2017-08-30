import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, ActivityIndicator, FlatList } from 'react-native';
import { Constants } from 'expo';
import {TabNavigator, StackNavigator } from 'react-navigation'; // 1.0.0-beta.11
import Card from './Card'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',    
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
    padding:8
  },
  featured_seal_container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  featured_seal_text: {
    fontSize: 12,
    color: '#FFF'
  },
  tabs:{    
    height: 210
  },
  footer:{
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  footer_icon:{    
    width: 30, 
    height: 30
  },
  tab_canvas:{
    flex:1,
    flexDirection:'column',
    padding: 10,
    backgroundColor: '#FFFFFF'
  },
  title:{
    color: '#7b54d1',
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  card:{
    flex:1,
    padding: 10
  },
  card_image:{ 
    flexDirection:'column',   
    padding: 10,
    width: 100, 
    height: 100,
    borderRadius: 25
  },
  card_title_canvas:{
    flex: 3
  },
  card_title:{
    color:'#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    flex:1
  },
  card_icons:{
    flexDirection:'row',
    justifyContent: 'space-between',
    flex:1
  },
  card_icon:{
    flex:.3,
    width: 20,
    height: 20    
  },
  overlay:{
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    width: 100, 
    height: 100,
    opacity: 0.4,
    backgroundColor: 'black'
  }
});

class InicioScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: []
    }
  }

  static navigationOptions = {
    tabBarLabel: 'Inicio',
  };

  componentWillMount() {
    this.fetchData();    
  }

  fetchData = async () => {
    return fetch('http://demo6045818.mockable.io/app2sales-audio')
      .then((response) => response.json())
      .then((responseJson) => {        
        console.log(responseJson);
        this.setState({
          isLoading:false,
          data: responseJson
        });
      })
      .catch((error) => {
        console.error(error);
      });    
  }

  _renderCard = ({item}) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image_link}} style={styles.card_image}>
        <View style={styles.overlay}/>
        <View style={styles.card_title_canvas}>
          <Text style={styles.card_title} onPress={this._handleCardPress}>{item.nome}</Text>
        </View>
        <View style={styles.card_icons}>
          <Image source={require('../assets/img/headphones.png')} style={styles.card_icon}/>
          <Image source={require('../assets/img/plus.png')} style={styles.card_icon}/>
        </View>
      </Image>
    </View>
  );

  _handleCardPress = () => {
    this.props.navigation.navigate('Card');
    console.log('card pressed');
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    

    return (
      <View style={styles.tab_canvas}>
        <Text style={styles.title}>Mais ouvidos</Text>
        <FlatList
          horizontal= {false}
          numColumns= '3'
          data= {this.state.data}
          keyExtractor= {(x,i)=>x.id}
          renderItem= {this._renderCard}
        />
      </View>
    )
  }
}

class CategoriasScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Categorias',
  };
  render() {
    return (
      <View style={{padding: 10, backgroundColor: '#FFF'}}>
        <FlatList
          data= {[{key: 'Vida Cristã'}, {key: 'Evangelismo'}, {key: 'Fé'}, {key: 'Espírito Santo'}, {key: 'Liderança'}, {key: 'Oração'}, {key: 'Relacionamentos'}]}
          renderItem= {({item}) => <Text style={styles.title}>{item.key}</Text>}
        />
      </View>
    )
  }
}

export default class Catalogo extends Component {
  static navigationOptions = {
    title: 'Catalogo',
    header: null
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
        
        <View style={styles.tabs}>
          <MainScreenNavigator></MainScreenNavigator>
        </View>
        
        <View style={styles.footer}>
          <Image source={require('../assets/img/compass-outline.png')} style={styles.footer_icon}/>
          <Image source={require('../assets/img/library-books.png')} style={styles.footer_icon}/>
          <Image source={require('../assets/img/bell-outline.png')} style={styles.footer_icon}/>
          <Image source={require('../assets/img/account-outline.png')} style={styles.footer_icon}/>
        </View>
      </ScrollView>
    );
  }
}

const AppNavigator = StackNavigator({
  Catalogo: { screen: Catalogo},
  Card: { screen: Card}
});

const MainScreenNavigator = TabNavigator({
  Inicio: { screen: InicioScreen },
  Categorias: { screen: CategoriasScreen },
}, {
  tabBarOptions: {
    swipeEnabled: true,
    activeTintColor: '#7b54d1',
    inactiveTintColor:'#888',
    style:{
      backgroundColor:'#FFF',
      borderColor:'#CCC',
      borderWidth: 1
    },
    indicatorStyle : {
      borderColor:'#7b54d1',
      borderWidth: 3
    }
  },
});