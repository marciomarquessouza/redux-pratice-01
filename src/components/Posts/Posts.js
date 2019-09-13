import React, { Component } from 'react';

class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(data => data.json())
        .then(posts => this.setState({ posts }));
    }

    render() {
        const posts = this.state.posts;
        const postContent = posts.length > 0 ? this.state.posts.map((post, index) => (
            <div key = { index } className="card box-margin" data-test="post-content">
                <div className="card-body">
                    <p className="h6 card-title">{ post.title.toUpperCase() }</p>
                    <span className="card-text">{ post.body.charAt(0).toUpperCase() + post.body.slice(1) }</span>
                </div>
            </div>
        )) : (<span data-test="no-posts">Posts not available</span>);
        return (
            <div data-test="posts-component">
                <h4>Posts</h4>
                { postContent }
            </div>
        );
    }
}

export default Posts;
