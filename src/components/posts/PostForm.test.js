import React from 'react';
import { shallow } from 'enzyme';
import PostForm from './PostForm';
import { findByDataTest } from '../utils/testUtils';

const setup = (props = {}) => {
    return shallow(<PostForm {...props} />)
}

describe('PostForm render tests', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    });
    it('should render the Post Form component properly', () => {
        const postFormComponent = findByDataTest(wrapper, "post-form-component");
        expect(postFormComponent.length).toBe(1);
    });

    it('should render Title field component properly', () => {
        const postTitle = findByDataTest(wrapper, "post-title");
        expect(postTitle.length).toBe(1);
    });

    it('should render Body field component properly', () => {
        const postBody = findByDataTest(wrapper, "post-body");
        expect(postBody.length).toBe(1);
    });

    it('should render form button properly', () => {
        const buttonSubmit = findByDataTest(wrapper, "button-submit");
        expect(buttonSubmit).toBe(1);
    });
});

describe('PostForm events tests', () => {
    it('should fill title state data when title field is changed', () => {
        
    });

    it('should fill body state data when body field is changed', () => {
        
    });

    it('should create a new post when button submit is clicked', () => {
        
    });
});

describe('PostForm black data tests', () => {
    it('should not submit when the title or body is blank', () => {
        
    });

    it('should show a required message below the title field when the form is submited', () => {
        
    });

    it('should show a required message below the title field when the form is submited', () => {
        
    });
});
