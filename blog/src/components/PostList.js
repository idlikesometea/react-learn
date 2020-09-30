import React from 'react';
import { connect } from 'react-redux';
import { fetchPostAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {

    renderPosts() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            )
        })
    }

    componentDidMount() {
        this.props.fetchPostAndUsers();

    }

    render() {
        return <div className="ui relaxed divided list">{this.renderPosts()}</div>
    }
};

const mapPropsToState = state => {
    return { posts: state.posts };
};

export default connect(mapPropsToState, {
    fetchPostAndUsers
})(PostList);