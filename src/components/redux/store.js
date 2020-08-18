export let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'It`s my first post', likesCount: 3},
            {id: 2, message: 'The day was good', likesCount: 14},
            {id: 3, message: 'Thanks React!!!', likesCount: 1}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Vovan'},
            {id: 2, name: 'Dima'},
            {id: 3, name: 'Samurai'},
            {id: 4, name: 'Maria'},
            {id: 5, name: 'Mark'},
            {id: 6, name: 'Sophia'},
            {id: 7, name: 'Lily'}
        ],
        messages: [
            {id: 1, message: 'How are you?'},
            {id: 2, message: 'I like React and u??'},
            {id: 3, message: 'Samurai yoy'},
            {id: 4, message: 'My life my rules'}
        ]
    }
}

export let addPost = (postText) => {
    let newPost = {
        id: Date.now(),
        message: postText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
}

