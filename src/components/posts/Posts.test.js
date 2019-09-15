import { shallow } from 'enzyme';
import Posts from './Posts';
import React from 'react';
import { findByDataTest } from '../utils/testUtils';

const initialState = {
    posts: [
        {
            id: "001",
            title: "mock01",
            body: "mock01_body"
        },
        {
            id: "002",
            title: "mock02",
            body: "mock02_body"
        },
        {
            id: "003",
            title: "mock03",
            body: "mock03_body"
        }
    ]};

const setup = (props = {}) => {
    return shallow(<Posts {...props} />);
}

describe('Posts basic tests', () => {

    it('should render posts component properly.', () => {
        const wrapper = setup();
        const postsComponent = findByDataTest(wrapper, 'posts-component');
        expect(postsComponent.length).toBe(1);
    });

    it('should render all posts received', () => {
        const wrapper = setup(initialState);
        const postContent = findByDataTest(wrapper, "post-content");
        expect(postContent.length).toBe(initialState.posts.length);
    });

    it('should not show posts component when not exists posts available', () => {
        const wrapper = setup();
        const postContent = findByDataTest(wrapper, "post-content");
        expect(postContent.length).toBe(0);
    });

    it('should shows a specific message when not exists posts available', () => {
        const wrapper = setup();
        const noPostsAvailable = findByDataTest(wrapper, "no-posts");
        expect(noPostsAvailable.text().length).not.toBe(0);
    });
});