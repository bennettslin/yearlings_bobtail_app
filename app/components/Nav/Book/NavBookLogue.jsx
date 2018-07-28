// Button in nav section to select logue.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import NavButtonIndexed from '../NavButtonIndexed'
import { getSongsAndLoguesCount } from '../../../helpers/dataHelper'

const navBookLoguePropTypes = {
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
            <NavButtonIndexed {...other}
                songIndex={songIndex}
            />
        </div>
    )
}

NavBookLogue.propTypes = navBookLoguePropTypes

export default NavBookLogue
