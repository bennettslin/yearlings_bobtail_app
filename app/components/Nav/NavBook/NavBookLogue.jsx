// Button in nav section to select logue.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import NavItem from '../NavItem'
import { getSongsAndLoguesCount } from '../../../helpers/dataHelper'

const navColumnLoguePropTypes = {
    // From parent.
    bookIndex: PropTypes.number.isRequired
},

NavBookLogue = ({

    bookIndex,

...other }) => {

    const songIndex = bookIndex === 0 ? 0 : getSongsAndLoguesCount() - 1

    return (
        <div className={cx(
            'NavBookLogue',
            'NavBook'
        )}>
            <NavItem {...other}
                songIndex={songIndex}
            />
        </div>
    )
}

NavBookLogue.propTypes = navColumnLoguePropTypes

export default NavBookLogue
