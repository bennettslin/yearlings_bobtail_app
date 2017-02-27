import React from 'react'
import { AUDIO_OPTIONS } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const AudioButtons = ({

    onAudioSongClick,

...other }) => {

    const onPreviousSongClick = e => onAudioSongClick(e, undefined, -1),
        onNextSongClick = e => onAudioSongClick(e, undefined, 1)

    return (
        <AudioButtonsView {...other}
            onPreviousSongClick={onPreviousSongClick}
            onNextSongClick={onNextSongClick}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const AudioButtonsView = ({

    // From props.
    titleInAudio,
    isPlaying,
    selectedAudioOptionIndex,
    isPrologue,
    isFirstSong,
    isLastSong,
    isEpilogue,
    isFirstVerse,
    isLastVerse,
    onPlayClick,
    onAudioOptionClick,

    // From controller.
    onPreviousSongClick,
    onNextSongClick

}) => (
    <div className="audio-block audio-buttons-block">

        <div className="audio-subblock player-subblock">

            {/* Previous button. */}
            <a
                className={`audio-button${isPrologue ? '' : ' enabled'}`}
                onClick={onPreviousSongClick}
            >
                <div className="button-icon audio-nav">
                    {isPrologue || isFirstSong ? '\u2302' : '\u21E4'}
                </div>
            </a>

            {/* Play button. */}
            <a
                className="audio-button enabled"
                onClick={onPlayClick}
            >
                <div className={`
                        button-icon
                        audio-colour
                        ${titleInAudio ? '' : 'large'}
                    `}
                >
                    {isPlaying ? '\u23F8' : '\u25BA' }
                </div>
            </a>

            {/* Next button. */}
            <a
                className={`audio-button${isEpilogue ? '' : ' enabled'}`}
                onClick={onNextSongClick}
            >
                <div className="button-icon audio-nav">
                    {isEpilogue || isLastSong ? '\u2302' : '\u21E5'}
                </div>
            </a>
        </div>

        <div className="audio-subblock option-subblock">
            <a
                className="audio-button enabled"
                onClick={e => onAudioOptionClick(e)}
            >
                <div className="button-icon audio-neutral">
                    {AUDIO_OPTIONS[selectedAudioOptionIndex]}
                </div>
            </a>
        </div>
    </div>
)

export default AudioButtons
