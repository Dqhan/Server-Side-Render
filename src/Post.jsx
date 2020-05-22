// Post.jsx
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
        };
    }
    componentDidMount() {
        setTimeout(() => this.setState({
            post: {
                title: 'This is title.',
                content: 'This is content.',
                author: '大板栗.',
                url: 'https://github.com/justclear',
            },
        }), 2000);
    }
    render() {
        const post = this.state.post;
        return (
            <div>
                <h1>Page Post</h1>
                <Link to="/">Link to Home</Link>
                <h2>{ post.title }</h2>
                <p>By: { post.by }</p>
                <p>Link: <a href={post.url} target="_blank">{post.url}</a></p>
            </div>
        );
    }
};