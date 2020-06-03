// Button in nav section to select logue.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import NavButtonIndexed from '../ButtonIndexed'
import NavRoad from '../Road'
import { getSongsAndLoguesCount } from '../../../../../api/album/songs'
import './style'

const NavBookLogue = ({
    bookIndex,
    ...other
}) => {
    const songIndex = bookIndex === 0 ? 0 : getSongsAndLoguesCount() - 1

    return (
        <div className={cx(
            'NavBookLogue',
            'NavBook'
        )}>
            <NavRoad />
            <NavButtonIndexed {...other}
                {...{ songIndex }}
            />
        </div>
    )
}

NavBookLogue.propTypes = {
    bookIndex: PropTypes.number.isRequired
}

export default memo(NavBookLogue)
