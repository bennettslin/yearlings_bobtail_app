// Section for user to select and play songs.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AudioBanner from './audio-banner'
import AudioButtons from './audio-buttons'
import AudioTimer from './audio-timer'
import TitleToggle from '../title/title-toggle'
import { getSongsCount } from '../../helpers/data-helper'
import { getIsTimerInAudio } from '../../helpers/logic-helper'
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
                    'isLyricExpanded',
                    'selectedAnnotationIndex',
                    'selectedScoreIndex',
                    'selectedTitleIndex',
                    'selectedWikiIndex',
                    'selectedSongIndex',
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
    isLyricExpanded,
    selectedAnnotationIndex,
    selectedScoreIndex,
    selectedTitleIndex,
    selectedWikiIndex,
    isTitleInAudio,
    audioBannerHandlers,
    titleToggleHandlers,

...other }) => {

    const isPhone = getIsPhone(deviceIndex),

        isTimerInAudio = getIsTimerInAudio({
                deviceIndex,
                isLyricExpanded,
                selectedAnnotationIndex,
                selectedScoreIndex,
                selectedTitleIndex,
                selectedWikiIndex
        })

    return (
        <div
            className="section audio-section"
        >
            {isTimerInAudio && (
                <div className="audio-timer-block">
                    <AudioTimer />
                </div>
            )}

            {isTitleInAudio && (
                <TitleToggle {...titleToggleHandlers} />
            )}

            {/* In phone, show banner in the overlaid audio section. */}
            {(!isPhone || isTimerInAudio) && (
                <AudioBanner {...audioBannerHandlers}
                    inAudioSection={true}
                />
            )}

            <AudioButtons {...other} />
        </div>
    )
}

AudioSectionView.propTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    isLyricExpanded: PropTypes.bool.isRequired,
    selectedAnnotationIndex: PropTypes.number.isRequired,
    selectedScoreIndex: PropTypes.number.isRequired,
    selectedTitleIndex: PropTypes.number.isRequired,
    selectedWikiIndex: PropTypes.number.isRequired,
    isTitleInAudio: PropTypes.bool.isRequired,

    // From parent.
    audioBannerHandlers: PropTypes.object.isRequired,
    titleToggleHandlers: PropTypes.object.isRequired
}

export default connect(({
    deviceIndex,
    isLyricExpanded,
    selectedAnnotationIndex,
    selectedScoreIndex,
    selectedTitleIndex,
    selectedWikiIndex,
    selectedSongIndex,
    isTitleInAudio
}) => ({
    deviceIndex,
    isLyricExpanded,
    selectedAnnotationIndex,
    selectedScoreIndex,
    selectedTitleIndex,
    selectedWikiIndex,
    selectedSongIndex,
    isTitleInAudio
}))(AudioSection)
