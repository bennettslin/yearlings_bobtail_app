// Section for user to select and play songs.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import AudioBanner from './AudioBanner'
import AudioButtons from './AudioButtons'
import AudioTimer from './AudioTimer'
import TitleToggle from '../Title/TitleToggle'
import { getIsTimerInAudio } from '../../helpers/logicHelper'

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

const audioPropTypes = {
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
},

Audio = ({

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
            className={cx(
                'Audio'
            )}
        >
            {isTimerInAudio && (
                <div className="AudioTimer-block">
                    <AudioTimer />
                </div>
            )}

            {isTitleInAudio && (
                <TitleToggle {...titleToggleHandlers} />
            )}

            <AudioBanner {...audioBannerHandlers} />
            <AudioButtons {...other} />
        </div>
    )
}

Audio.propTypes = audioPropTypes

export default connect(mapStateToProps)(Audio)
