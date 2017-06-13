// Button in nav section to select logue.

import React from 'react'
import PropTypes from 'prop-types'
import NavItem from './nav-item'
import { getSongsCount } from '../../helpers/data-helper'

const NavLogueButton = ({

    bookIndex,

...other }) => {

    const songIndex = bookIndex === 0 ? 0 : getSongsCount() - 1

    return (
        <div className="nav-book logue">
            <NavItem {...other}
                songIndex={songIndex}
            />
        </div>
    )
}

NavLogueButton.propTypes = {
    // From parent.
    bookIndex: PropTypes.number.isRequired
}

export default NavLogueButton
