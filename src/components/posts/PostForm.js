import React, { Component } from 'react'
import { createPost } from '../../actions/postAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        event.preventDefault();
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.createPost({ ...this.state});
    }

    render() {
        return (
            <div className="box-margin">
                <h4>New Post</h4>
                <form 
                    data-test="post-form-component"
                    onSubmit={ this.handleSubmit }
                >
                    <div className="form-group">
                        <label>Title</label>
                        <input 
                            className="form-control"
                            type="text"
                            onChange = { this.handleChange }
                            value={ this.state.title}
                            name = "title"
                        />
                        <small className="form-text text-muted">Title is required</small>
                    </div>
                    <div className="form-group">
                        <label>Text</label>
                        <textarea
                            className="form-control"
                            onChange={ this.handleChange }
                            value={this.state.body}
                            name = "body"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm);
