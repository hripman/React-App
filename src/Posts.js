import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost, removePost, loadPosts } from './actions/post';

import List from './List';
import PostsService from './services/posts';
import CreateList from './CreateList';

class Posts extends Component {
    constructor(props) {
        super(props);

        PostsService.get()
        .then((posts) => this.props.loadPosts(posts));
    }

    onDataSumbit = (data) => {
        PostsService.add(data)
        .then((post) => this.props.addPost(post));
    }

    removePost = (id) => {
        PostsService.delete(id)
            .then((post) => this.props.removePost(post))
    }

    render() {
        if(!this.props.posts) {
            return <div>Loading </div>
        }
       return (<div>
            <List posts={this.props.posts} removePost={this.removePost}/>
            <CreateList onDataSubmit={this.onDataSumbit}/>
       </div>
       )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addPost: (post) => dispatch(addPost(post)),
        removePost: (post) => dispatch(removePost(post)),
        loadPosts: (posts) => dispatch(loadPosts(posts))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);

