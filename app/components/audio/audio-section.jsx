// Section for user to select and play songs.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AudioBanner from './audio-banner'
import AudioButtons from './audio-buttons'
import AudioTimer from './audio-timer'
import TitleToggle from '../title/title-toggle'
import { getIsTimerInAudio } from '../../helpers/logic-helper'

const mapStateToProps = ({
    deviceIndex,
    isLyricExpanded,
    selectedAnnotationIndex,
    selectedScoreIndex,
    selectedTitleIndex,
    selectedWikiIndex,
    isTitleInAudio
}) => ({
    deviceIndex,
    isLyricExpanded,
    selectedAnnotationIndex,
    selectedScoreIndex,
    selectedTitleIndex,
    selectedWikiIndex,
    isTitleInAudio
})

const audioSectionDefaultProps = {
    inOverlay: false
},

audioSectionPropTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    isLyricExpanded: PropTypes.bool.isRequired,
    selectedAnnotationIndex: PropTypes.number.isRequired,
    selectedScoreIndex: PropTypes.number.isRequired,
    selectedTitleIndex: PropTypes.number.isRequired,
    selectedWikiIndex: PropTypes.number.isRequired,
    isTitleInAudio: PropTypes.bool.isRequired,

    // From parent.
    inOverlay: PropTypes.bool.isRequired,
    audioBannerHandlers: PropTypes.object.isRequired,
    titleToggleHandlers: PropTypes.object.isRequired
},

AudioSection = ({

    deviceIndex,
    isLyricExpanded,
    selectedAnnotationIndex,
    selectedScoreIndex,
    selectedTitleIndex,
    selectedWikiIndex,
    isTitleInAudio,

    inOverlay,
    audioBannerHandlers,
    titleToggleHandlers,

...other }) => {

    const isTimerInAudio = getIsTimerInAudio({
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
            <AudioBanner {...audioBannerHandlers}
                inAudioSection={true}
                inOverlay={inOverlay}
            />

            <AudioButtons {...other} />
        </div>
    )
}

AudioSection.defaultProps = audioSectionDefaultProps
AudioSection.propTypes = audioSectionPropTypes

export default connect(mapStateToProps)(AudioSection)
