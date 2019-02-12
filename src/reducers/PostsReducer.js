
const initialState  = {
    posts:[],
    postDetailView: false,
    postSelected: null,
   

};

export default ( state = initialState, action) => {
    switch(action.type){
     
      case 'INITIAL_POSTS_FETCH':
      return {
          ...state,
          posts: action.payload,
      }

     
          case 'SELECTED_POST':
          return {
            ...state,
            postDetailView: true,
            postSelected: action.payload
          }
          
          case 'NONE_SELECTED_POST':
          return {
            ...state,
            postDetailView: false,
            postSelected: null,
          }
      
        
        default:
        return state;
    }
}