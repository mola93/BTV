/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ajax  from './src/ajax';
import PostsList from './src/PostsList';


export default class App extends Component {
   
  state = {
    posts: []
  }

async componentDidMount(){

  const posts = await ajax.fetchInitialPosts();
  this.setState({ posts });

  console.log(posts);

}

  render() {
    return (
      <View style={styles.container}>
      {
        this.state.posts.length > 0 ? (
          <PostsList posts={this.state.posts}/>

        ) : (
          <Text>loading....</Text>
        )


      }
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
