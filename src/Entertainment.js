import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';

import {View, StyleSheet,FlatList, Text} from  'react-native';
import PostItem from './PostItem';
class Entertainment extends Component {
    
    static navigationOptions = { 
       
        tabBarLabel: 'Entertainment',
        tabBarIcon: ({tintColor}) => (
          <Icon 
          name={'user'}
          size={50}
          style={{ color:tintColor}} />
        )
   
        
  
}
    render(){
        return(
          

            <View style={styles.list}>
<Text>entertainment news......</Text>
              
            </View>
         );
    }
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#eee',
        width: '100%',
        paddingTop: 50,
    },
});


export default Entertainment;