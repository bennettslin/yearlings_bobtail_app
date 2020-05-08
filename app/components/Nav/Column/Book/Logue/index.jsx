// Button in nav section to select logue.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import NavButtonIndexed from '../ButtonIndexed'
import NavRoad from '../Road'

import { getSongsAndLoguesCount } from '../../../../../album/api/songs'

const navBookLoguePropTypes = {
    // From parent.
        bookIndex: PropTypes.number.isRequired
    },

    NavBookLogue = ({

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

NavBookLogue.propTypes = navBookLoguePropTypes

export default memo(NavBookLogue)
