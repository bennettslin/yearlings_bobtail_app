// Button in nav section to select logue.

import React from 'react'
import PropTypes from 'prop-types'
import NavItem from './nav-item'
import { getSongsLength } from '../../helpers/data-helper'

const NavLogueButton = ({

    isPrologue,

...other }) => {

    const songIndex = isPrologue ? 0 : getSongsLength() - 1

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
    isPrologue: PropTypes.bool.isRequired
}

export default NavLogueButton
