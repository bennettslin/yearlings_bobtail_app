// Text displays to indicate time spent and remaining.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getCursorStatusClassName } from './verseControllerHelper'

const mapStateToProps = ({
    selectedTimePlayed
}) => ({
    selectedTimePlayed
})

const verseCursorPropTypes = {
    // Through Redux.
    selectedTimePlayed: PropTypes.number.isRequired,

    // From parent.
    isOnCursor: PropTypes.bool.isRequired,

    // Not passed by verse bar.
    isAfterCursor: PropTypes.bool,

    startTime: PropTypes.number.isRequired,
    stanzaEndTime: PropTypes.number.isRequired
},

VerseCursor = ({

    selectedTimePlayed,

    isOnCursor,
    isAfterCursor,
    startTime,
    stanzaEndTime

}) => {

    const cursorStatusClassName = getCursorStatusClassName({
            isOnCursor: isOnCursor,
            isAfterCursor: isAfterCursor
        }),

        cursorStyle = {}

    if (isOnCursor) {
        const relativeTotalTime = stanzaEndTime - startTime

        let relativeTimePlayed = selectedTimePlayed - startTime

        if (relativeTimePlayed < 0) {
            relativeTimePlayed = 0

        } else if (relativeTimePlayed > relativeTotalTime) {
            relativeTimePlayed = relativeTotalTime
        }

        const cursorWidthPercentage =
                (relativeTimePlayed / relativeTotalTime) * 100

        cursorStyle.width = `${cursorWidthPercentage}%`

        /**
         * This ensures that when a verse before cursor is selected, the cursor
         * does not animate from far right to far left.
         */
        if (!cursorWidthPercentage) {
            cursorStyle.maxWidth = cursorStyle.width
        }
    }

    return (
        <div
            className={cx(
                'VerseCursor',
                `VerseCursor__${cursorStatusClassName}`,
                'absoluteFullContainer'
            )}
            style={cursorStyle}
        />
    )
}

VerseCursor.propTypes = verseCursorPropTypes

export default connect(mapStateToProps)(VerseCursor)
