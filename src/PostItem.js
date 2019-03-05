import React, {Component} from 'react';
import * as actions from './actions';
import {connect } from 'react-redux';  
import moment from 'moment';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity ,Image} from  'react-native';

const PostItem =(props) =>{

  const date = moment(props.posts.date).format('LL')


    
        return(
            <TouchableOpacity style={styles.post}  onPress ={() => props.selectPost(props.posts)}>

       
             
            <Image source={{ uri:props.posts.thumbnail_images
        ['medium'].url    
        }} 
            style={styles.image}
            />
             <View style={styles.info}>
                  <Text>{props.posts.title}</Text>

                  <View style={styles.footer}>
                  <Text>{date}</Text>

                  </View>
         </View>
        </TouchableOpacity>

        );
    }
 


const styles = StyleSheet.create({
    post: {
      marginHorizontal: 12,
      marginTop: 22,
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
   

  export default connect(null, actions)(PostItem)