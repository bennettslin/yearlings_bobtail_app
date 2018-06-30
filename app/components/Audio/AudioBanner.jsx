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
    selectedSongIndex: PropTypes.number.isRequired,

    // From parent.
    // isAudioChild: PropTypes.bool,
    // isMenuBottomRow: PropTypes.bool
},

AudioBanner = ({

    isTwoRowMenu,
    selectedSongIndex,
    // isAudioChild,
    // isMenuBottomRow,

...other }) => {

    const songTitle = getSongTitle({
        songIndex: selectedSongIndex
    })

    return (
        <div className={cx(
            'AudioBanner',
            'absoluteFullContainer',
            {
                'MenuRow': isTwoRowMenu,
                'MenuBottomRow': isTwoRowMenu,
                'Audio__child': !isTwoRowMenu
            }
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
