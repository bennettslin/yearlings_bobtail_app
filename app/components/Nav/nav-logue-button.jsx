// Button in nav section to select logue.

import React from 'react'
import PropTypes from 'prop-types'
import NavItem from './nav-item'
import { getSongsAndLoguesCount } from '../../helpers/dataHelper'

const navLogueButtonPropTypes = {
    // From parent.
    bookIndex: PropTypes.number.isRequired
},

NavLogueButton = ({

    bookIndex,

...other }) => {

    const songIndex = bookIndex === 0 ? 0 : getSongsAndLoguesCount() - 1

    return (
        <div className="nav-book logue">
            <NavItem {...other}
                songIndex={songIndex}
            />
        </div>
    )
}

NavLogueButton.propTypes = navLogueButtonPropTypes

export default NavLogueButton
