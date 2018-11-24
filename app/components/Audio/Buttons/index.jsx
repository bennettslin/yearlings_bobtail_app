// Component to show buttons for audio navigation.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import AudioOptionDispatcher from '../../../dispatchers/AudioOptionDispatcher'
import Button from '../../Button'

import {
    AUDIO_PLAY_KEY,
    AUDIO_OPTIONS_TOGGLE_KEY,
    AUDIO_PREVIOUS_SONG_KEY,
    AUDIO_NEXT_SONG_KEY
} from 'constants/access'

import {
    AUDIO_NEXT_BUTTON_KEY,
    AUDIO_OPTIONS_BUTTON_KEY,
    AUDIO_PLAY_BUTTON_KEY,
    AUDIO_PREVIOUS_BUTTON_KEY
} from 'constants/buttons'

import {
    getSongsAndLoguesCount,
    getSongsNotLoguesCount
} from 'helpers/dataHelper'

import { getValueInBitNumber } from 'helpers/bitHelper'

const mapStateToProps = ({
    audioStore: {
        isPlaying,
        canPlayThroughs
    },
    sessionStore: { selectedAudioOptionIndex },
    songStore: { selectedSongIndex }
}) => ({
    isPlaying,
    canPlayThroughs,
    selectedAudioOptionIndex,
    selectedSongIndex
})

class AudioButtons extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPlaying: PropTypes.bool.isRequired,
        canPlayThroughs: PropTypes.number.isRequired,
        selectedAudioOptionIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,

        // From parent.
        handleAudioPlay: PropTypes.func.isRequired,
        handleAudioPreviousSong: PropTypes.func.isRequired,
        handleAudioNextSong: PropTypes.func.isRequired
    }

    handleAudioOptionClick = () => {
        this.dispatchAudioOption()
    }

    render() {
        const {
                selectedSongIndex,
                canPlayThroughs,

                isPlaying,
                selectedAudioOptionIndex,

                handleAudioPlay,
                handleAudioPreviousSong,
                handleAudioNextSong
            } = this.props,

            isPrologue = selectedSongIndex === 0,
            songsCount = getSongsAndLoguesCount(),
            isEpilogue = selectedSongIndex === songsCount - 1,

            songCanPlayThrough = getValueInBitNumber({
                keysCount: getSongsNotLoguesCount(),
                bitNumber: canPlayThroughs,
                key: (isPrologue || isEpilogue) ? 1 : selectedSongIndex
            })

        return (
            <div className={cx(
                'AudioButtons',
                'Audio__child',
                'flexAlignContainer'
            )}>
                <div className={cx(
                    'AudioButtons__childPlayer',
                    'AudioButtons__child',
                    'flexAlignContainer'
                )}>
                    {/* Previous button. */}
                    <Button
                        buttonName={AUDIO_NEXT_BUTTON_KEY}
                        className="AudioButton"
                        buttonIdentifier={isPrologue}
                        accessKey={AUDIO_PREVIOUS_SONG_KEY}
                        isDisabled={isPrologue}
                        handleButtonClick={handleAudioPreviousSong}
                    />

                    {/* Play button. */}
                    <Button
                        isLargeSize
                        buttonName={AUDIO_PLAY_BUTTON_KEY}
                        className="AudioButton"
                        buttonIdentifier={isPlaying}
                        accessKey={AUDIO_PLAY_KEY}
                        isDisabled={!songCanPlayThrough}
                        handleButtonClick={handleAudioPlay}
                    />

                    {/* Next button. */}
                    <Button
                        buttonName={AUDIO_PREVIOUS_BUTTON_KEY}
                        className="AudioButton"
                        buttonIdentifier={isEpilogue}
                        accessKey={AUDIO_NEXT_SONG_KEY}
                        isDisabled={isEpilogue}
                        handleButtonClick={handleAudioNextSong}
                    />
                </div>

                <div className={cx(
                    'AudioButtons__childOption',
                    'AudioButtons__child',
                    'flexAlignContainer'
                )}>
                    <Button
                        buttonName={AUDIO_OPTIONS_BUTTON_KEY}
                        className="AudioButton"
                        buttonIdentifier={selectedAudioOptionIndex}
                        accessKey={AUDIO_OPTIONS_TOGGLE_KEY}
                        handleButtonClick={this.handleAudioOptionClick}
                    />
                </div>
                <AudioOptionDispatcher {...{ getDispatch: this }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(AudioButtons)
