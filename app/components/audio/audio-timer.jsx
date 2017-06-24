// Component to show the played audio time.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getSongIsLogue } from '../../helpers/data-helper'
import { getFormattedTime } from '../../helpers/format-helper'

const AudioTimer = ({

    selectedSongIndex,
    selectedTimePlayed

}) => {
    const isLogue = getSongIsLogue(selectedSongIndex)

    let displayBase,
        displayJiffy

    if (!isLogue) {

        const { base,
                jiffy } = getFormattedTime(selectedTimePlayed, true)

        displayBase = base
        displayJiffy = jiffy
    }

    return (
        <div className="audio-banner-time">

            {displayBase && (
                <span className="base">
                    {displayBase}
                </span>
            )}

            {displayJiffy && (
                <span className="jiffy">
                    {displayJiffy}
                </span>
            )}

        </div>
    )
}

AudioTimer.propTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired,
    selectedTimePlayed: PropTypes.number.isRequired
}

export default connect(({
    selectedSongIndex,
    selectedTimePlayed
}) => ({
    selectedSongIndex,
    selectedTimePlayed
}))(AudioTimer)
