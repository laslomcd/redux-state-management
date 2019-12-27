import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createPost } from '../../redux/post/post.actions';

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        }
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit = (event) => {
        event.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.createPost(post);
    }


    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="body">Body</label>
                        <textarea
                            name="body"
                            cols="30"
                            rows="10"
                            className="form-control"
                            value={this.state.body}
                            onChange={this.onChange}
                        ></textarea>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    createPost: post => dispatch(createPost(post))
});

export default connect(null, mapDispatchToProps)(PostForm);
