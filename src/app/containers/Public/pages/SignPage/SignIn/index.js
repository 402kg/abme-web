import React, { useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { AuthActionsShape, AuthStateShape } from '../useAuthReducer'

import css from './css.styl'

function SignIn({ actions, state }) {
    const { push } = useHistory()

    const handlePassword = useCallback(({ target: { value } }) => {
        actions.setPassword(value)
    }, [
        actions.setPassword,
    ])

    useEffect(() => {
        if (!state.email) {
            push('/sign')
        }
    }, [])

    return (
        <div className={css.container}>
            <input
                type="password"
                value={state.password}
                onChange={handlePassword} />
        </div>
    )
}

SignIn.propTypes = {
    actions: AuthActionsShape.isRequired,
    state: AuthStateShape.isRequired,
}

export default SignIn
