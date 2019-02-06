import React, {Component} from 'react';

import {View, Text, StyleSheet, ScrollView, TouchableOpacity ,Image} from  'react-native';

class PostItem extends Component {

    handlePress = () => {
        this.props.onPress(this.props.post.id);
      };
    render(){
        return(
            <TouchableOpacity style={styles.post} onPress={this.handlePress}>

       
             
            <Image source={{ uri:this.props.post.thumbnail_images
        ['medium'].url    
        }} 
            style={styles.image}
            />
             <View style={styles.info}>
                  <Text>{this.props.post.title}</Text>

                  <View style={styles.footer}>
                  <Text>{this.props.post.date}</Text>

                  </View>
         </View>
        </TouchableOpacity>

        );
    }
}


const styles = StyleSheet.create({
    post: {
      marginHorizontal: 12,
      marginTop: 12,
    },
    image: {
      width: '100%',
      height: 150,
      backgroundColor: '#ccc',
    },
    info: {
      padding: 10,
      backgroundColor: '#fff',
      borderColor: '#bbb',
      borderWidth: 1,
      borderTopWidth: 0,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    footer: {
      flexDirection: 'row',
    },
  
  });
   

export default PostItem;