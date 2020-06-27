import PropTypes from 'prop-types'
import { useReducer } from 'react'

const TOUCH_EMAIL_ERROR = 'TOUCH_EMAIL_ERROR'
const TOUCH_EMAIL_START = 'TOUCH_EMAIL_START'
const TOUCH_EMAIL_SUCCESS = 'TOUCH_EMAIL_SUCCESS'

const SET_EMAIL = 'SET_EMAIL'
const SET_NAME = 'SET_NAME'
const SET_PASSWORD = 'SET_PASSWORD'
const SET_USERNAME = 'SET_USERNAME'

export const initialState = {
    email: '',
    name: '',
    password: '',
    username: '',

    isFetching: false,
    isTouching: false,

    error: null,
}

function reducer(state, { type, payload }) {
    switch (type) {
        case TOUCH_EMAIL_ERROR: {
            return {
                ...state,

                isTouching: false,
                error: payload,
            }
        }

        case TOUCH_EMAIL_START: {
            return {
                ...state,

                isTouching: true,
                error: null,
            }
        }

        case TOUCH_EMAIL_SUCCESS: {
            return {
                ...state,
                isTouching: false,
            }
        }

        case SET_EMAIL: {
            return {
                ...state,
                email: payload,
            }
        }

        case SET_NAME: {
            return {
                ...state,
                name: payload,
            }
        }

        case SET_PASSWORD: {
            return {
                ...state,
                password: payload,
            }
        }

        case SET_USERNAME: {
            return {
                ...state,
                username: payload,
            }
        }

        default:
            return state
    }
}

export const AuthStateShape = PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,

    isFetching: PropTypes.bool.isRequired,
    isTouching: PropTypes.bool.isRequired,
})

export const AuthActionsShape = PropTypes.shape({
    touchError: PropTypes.func.isRequired,
    touchStart: PropTypes.func.isRequired,
    touchSuccess: PropTypes.func.isRequired,
    setEmail: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    setUsername: PropTypes.func.isRequired,
})

export default function () {
    const [state, dispatch] = useReducer(reducer, initialState, (store) => store)

    return [state, {
        touchError: (payload) => dispatch({ payload, type: TOUCH_EMAIL_ERROR }),
        touchStart: () => dispatch({ type: TOUCH_EMAIL_START }),
        touchSuccess: () => dispatch({ type: TOUCH_EMAIL_SUCCESS }),

        setEmail: (payload) => dispatch({ payload, type: SET_EMAIL }),
        setName: (payload) => dispatch({ payload, type: SET_NAME }),
        setPassword: (payload) => dispatch({ payload, type: SET_PASSWORD }),
        setUsername: (payload) => dispatch({ payload, type: SET_USERNAME }),
    }]
}
