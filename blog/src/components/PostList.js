import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {

    renderPosts() {
        return this.props.posts.map((post, index) => {
            return (
                <div key={index}>
                    <h2>{post.title}</h2>
                    {post.body}
                </div>
            )
        })
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return <div>{this.renderPosts()}</div>
    }
};

const mapPropsToState = state => {
    return { posts: state.posts };
};

export default connect(mapPropsToState, {
    fetchPosts
})(PostList);