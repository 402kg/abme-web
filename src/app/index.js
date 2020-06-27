import '@babel/polyfill'

import React, {
    Suspense,
    lazy,
    useEffect,
} from 'react'

import { render } from 'react-dom'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router } from 'react-router-dom'

import css from './css.styl'
import useAccountReducer from './useAccountReducer'
import { AccountApi } from './api'
import { Loading } from './components'
import { Provider } from './context'

const Home = lazy(() => import('./containers/Home'))
const Public = lazy(() => import('./containers/Public'))

function AppContainer() {
    const [account, accountActions] = useAccountReducer()

    useEffect(() => {
        accountActions.start()

        AccountApi.get()
            .then(accountActions.success)
            .catch(accountActions.error)
    }, [])

    return (
        <Provider value={{ ...account, accountActions }}>
            <div className={css.container}>
                {!account.isDone && account.isFetching && (
                    <Loading />
                )}

                <Router>
                    {account.isDone && !account.isFetching && !account.isLoggedIn && (
                        <Suspense fallback={<Loading />}>
                            <Public />
                        </Suspense>
                    )}

                    {account.isDone && !account.isFetching && account.isLoggedIn && (
                        <Suspense fallback={<Loading />}>
                            <Home />
                        </Suspense>
                    )}
                </Router>
            </div>
        </Provider>
    )
}

const App = hot(AppContainer)

render(<App />, document.querySelector('#root'))
