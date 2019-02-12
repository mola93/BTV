import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';

import {View, StyleSheet,FlatList, Text} from  'react-native';
import PostItem from './PostItem';
class Politics extends Component {
    
    static navigationOptions = { 
       
        tabBarLabel: 'Politics',
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
<Text>politics news.......</Text>
              
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


export default Politics;