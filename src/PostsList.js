import React, {Component} from 'react';
import  { loadInitialPosts, loadInitialCategories} from './actions';
import {connect } from 'react-redux';  
import _ from 'lodash';

import {View, StyleSheet,FlatList} from  'react-native';
import PostItem from './PostItem';
import PostDetail from './PostDetail';
import { Header, Left, Right , Body, Title, Icon} from 'native-base';

class PostsList extends Component {

componentWillMount() {
    this.props.loadInitialPosts();
    this.props.loadInitialCategories();
    }

    renderItem({item}) {
        return <PostItem posts = { item } />;
      }
      renderInitialView(){
        if (this.props.postDetailView === true){
            return  (
              
              <PostDetail />
            );
          
          }  else {
         
            return(

                <FlatList 
                data={this.props.posts} 
                renderItem={this.renderItem} />
            )
          
    
          }
      }

    render(){
        return(
          
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         
                  <View style={styles.list}>
                  <Header style={{ backgroundColor: '#a50000' , marginTop:20}}>
                 <Left>
                    <Icon name="menu" onPress={()=> this.props.navigation.openDrawer()} />
                 </Left>
                 <Body>
            <Title style={{ alignItems: 'center' , marginRight: 100, color:'white'}}>Block TV</Title>
          </Body>
              </Header >
          {this.renderInitialView()}
          </View>
            </View>
      
         );
    }
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#eee',
        width: '100%',
        paddingTop: 40,
    },
});
 

const mapStateToProps = state => {
 
    const posts = _.map(state.posts, (val, id) => {
      return { ...val, id};
    });
  
    return { 
             posts: posts,
             postDetailView: state.postDetailView,
          };
  }

export default connect(mapStateToProps, { loadInitialPosts, loadInitialCategories })(PostsList)