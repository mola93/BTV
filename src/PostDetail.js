import React, {Component} from 'react';

import {View, Text, StyleSheet,  Animated,
    Dimensions,PanResponder, Button,TouchableOpacity,
    Linking,ScrollView, WebView,
} from  'react-native';
import ajax from './ajax';
import HTMLView from 'react-native-htmlview';
import DetailView from './DetailView';
import {connect } from 'react-redux';  
import * as actions from './actions';


class PostDetail extends Component {


      renderDetails() {
        return ( <DetailView/>)
      }
    render(){
 

        return(
          <View>
          {this.renderDetails()}
</View>
        );
    }
}


 

  export default connect(null, actions)(PostDetail)
