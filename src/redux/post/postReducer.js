import PostActionTypes from './post.types';

const INITIAL_STATE = {
    items: [],
    item: {
        title: '',
        body: ''
    }
}

const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PostActionTypes.FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case PostActionTypes.NEW_POST:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}

export default postReducer;