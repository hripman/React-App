import { ADD_POST, REMOVE_POST, LOAD_POSTS } from '../actions/post'

export default function (state = [], action) {
    switch(action.type) {
        case ADD_POST:
            return {
                posts: [
                    ...state.posts,
                    action.post
                ]
            }
        case REMOVE_POST:
            return {
                posts: state.posts.filter((p) => p.id !== action.post.id)
            }
        case LOAD_POSTS:
            return {
                posts: action.posts
            }
        default:
            return state;    
    }
}