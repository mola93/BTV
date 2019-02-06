/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import ajax  from './src/ajax';
import PostsList from './src/PostsList';
import PostDetail from './src/PostDetail';


export default class App extends Component {
   
  state = {
    posts: [],
    currentPostId: null
  }

async componentDidMount(){

  const posts = await ajax.fetchInitialPosts();
  this.setState({ posts });

  console.log(posts);

}

setCurrentPost = (postId) => {
    this.setState({
    currentPostId: postId
  });

};
unSetCurrentPost = () => {
  this.setState({
  currentPostId: null
});

};

currentPost = () => {

  return this.state.posts.find(
    (post) => post.id === this.state.currentPostId
  )
}
  render() {

    if(this.state.currentPostId){
       return (<PostDetail initialPostData={this.currentPost()}
                           onBack={this.unSetCurrentPost}
       />);
    }
    if(this.state.posts.length > 0 ){
      return (
      <PostsList posts={this.state.posts} onItemPress={this.setCurrentPost}/>
      );

    }
    return (
      <View style={styles.container}>
        <Text>loading....</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
 
});
