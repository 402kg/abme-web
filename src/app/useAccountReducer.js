import { useReducer } from 'react'

const FETCH_ACCOUNT_START = 'FETCH_ACCOUNT_START'
const FETCH_ACCOUNT_ERROR = 'FETCH_ACCOUNT_ERROR'
const FETCH_ACCOUNT_SUCCESS = 'FETCH_ACCOUNT_SUCCESS'

export const initialState = {
    email: {
        confirmed: false,
        value: '',
    },
    icon: '',
    links: [],
    name: '',
    projects: [],
    sessions: [],
    skills: [],
    username: '',
    uuid: '',

    error: null,

    isDone: false,
    isFetching: false,
    isLoggedIn: false,
}

function reducer(state, { type, payload }) {
    switch (type) {
        case FETCH_ACCOUNT_ERROR: {
            return {
                ...state,
                error: payload,
                isDone: true,
                isFetching: false,
                isLoggedIn: false,
            }
        }

        case FETCH_ACCOUNT_START: {
            return {
                ...state,
                error: null,
                isDone: false,
                isFetching: true,
                isLoggedIn: false,
            }
        }

        case FETCH_ACCOUNT_SUCCESS: {
            return {
                ...state,
                ...payload,
                error: null,
                isDone: true,
                isFetching: false,
                isLoggedIn: true,
            }
        }

        default:
            return state
    }
}

export default function () {
    const [state, dispatch] = useReducer(reducer, initialState, (store) => store)

    return [state, {
        error: (payload) => dispatch({ payload, type: FETCH_ACCOUNT_ERROR }),
        start: () => dispatch({ type: FETCH_ACCOUNT_START }),
        success: (payload) => dispatch({ payload, type: FETCH_ACCOUNT_SUCCESS }),
    }]
}
