// Component to show buttons for audio navigation.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Button from '../Button/Button'

import { AUDIO_PLAY_KEY,
         AUDIO_OPTIONS_TOGGLE_KEY,
         AUDIO_PREVIOUS_SONG_KEY,
         AUDIO_NEXT_SONG_KEY } from '../../constants/access'
import { AUDIO_OPTIONS } from '../../constants/options'
import { getSongsAndLoguesCount, getSongsNotLoguesCount } from '../../helpers/dataHelper'
import { getValueInBitNumber } from '../../helpers/bitHelper'
import { getComponentShouldUpdate } from '../../helpers/generalHelper'

const mapStateToProps = ({
    isPlaying,
    canPlayThroughs,
    selectedAudioOptionIndex,
    selectedSongIndex
}) => ({
    isPlaying,
    canPlayThroughs,
    selectedAudioOptionIndex,
    selectedSongIndex
})

class AudioButtons extends Component {

    static propTypes = {
        // Through Redux.
        isPlaying: PropTypes.bool.isRequired,
        canPlayThroughs: PropTypes.number.isRequired,
        selectedAudioOptionIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,

        // From parent.
        handleAudioPlay: PropTypes.func.isRequired,
        handleAudioOptionsToggle: PropTypes.func.isRequired,
        handleAudioPreviousSong: PropTypes.func.isRequired,
        handleAudioNextSong: PropTypes.func.isRequired
    }

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'isPlaying',
                    'selectedSongIndex',
                    'selectedAudioOptionIndex',
                    'canPlayThroughs'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { selectedSongIndex,
                canPlayThroughs,

                isPlaying,
                selectedAudioOptionIndex,

                handleAudioPlay,
                handleAudioOptionsToggle,
                handleAudioPreviousSong,
                handleAudioNextSong } = this.props,

            isPrologue = selectedSongIndex === 0,
            isFirstSong = selectedSongIndex === 1,
            songsCount = getSongsAndLoguesCount(),
            isLastSong = selectedSongIndex === songsCount - 2,
            isEpilogue = selectedSongIndex === songsCount - 1,

            songCanPlayThrough = getValueInBitNumber({
                keysCount: getSongsNotLoguesCount(),
                bitNumber: canPlayThroughs,
                key: (isPrologue || isEpilogue) ? 1 : selectedSongIndex
            })

        let playButtonText

        if (songCanPlayThrough) {
            playButtonText = isPlaying ? '\u23F8' : '\u25BA'

        } else {
            // TODO: Make this a real icon, of course.
            playButtonText = 'x'
        }

        return (
            <div className={cx(
                'AudioButtons',
                'Audio__menuChild',
                'flexAlignContainer'
            )}>
                <div className={cx(
                    'AudioButtons__childPlayer',
                    'AudioButtons__child',
                    'flexAlignContainer'
                )}>
                    {/* Previous button. */}
                    <Button
                        buttonName="audioSelect"
                        className={cx(
                            'AudioButton'
                        )}
                        temporaryText={
                            isPrologue || isFirstSong ? '\u2302' : '\u21E4'
                        }
                        accessKey={AUDIO_PREVIOUS_SONG_KEY}
                        isDisabled={isPrologue}
                        handleButtonClick={handleAudioPreviousSong}
                    />

                    {/* Play button. */}
                    <Button
                        buttonName="audioPlay"
                        className={cx(
                            'AudioButton'
                        )}
                        isLargeSize
                        temporaryText={playButtonText}
                        accessKey={AUDIO_PLAY_KEY}
                        isDisabled={!songCanPlayThrough}
                        handleButtonClick={handleAudioPlay}
                    />

                    {/* Next button. */}
                    <Button
                        buttonName="audioSelect"
                        className={cx(
                            'AudioButton'
                        )}
                        temporaryText={
                            isEpilogue || isLastSong ? '\u2302' : '\u21E5'
                        }
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
                        buttonName="audioOptions"
                        className={cx(
                            'AudioButton'
                        )}
                        temporaryText={AUDIO_OPTIONS[selectedAudioOptionIndex]}
                        accessKey={AUDIO_OPTIONS_TOGGLE_KEY}
                        handleButtonClick={handleAudioOptionsToggle}
                    />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(AudioButtons)
