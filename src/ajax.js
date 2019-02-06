import { constants } from "./constants/constants";

const apiHost = 'https://www.blocktvgambia.com'

export default {

  async fetchInitialPosts(){
        try {
            const response = await fetch(apiHost + '/api/get_posts?count=20');
            const responseJson = await response.json();
              return responseJson.posts;

        }
        catch (error){
            console.error(error);

        }
    },


async fetchPostDetail(postId){
    try {
        const response = await fetch(apiHost + 'api/get_post/?id=' + postId);
        const responseJson = await response.json();
          return responseJson.posts;

    }
    catch (error){
        console.error(error);

    }
}
};