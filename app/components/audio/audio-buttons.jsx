import React from 'react'
import { AUDIO_OPTIONS,
         AUDIO_SECTION } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const AudioButtons = ({

    onAudioSongClick,
    onAudioTimeClick,

...other }) => {

    const onPreviousSongClick = e => onAudioSongClick(e, undefined, -1),
        onRewindClick = e => onAudioTimeClick(e, undefined, -1),
        onFastForwardClick = e => onAudioTimeClick(e, undefined, 1),
        onNextSongClick = e => onAudioSongClick(e, undefined, 1)

    return (
        <AudioButtonsView {...other}
            onPreviousSongClick={onPreviousSongClick}
            onRewindClick={onRewindClick}
            onFastForwardClick={onFastForwardClick}
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
    onRewindClick,
    onFastForwardClick,
    onNextSongClick

}) => (
    <div className="audio-block audio-buttons-block">

        <div className="audio-subblock player-subblock">
            <a
                className={`audio-button${isPrologue ? '' : ' enabled'}`}
                onClick={onPreviousSongClick}
            >
                <div className="button-icon audio-icon">
                    {isPrologue || isFirstSong ? '\u2302' : '\u21E4'}
                </div>
            </a>

            {false ?
                <a
                    className={`audio-button${isPrologue || isEpilogue || isFirstVerse ? '' : ' enabled'}`}
                    onClick={onRewindClick}
                >
                    <div className="button-icon audio-icon">
                        {'\u23EA'}
                    </div>
                </a> : null
            }

            <a
                className="audio-button enabled"
                onClick={onPlayClick}
            >
                <div className={`button-icon audio-icon${titleInAudio ? '' : ' large'}`}>
                    {isPlaying ? '\u23F8' : '\u25BA' }
                </div>
            </a>

            {false ?
                <a
                    className={`audio-button${isPrologue || isEpilogue || isLastVerse ? '' : ' enabled'}`}
                    onClick={onFastForwardClick}
                >
                    <div className="button-icon audio-icon">
                        {'\u23E9'}
                    </div>
                </a> : null
            }

            <a
                className={`audio-button${isEpilogue ? '' : ' enabled'}`}
                onClick={onNextSongClick}
            >
                <div className="button-icon audio-icon">
                    {isEpilogue || isLastSong ? '\u2302' : '\u21E5'}
                </div>
            </a>
        </div>

        <div className="audio-subblock option-subblock">
            <a
                className="audio-button enabled"
                onClick={onAudioOptionClick}
            >
                <div className="button-icon audio-icon">
                    {AUDIO_OPTIONS[selectedAudioOptionIndex]}
                </div>
            </a>
        </div>
    </div>
)

export default AudioButtons
