import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getFormattedTime } from '../../helpers/format-helper'

/*************
 * CONTAINER *
 *************/

const AudioTimer = ({

    selectedTimePlayed,

...other }) => {

    const formattedTime = getFormattedTime(selectedTimePlayed)

    return (
        <AudioTimerView {...other}
            formattedTime={formattedTime}
        />
    )
}

AudioTimer.propTypes = {
    selectedTimePlayed: PropTypes.number.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const AudioTimerView = ({

    // From props.
    isLogue,

    // From controller.
    formattedTime

}) => (

    <div className="audio-banner-time">
        {isLogue ? '' : formattedTime}
    </div>
)

AudioTimerView.propTypes = {
    isLogue: PropTypes.bool.isRequired,
    formattedTime: PropTypes.string.isRequired
}

export default connect(({
    selectedTimePlayed
}) => ({
    selectedTimePlayed
}))(AudioTimer)
