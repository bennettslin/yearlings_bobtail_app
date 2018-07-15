// Text displays to indicate time spent and remaining.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getCursorStatusClassName } from '../../../helpers/formatHelper'

const mapStateToProps = ({
    selectedTimePlayed
}) => ({
    selectedTimePlayed
})

const verseCursorDefaultProps = {

    // Only slider verse needs to care about this value.
    fullCursorRatio: 1
},

verseCursorPropTypes = {
    // Through Redux.
    selectedTimePlayed: PropTypes.number.isRequired,

    // From parent.
    verseOnCursor: PropTypes.bool.isRequired,

    // Not passed by verse bar.
    verseAfterCursor: PropTypes.bool,

    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
    fullCursorRatio: PropTypes.number.isRequired
},

VerseCursor = ({

    selectedTimePlayed,

    verseOnCursor,
    verseAfterCursor,
    startTime,
    endTime,
    fullCursorRatio

}) => {

    const cursorStatusClassName = getCursorStatusClassName({
            isOnCursor: verseOnCursor,
            isAfterCursor: verseAfterCursor
        }),

        cursorStyle = {}

    if (verseOnCursor) {
        const relativeTotalTime = endTime - startTime

        let relativeTimePlayed = selectedTimePlayed - startTime

        if (relativeTimePlayed < 0) {
            relativeTimePlayed = 0

        } else if (relativeTimePlayed > relativeTotalTime) {
            relativeTimePlayed = relativeTotalTime
        }

        const cursorWidthPercentage =
                (relativeTimePlayed / relativeTotalTime) * 100

        cursorStyle.width = `${cursorWidthPercentage * fullCursorRatio}%`

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

VerseCursor.defaultProps = verseCursorDefaultProps
VerseCursor.propTypes = verseCursorPropTypes

export default connect(mapStateToProps)(VerseCursor)
