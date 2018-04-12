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
        <div className={cx(
            'AudioTimer',
            { 'AudioTimer__titleTimer': isTitleTimer }
        )}>

            {displayBase && (
                <span className="AudioTimer__base">
                    {displayBase}
                </span>
            )}

            {displayJiffy && (
                <span className="AudioTimer__jiffy">
                    {displayJiffy}
                </span>
            )}

        </div>
    )
}

AudioTimer.propTypes = audioTimerPropTypes

export default connect(mapStateToProps)(AudioTimer)
