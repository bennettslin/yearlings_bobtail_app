// Button in nav section to select logue.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import NavButtonIndexed from '../ButtonIndexed'
import { getSongsAndLoguesCount } from 'helpers/data'

const navBookLoguePropTypes = {
    // From parent.
        bookIndex: PropTypes.number.isRequired
    },

    NavBookLogue = memo(({

        bookIndex,

        ...other
    }) => {

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
    })

NavBookLogue.propTypes = navBookLoguePropTypes

export default NavBookLogue
