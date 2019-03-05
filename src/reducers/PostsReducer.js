
const initialState  = {
    posts:[],
    categories:[],
    selectedCategoryId:null,
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
      case 'INITIAL_CATEGORIES_FETCH':
      return {
          ...state,
          categories: action.payload,
      }
      case 'POLITICS_POSTS_FETCH':
      return {
          ...state,
          posts: action.payload,
      }
      case 'SPORTS_POSTS_FETCH':
      return {
          ...state,
          posts: action.payload,
      }
      case 'ENTERTAINMENT_POSTS_FETCH':
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
          case 'SELECTED_CATEGORY':
          return {
            ...state,
            selectedCategoryId: action.payload
            
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