import React from 'react'
import { NavLink } from 'react-router-dom'

import css from './css.styl'

function IndexPage() {
    return (
        <div className={css.container}>
            <NavLink to="/sign">sign</NavLink>
        </div>
    )
}

export default IndexPage
