// Component to show played song title, time played, and slider interface.
/* eslint-disable object-shorthand */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Slider from '../slider/Slider'
import AudioTimer from './AudioTimer'
import { getSongTitle } from '../../helpers/dataHelper'
import { getIsPhone } from '../../helpers/responsiveHelper'

const mapStateToProps = ({
    deviceIndex,
    selectedSongIndex
}) => ({
    deviceIndex,
    selectedSongIndex
})

const audioBannerPropTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,

    // From parent.
    isBelowMenu: PropTypes.bool
},

AudioBanner = ({

    deviceIndex,
    selectedSongIndex,
    isBelowMenu,

...other }) => {

    const isPhone = getIsPhone(deviceIndex),

        songTitle = getSongTitle({
                songIndex: selectedSongIndex
            })

    return Boolean(isBelowMenu) === isPhone && (
        <div className={cx(
            'audio-block',
            'AudioBanner-block',
            { 'isBelowMenu': isBelowMenu }
        )}>
            <Slider {...other} />
            <div className="AudioBanner audio-display-block">
                <div className="AudioBanner-title">
                    {songTitle}
                </div>
                <AudioTimer />
            </div>
        </div>
    )
}

AudioBanner.propTypes = audioBannerPropTypes

export default connect(mapStateToProps)(AudioBanner)
