export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const LOAD_POSTS = 'LOAD_POSTS';

export function addPost(post) {
    return {
        type: ADD_POST,
        post: post
    }
}

export function removePost(post) {
    return {
        type: REMOVE_POST,
        post: post
    }
}

export function loadPosts(posts) {
    return {
        type: LOAD_POSTS,
        posts: posts
    }
}