import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createStream } from '../../actions';


class StreamCreate extends React.Component {

    renderInput = ({label, input, meta}) => {
        const className = meta.touched && meta.error ? 'error' : '';
        return (
            <div className={`field ${className}`}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {meta.touched && meta.error ? <div className="ui error message">{meta.error}</div> : null}
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" label="Title" component={this.renderInput} />
                <Field name="description" label="Description" component={this.renderInput} />

                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'Title is required'
    }

    if (!formValues.description) {
        errors.description = 'Description is required';
    }

    return errors;
};

const formWrap = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);

export default connect(null, {
    createStream
})(formWrap);