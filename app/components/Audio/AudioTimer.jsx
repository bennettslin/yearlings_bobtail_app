// Component to show the played audio time.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getSongIsLogue } from '../../helpers/dataHelper'
import { getFormattedTime } from '../../helpers/formatHelper'

const mapStateToProps = ({
    selectedSongIndex,
    selectedTimePlayed
}) => ({
    selectedSongIndex,
    selectedTimePlayed
})

const audioTimerPropTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired,
    selectedTimePlayed: PropTypes.number.isRequired,

    // From parent.
    isTitleTimer: PropTypes.bool
},

AudioTimer = ({

    isTitleTimer,
    selectedSongIndex,
    selectedTimePlayed

}) => {
    const isLogue = getSongIsLogue(selectedSongIndex),

        { base,
          jiffy } = getFormattedTime(selectedTimePlayed, true)

    return (
        <div className={cx(
            'AudioTimer',
            { 'AudioTimer__titleTimer': isTitleTimer }
        )}>

            {!isLogue && (
                <span className="AudioTimer__base">
                    {base}
                </span>
            )}

            {!isLogue && (
                <span className="AudioTimer__jiffy">
                    {jiffy}
                </span>
            )}

        </div>
    )
}

AudioTimer.propTypes = audioTimerPropTypes

export default connect(mapStateToProps)(AudioTimer)
