/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import {Provider} from 'react-redux';
import { createStore,compose, applyMiddleware} from 'redux';
import posts from './src/reducers/PostsReducer';
import thunk from 'redux-thunk';
import axios from 'axios';

import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import ajax  from './src/ajax';
import PostsList from './src/PostsList';
import PostDetail from './src/PostDetail';
import AppContainer from './src/Navigation';


console.disableYellowBox = true;
console.reportErrorsAsExceptions = false;
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  posts,
  composeEnhancer(applyMiddleware(thunk)),
);

const apiHost = 'https://www.blocktvgambia.com';


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
      return    ( <AppContainer   />

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
 
 