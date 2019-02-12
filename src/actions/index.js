 const apiHost = 'https://www.blocktvgambia.com';
import axios from 'axios';



 
export const selectPost  = (postId) => {

    return {
        type: 'SELECTED_POST',
        payload: postId,

    }
}

 
export const noneSelectedPost  = () => {

    return {
        type: 'NONE_SELECTED_POST',
        

    }
}

 

export const loadInitialPosts = () => { 
    return function(dispatch){
       return axios.get(apiHost + "/api/get_posts?count=20")
       .then((response) => {
        dispatch({ type: 'INITIAL_POSTS_FETCH', payload: response.data.posts});
      }).catch((err) => {
        dispatch({ type: '', payload: err});
      });
      
      };
    };
 
 
 