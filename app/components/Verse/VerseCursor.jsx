// Text displays to indicate time spent and remaining.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

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

    // TODO: Require these.
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
    fullCursorRatio: PropTypes.number.isRequired
},

VerseCursor = ({

    selectedTimePlayed,
    startTime,
    endTime,
    fullCursorRatio

}) => {

    const relativeTotalTime = endTime - startTime

    let relativeTimePlayed = selectedTimePlayed - startTime

    if (relativeTimePlayed < 0) {
        relativeTimePlayed = 0

    } else if (relativeTimePlayed > relativeTotalTime) {
        relativeTimePlayed = relativeTotalTime
    }

    const cursorWidthPercentage =
            (relativeTimePlayed / relativeTotalTime) * 100,

        cursorStyle = {
            width: `${cursorWidthPercentage * fullCursorRatio}%`
        }

    return (
        <div
            className={cx(
                'VerseCursor',
                'absoluteFullContainer'
            )}
            style={cursorStyle}
        />
    )
}

VerseCursor.defaultProps = verseCursorDefaultProps
VerseCursor.propTypes = verseCursorPropTypes

export default connect(mapStateToProps)(VerseCursor)
