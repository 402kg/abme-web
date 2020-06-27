import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom'

import SignIn from './SignIn'
import SignUp from './SignUp'
import Touch from './Touch'

import css from './css.styl'
import useAuthReducer from './useAuthReducer'

function SignPage() {
    const { path } = useRouteMatch()
    const [state, actions] = useAuthReducer()

    return (
        <div className={css.container}>
            <Route path={path}>
                <Touch
                    actions={actions}
                    state={state} />
            </Route>

            <Route exact path={`${path}/up`}>
                <SignUp
                    actions={actions}
                    state={state} />
            </Route>

            <Route exact path={`${path}/in/:email`}>
                <SignIn
                    actions={actions}
                    state={state} />
            </Route>
        </div>
    )
}

export default SignPage
