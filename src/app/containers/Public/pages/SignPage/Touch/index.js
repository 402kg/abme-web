import React, { useCallback } from 'react'
import { Route, useHistory, useRouteMatch } from 'react-router-dom'

import AuthApi from '@app/api/auth'

import { AuthActionsShape, AuthStateShape } from '../useAuthReducer'

import css from './css.styl'

function Touch({ actions, state }) {
    const { push } = useHistory()
    const { path } = useRouteMatch()

    const handleChange = useCallback(({ target: { value } }) => {
        actions.setEmail(value)
    }, [actions.setEmail])

    const handleNext = useCallback(() => {
        actions.touchStart()

        AuthApi.touchEmail(state.email)
            .then(() => {
                actions.touchSuccess()

                push(`${path}/up`)
            })
            .catch((error) => {
                actions.touchError(error)

                if (error.response.status === 409) {
                    push(`${path}/in/${state.email}`)
                }
            })
    }, [
        actions.touchError,
        actions.touchStart,
        actions.touchSuccess,

        path,
        state.email,
    ])

    return (
        <div className={css.container}>
            <input
                type="text"
                value={state.email}
                onChange={handleChange} />

            <Route exact path={path}>
                <button
                    type="button"
                    onClick={handleNext}>
                    next
                </button>
            </Route>
        </div>
    )
}

Touch.propTypes = {
    actions: AuthActionsShape.isRequired,
    state: AuthStateShape.isRequired,
}

export default Touch
