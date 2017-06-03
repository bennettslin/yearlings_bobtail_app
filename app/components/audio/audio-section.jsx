// Section for user to select and play songs.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AudioButtons from './audio-buttons'
import { getSongsLength } from '../../helpers/data-helper'
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
                    'selectedSongIndex',

                    // TODO: Not great that it needs to check audio slider props.
                    'audioSliderProps'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { selectedSongIndex,
                ...other } = this.props,

            isPrologue = selectedSongIndex === 0,
            isFirstSong = selectedSongIndex === 1,

            songsLength = getSongsLength(),

            isLastSong = selectedSongIndex === songsLength - 2,
            isEpilogue = selectedSongIndex === songsLength - 1

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
    selectedSongIndex: PropTypes.number.isRequired,
    audioSliderProps: PropTypes.object.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const AudioSectionView = ({

    deviceIndex,
    isTitleInAudio,
    timerInAudio,
    audioTimerChild,
    audioBannerChild,
    titleToggleChild,

...other }) => {

    const isPhone = getIsPhone(deviceIndex)

    return (
        <div
            className="section audio-section"
        >
            {timerInAudio && (
                <div className="audio-timer-block">
                    {audioTimerChild}
                </div>
            )}

            {isTitleInAudio &&
                titleToggleChild
            }

            {(!isPhone || timerInAudio) && audioBannerChild}

            <AudioButtons {...other} />
        </div>
    )
}

AudioSectionView.defaultProps = {
    timerInAudio: false
}

AudioSectionView.propTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    isTitleInAudio: PropTypes.bool.isRequired,

    // From parent.
    timerInAudio: PropTypes.bool.isRequired,
    audioTimerChild: PropTypes.element.isRequired,
    audioBannerChild: PropTypes.element.isRequired,
    titleToggleChild: PropTypes.element.isRequired
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
