// Component to show played song title, time played, and slider interface.
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Slider from '../slider/Slider'
import AudioTimer from './AudioTimer'
import { getSongTitle } from '../../helpers/dataHelper'

const mapStateToProps = ({
    isTwoRowMenu,
    selectedSongIndex
}) => ({
    isTwoRowMenu,
    selectedSongIndex
})

const audioBannerPropTypes = {
    // Through Redux.
    isTwoRowMenu: PropTypes.bool.isRequired,
    selectedSongIndex: PropTypes.number.isRequired
},

AudioBanner = ({

    isTwoRowMenu,
    selectedSongIndex,

...other }) => {

    const songTitle = getSongTitle({
        songIndex: selectedSongIndex
    })

    return (
        <div className={cx(
            'AudioBanner',
            'absoluteFullContainer',
            isTwoRowMenu ? 'MenuBottomRow' : 'Audio__child'
        )}>

            <div className={cx(
                'AudioBanner__display',
                'absoluteFullContainer',
                'flexAlignContainer'
            )}>
                {songTitle}
                <AudioTimer />
            </div>

            <Slider {...other} />

        </div>
    )
}

AudioBanner.propTypes = audioBannerPropTypes

export default connect(mapStateToProps)(AudioBanner)
