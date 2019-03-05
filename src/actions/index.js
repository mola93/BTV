 const apiHost = 'https://www.blocktvgambia.com';
import axios from 'axios';



 
export const selectPost  = (postId) => {

    return {
        type: 'SELECTED_POST',
        payload: postId,

    }
}
export const selectedCategory  = (categoryId) => {

    return {
        type: 'SELECTED_CATEGORY',
        payload: categoryId,

    }
}


 
export const noneSelectedPost  = () => {

    return {
        type: 'NONE_SELECTED_POST',
        

    }
}
 
export const loadInitialPosts = () => { 
    return function(dispatch){
       return axios.get(apiHost + "/api/get_posts?count=80")
       .then((response) => {
        dispatch({ type: 'INITIAL_POSTS_FETCH', payload: response.data.posts,
                 
    });
      }).catch((err) => {
        dispatch({ type: '', payload: err});
      });
      
      };
    };
    export const loadInitialCategories = () => { 
        return function(dispatch){
           return axios.get(apiHost + "/api/get_category_index/")
           .then((response) => {
            dispatch({ type: 'INITIAL_CATEGORIES_FETCH', payload: response.data.categories,
                     
        });
          }).catch((err) => {
            dispatch({ type: '', payload: err});
          });
          
          };
        };
    export const politicsPosts = () => { 
        return function(dispatch){
           return axios.get(apiHost + "/api/get_category_posts/?id=52")
           .then((response) => {
            dispatch({ type: 'POLITICS_POSTS_FETCH', payload: response.data.posts});
          }).catch((err) => {
            dispatch({ type: '', payload: err});
          });
          
          };
        };

        export const sportsPosts = () => { 
            return function(dispatch){
               return axios.get(apiHost + "/api/get_category_posts/?id=54")
               .then((response) => {
                dispatch({ type: 'SPORTS_POSTS_FETCH', payload: response.data.posts});
              }).catch((err) => {
                dispatch({ type: '', payload: err});
              });
              
              };
            };

            export const entertainmentPosts = () => { 
                return function(dispatch){
                   return axios.get(apiHost + "/api/get_category_posts/?id=33")
                   .then((response) => {
                    dispatch({ type: 'ENTERTAINMENT_POSTS_FETCH', payload: response.data.posts});
                  }).catch((err) => {
                    dispatch({ type: '', payload: err});
                  });
                  
                  };
                };
 
 
 