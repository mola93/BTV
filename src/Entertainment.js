import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import  { entertainmentPosts} from './actions';
import {connect } from 'react-redux';  
import _ from 'lodash';

import {View, StyleSheet,FlatList} from  'react-native';
import PostItem from './PostItem';
import PostDetail from './PostDetail';

class Entertainment extends Component {
    static navigationOptions = { 
       
        tabBarLabel: 'Entertainment',
        tabBarIcon: ({tintColor}) => (
          <Icon 
          name={'user'}
          size={50}
          style={{ color:tintColor}} />
        )
   

}
componentWillMount() {
    this.props.entertainmentPosts();
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
        paddingTop: 50,
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

export default connect(mapStateToProps, { entertainmentPosts })(Entertainment)