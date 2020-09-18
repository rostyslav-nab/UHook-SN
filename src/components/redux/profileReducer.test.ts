import {actions, profileReducer} from "./profileReducer"

let state = {
    posts: [
        {id: 1, message: 'It`s my first post', likesCount: 3},
        {id: 2, message: 'The day was good', likesCount: 14},
        {id: 3, message: 'Thanks React!!!', likesCount: 1}
    ],
    profile: null,
    status: '',
    newPostText: ''
}

it('length of posts should be incremented', () => {
    let action = actions.addPostActionCreator('React/Redux')

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(4)
});

it('message of new posts should be added', () => {
    let action = actions.addPostActionCreator('React/Redux')

    let newState = profileReducer(state, action)

    expect(newState.posts[3].message).toBe('React/Redux')
});

it('after delete length of message should be decrement', () => {
    let action = actions.deletePost(1)

    let newState = profileReducer(state, action)

   expect(newState.posts.length).toBe(2)
});

