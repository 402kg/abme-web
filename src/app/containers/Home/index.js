import React, { useContext, useEffect } from 'react'

import Context from '@app/context'

import css from './css.styl'

function Home() {
    const state = useContext(Context)

    useEffect(() => {
        document.title = `abme | Home - ${state.name}`
    }, [])

    return (
        <div className={css.container}>
            Home App
        </div>
    )
}

export default Home
