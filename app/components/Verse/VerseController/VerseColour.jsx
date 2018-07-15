/* eslint-disable */

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
    // From parent.
    // isOnCursor: PropTypes.bool.isRequired,
    // isAfterCursor: PropTypes.bool.isRequired,
    // isInteractivated: PropTypes.bool.isRequired
},

VerseColour = ({
    isOnCursor,
    isAfterCursor,
    isInteractivated
}) => {
    return (
        <div
            className={cx(
                'VerseColour',
                'absoluteFullContainer'
            )}
        />
    )
}

VerseColour.propTypes = propTypes

export default VerseColour
