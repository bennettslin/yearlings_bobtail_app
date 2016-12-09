import React from 'react'
import { getFormattedTime } from 'helpers/format-helper'
import { AUDIO_OPTIONS,
         AUDIO_SECTION } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const AudioSection = ({

    accessedOn,
    accessedSectionKey,
    nextSectionKey,
    onAudioSongClick,
    onAudioTimeClick,

...other }) => {

    const sectionAccessHighlighted = accessedOn && accessedSectionKey === AUDIO_SECTION,
        sectionNextHighlighted = accessedOn && nextSectionKey === AUDIO_SECTION,
        onPreviousSongClick = e => onAudioSongClick(e, undefined, -1),
        onRewindClick = e => onAudioTimeClick(e, undefined, -1),
        onFastForwardClick = e => onAudioTimeClick(e, undefined, 1),
        onNextSongClick = e => onAudioSongClick(e, undefined, 1)

    return (
        <AudioSectionView {...other}
            sectionAccessHighlighted={sectionAccessHighlighted}
            sectionNextHighlighted={sectionNextHighlighted}
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

const AudioSectionView = ({

    // From props.
    isAdmin,
    isPlaying,
    selectedTimePlayed,
    selectedAudioOptionIndex,
    isPrologue,
    isFirstSong,
    isLastSong,
    isEpilogue,
    isFirstVerse,
    isLastVerse,
    selectedSongTitle,
    onPlayClick,
    onAudioOptionClick,

    // From controller.
    sectionAccessHighlighted,
    sectionNextHighlighted,
    onPreviousSongClick,
    onRewindClick,
    onFastForwardClick,
    onNextSongClick

}) => (
    <div
        className={`section audio-section${sectionAccessHighlighted ? ' access-highlighted' : ''}${sectionNextHighlighted ? ' next-highlighted' : ''}`}
    >
        {isAdmin ? <h2>audio</h2> : null}
        <div className="audio-banner-block">
            {selectedSongTitle}{!isPrologue && !isEpilogue ? ': ' + getFormattedTime(selectedTimePlayed) : ''}
        </div>
        <div className="audio-buttons-block">
            <div className="audio-button-block">
                <a
                    className={`audio-button${isPrologue ? '' : ' enabled'}`}
                    onClick={onPreviousSongClick}
                >
                    <div className="audio-icon">
                        {isPrologue || isFirstSong ? '\u2302' : '\u21E4'}
                    </div>
                </a>
            </div>

            <div className="audio-button-block">
                <a
                    className={isPrologue || isEpilogue || isFirstVerse ? '' : 'enabled'}
                    onClick={onRewindClick}
                >
                    <div className="audio-icon">
                        {'\u23EA'}
                    </div>
                </a>
            </div>

            <div className="audio-button-block">
                <a
                    className="enabled"
                    onClick={onPlayClick}
                >
                    <div className="audio-icon">
                        {isPlaying ? '\u23F8' : '\u25BA' }
                    </div>
                </a>
            </div>

            <div className="audio-button-block">
                <a
                    className={isPrologue || isEpilogue || isLastVerse ? '' : 'enabled'}
                    onClick={onFastForwardClick}
                >
                    <div className="audio-icon">
                        {'\u23E9'}
                    </div>
                </a>
            </div>

            <div className="audio-button-block">
                <a
                    className={isEpilogue ? '' : 'enabled'}
                    onClick={onNextSongClick}
                >
                    <div className="audio-icon">
                        {isEpilogue || isLastSong ? '\u2302' : '\u21E5'}
                    </div>
                </a>
            </div>

            <div className="audio-button-block">
                <a
                    className="enabled"
                    onClick={onAudioOptionClick}
                >
                    <div className="audio-icon">
                        Option: {AUDIO_OPTIONS[selectedAudioOptionIndex]}
                    </div>
                </a>
            </div>
        </div>
    </div>
)

export default AudioSection
