import React, { Component } from 'react';
import { fetchPosts } from '../../actions/postAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.post) {
            this.props.posts.unshift(nextProps.post);
        }
    }

    render() {
        const posts = this.props.posts;
        const postContent = posts.length > 0 ? posts.map((post) => (
            <div key = { post.id } className="card box-margin" data-test="post-content">
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

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        body: PropTypes.string
    }))
}

const matchStateToProps = state => ({
    posts: state.post.items,
    post: state.post.item
});

export default connect(matchStateToProps, { fetchPosts })(Posts);
