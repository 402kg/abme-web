import React, { useEffect } from 'react'

import css from './css.styl'

function Public() {
    useEffect(() => {
        document.title = 'abme | Welcome'
    }, [])

    return (
        <div className={css.container}>
            Public App
        </div>
    )
}

export default Public
