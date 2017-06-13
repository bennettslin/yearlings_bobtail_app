// Section for user to select and play songs.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AudioButtons from './audio-buttons'
import AudioTimer from './audio-timer'
import { getSongsCount } from '../../helpers/data-helper'
import { getIsPhone } from '../../helpers/responsive-helper'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

/*************
 * CONTAINER *
 *************/

class AudioSection extends Component {

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'deviceIndex',
                    'isTimerInAudio',
                    'isTitleInAudio',
                    'selectedSongIndex'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { selectedSongIndex,
                ...other } = this.props,

            isPrologue = selectedSongIndex === 0,
            isFirstSong = selectedSongIndex === 1,

            songsCount = getSongsCount(),

            isLastSong = selectedSongIndex === songsCount - 2,
            isEpilogue = selectedSongIndex === songsCount - 1

        return (
            <AudioSectionView {...other}
                isPrologue={isPrologue}
                isFirstSong={isFirstSong}
                isLastSong={isLastSong}
                isEpilogue={isEpilogue}
            />
        )
    }
}

AudioSection.propTypes = {
    selectedSongIndex: PropTypes.number.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const AudioSectionView = ({

    deviceIndex,
    isTitleInAudio,
    isTimerInAudio,
    audioBannerChild,
    titleToggleChild,

...other }) => {

    const isPhone = getIsPhone(deviceIndex)

    return (
        <div
            className="section audio-section"
        >
            {isTimerInAudio && (
                <div className="audio-timer-block">
                    <AudioTimer />
                </div>
            )}

            {isTitleInAudio && titleToggleChild}

            {/* In phone, show banner in the overlaid audio section. */}
            {(!isPhone || isTimerInAudio) && audioBannerChild}

            <AudioButtons {...other} />
        </div>
    )
}

AudioSectionView.defaultProps = {
    isTimerInAudio: false
}

AudioSectionView.propTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    isTitleInAudio: PropTypes.bool.isRequired,

    // From parent.
    isTimerInAudio: PropTypes.bool.isRequired,
    audioBannerChild: PropTypes.element.isRequired,
    titleToggleChild: PropTypes.element
}

export default connect(({
    deviceIndex,
    selectedSongIndex,
    isTitleInAudio
}) => ({
    deviceIndex,
    selectedSongIndex,
    isTitleInAudio
}))(AudioSection)
