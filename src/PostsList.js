import React, {Component} from 'react';

import {View, StyleSheet,FlatList} from  'react-native';
import PostItem from './PostItem';
class PostsList extends Component {

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


export default PostsList;