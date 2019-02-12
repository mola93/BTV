import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';

import {View, StyleSheet,FlatList} from  'react-native';
import PostItem from './PostItem';
class Enter extends Component {
    static navigationOptions = { 
       
        tabBarLabel: 'entertainment',
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

            <FlatList 
              data={this.props.posts} 
              renderItem={({item}) =>
              
        <PostItem post={item}  onPress={this.props.onItemPress}/> } />
              
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


export default Enter;