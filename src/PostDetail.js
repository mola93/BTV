import React, {Component} from 'react';

import {View, Text, StyleSheet,  Animated,
    Dimensions,PanResponder, Button,TouchableOpacity,
    Linking,ScrollView, WebView,
} from  'react-native';
import ajax from './ajax';
import HTMLView from 'react-native-htmlview';
 

class PostDetail extends Component {
    imageXPos = new Animated.Value(0);
    imagePanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gs) => {
        this.imageXPos.setValue(gs.dx);
      },
      onPanResponderRelease: (evt, gs) => {
        this.width = Dimensions.get('window').width;
        if (Math.abs(gs.dx) > this.width * 0.4) {
          const direction = Math.sign(gs.dx);
          // -1 for left, 1 for right
          Animated.timing(this.imageXPos, {
            toValue: direction * this.width,
            duration: 250,
          }).start(() => this.handleSwipe(-1 * direction));
        } else {
          Animated.spring(this.imageXPos, {
            toValue: 0
          }).start();
        }
      }
    });

 
      async componentDidMount() {
        const fullPost = await ajax.fetchPostDetail(this.state.post.id);
        this.setState({
          post: fullPost,
          content: fullPost.content
        });
      }
      handleSwipe = (indexDirection) => {
        if (!this.state.deal.media[this.state.imageIndex + indexDirection]) {
          Animated.spring(this.imageXPos, {
            toValue: 0
          }).start();
          return;
        }
        this.setState((prevState) => ({
          imageIndex: prevState.imageIndex + indexDirection
        }), () => {
          // Next image animation
          this.imageXPos.setValue(indexDirection * this.width);
          Animated.spring(this.imageXPos, {
            toValue: 0
          }).start();
        });
      };
      state = {
        post: this.props.initialPostData,
        imageIndex: 0,
       
      };
    render(){
        const { post } = this.state;


        return(
            <View style={styles.post}>
            <TouchableOpacity onPress={this.props.onBack}>
              <Text style={styles.backLink}>Go Back</Text>
            </TouchableOpacity>
            <Animated.Image
              {...this.imagePanResponder.panHandlers}
              source={{ uri:post.thumbnail_images
                ['medium'].url  }}
              style={[{ left: this.imageXPos }, styles.image]}
            />
            <View>
              <Text style={styles.title}>{post.title}</Text> 
            </View>
            <ScrollView style={styles.detail}>
              <View style={styles.footer}>
                <View style={styles.info}>
                  <Text style={styles.cause}>{post.author.name}</Text>
               </View>
               
                  <View style={styles.user}>
                    
                    <Text>{post.date}</Text>
                  </View>
             
              </View>
           

              <HTMLView value={post.content} 
              style={styles.description} />
              
                     
           
            </ScrollView>
          </View>

        );
    }
}


   


const styles = StyleSheet.create({
    post: {
      marginBottom: 10,
      backgroundColor: 'white'
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
      padding: 10,
      backgroundColor:'white',
    },
  });

export default PostDetail;