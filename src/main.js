import '@babel/polyfill'

import React from 'react'
import { render } from 'react-dom'
import { hot } from 'react-hot-loader/root'

import css from './css.styl'

function AppContainer() {
    return (
        <div className={css.container}>
            #
        </div>
    )
}

const App = hot(AppContainer)

render(<App />, document.querySelector('#root'))
