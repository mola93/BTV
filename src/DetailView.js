import React, {Component} from 'react';

import {View, Text, StyleSheet,  Animated,
    Dimensions,PanResponder, Button,TouchableOpacity,
    Linking,ScrollView, WebView, Image, TouchableWithoutFeedback
} from  'react-native';
import ajax from './ajax';
import HTMLView from 'react-native-htmlview';
import {connect } from 'react-redux';  
import * as actions from './actions';

import moment from 'moment';

class DetailView extends Component {

 
    
    render(){
      const date = moment(this.props.post.date).format('LL')


        return(
            <View style={styles.post}>
            <TouchableOpacity >
              <Text onPress={this.props.noneSelectedPost} style={styles.backLink}>Go Back</Text>
            </TouchableOpacity>
            <Image
              source={{ uri:this.props.post.thumbnail_images
                ['medium'].url  }}
              style={[{ left: this.imageXPos }, styles.image]}
            />
            <View>
              <Text style={styles.title}>{this.props.post.title}</Text> 
            </View>
            <ScrollView style={styles.detail}>
              <View style={styles.footer}>
                <View style={styles.info}>
                  <Text style={styles.cause}>{this.props.post.author.name}</Text>
               </View>
               
                  <View style={styles.user}>
                    
                    <Text>{date}</Text>
                  </View>
             
              </View>
           

              <HTMLView value={this.props.post.content} 
              style={styles.description} />
              
                     
           
            </ScrollView>
          </View>

        );
    }
}


const styles = StyleSheet.create({
    post: {
      marginBottom: 10,
      backgroundColor: 'white',
      paddingTop:50,
    },
    backLink: {
      marginBottom: 5,
      color: '#22f',
      marginLeft: 10,
      paddingTop:50
    },
    image: {
      width: '100%',
      height: 150,
      backgroundColor: '#ccc',
      paddingTop:80
    },
    title: {
      fontSize: 16,
      padding: 10,
      fontWeight: 'bold',
      backgroundColor: 'rgba(237, 149, 45, 0.4)',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 15,
    },
    info: {
      alignItems: 'center',
    },
    user: {
      alignItems: 'center',
    },
    cause: {
      marginVertical: 10,
    },
    price: {
      fontWeight: 'bold',
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 30,
    },
    description: {
      borderColor: '#ddd',
      borderWidth: 1,
      borderStyle: 'dotted',
      margin: 0,
      padding: 0,
      backgroundColor:'white',
    },
  });
  const mapStateToProps = state => {
    return { 
        post: state.postSelected,
       
     };
  };

  export default connect(mapStateToProps, actions)(DetailView)
