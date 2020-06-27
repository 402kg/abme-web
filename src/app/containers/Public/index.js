import React, { useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import IndexPage from './pages/IndexPage'
import SignPage from './pages/SignPage'

import css from './css.styl'

function Public() {
    useEffect(() => {
        document.title = 'abme | Welcome'
    }, [])

    return (
        <div className={css.container}>
            <Switch>
                <Route exact path="/">
                    <IndexPage />
                </Route>

                <Route path="/sign">
                    <SignPage />
                </Route>

                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default Public
