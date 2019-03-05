/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import { createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator, DrawerItems  } from'react-navigation';
import {Provider} from 'react-redux';
import { createStore,compose, applyMiddleware} from 'redux';
import posts from './src/reducers/PostsReducer';
import thunk from 'redux-thunk';
import axios from 'axios';
import {About} from './src/About';

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, SafeAreaView} from 'react-native';
import ajax  from './src/ajax';
import PostsList from './src/PostsList';
import PostDetail from './src/PostDetail';
import AppContainer from './src/Navigation';
import { ScrollView } from 'react-native-gesture-handler';


console.disableYellowBox = true;
console.reportErrorsAsExceptions = false;
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  posts,
  composeEnhancer(applyMiddleware(thunk)),
);

const apiHost = 'https://www.blocktvgambia.com';

const CustomDrawerComponent =(props) => (
  <SafeAreaView style={{flex:1}}>
    <View style={{height: 150, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
       <Image source={require('./src/screenn.jpeg') } style={{height:150, width:180, 
      borderRadius:60
      }}/>
    </View>
    <ScrollView>
     
     <DrawerItems {...props}/>
     

     
    </ScrollView>

  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  Home: PostsList,
  About: About
},
{
  contentComponent: CustomDrawerComponent
}
)
const AppRoot = createAppContainer(AppDrawerNavigator);
 export default class App extends Component {
   
 state = {
      data: false,
    };
 

   componentDidMount(){
     
      return axios.get(apiHost + "/api/get_posts?count=20")
      .then((response) => {
       if(response !== null){
        this.setState({
          data:true
        })
       }
      })
    .catch((err) => {
       console.log(err)
     });
     
     
   };
   renderInitialView(){
    switch (this.state.data == true ) {
      case true:
      return    ( <AppRoot   />

      )
                
         

     default:
     return   <ActivityIndicator size="large" color="#0000ff" />;

    }
  }
 
  render() {
    
    
    return (        
          <Provider store={store}>


   { this.renderInitialView()}
       
      </Provider>
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
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
 
});
 
 