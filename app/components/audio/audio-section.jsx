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
    isHome,
    isFirstSong,
    isLastSong,
    isFin,
    isFirstVerse,
    isLastVerse,
    audioSongTitle,
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
        {!isHome && !isFin ?
            <div className="audio-banner-block">
                {audioSongTitle} - {getFormattedTime(selectedTimePlayed)}
            </div> : null
        }
        <div className="audio-button-block">
            <a
                className={isHome ? '' : 'enabled'}
                onClick={onPreviousSongClick}
            >
                {isHome || isFirstSong ? '\u2302' : '\u21E4'}
            </a>
            <a
                className={isHome || isFin || isFirstVerse ? '' : 'enabled'}
                onClick={onRewindClick}
            >
                {'\u23EA'}
            </a>
            <a
                className="enabled"
                onClick={onPlayClick}
            >
                {isPlaying ? '\u23F8' : '\u25BA' }
            </a>
            <a
                className={isHome || isFin || isLastVerse ? '' : 'enabled'}
                onClick={onFastForwardClick}
            >
                {'\u23E9'}
            </a>
            <a
                className={isFin ? '' : 'enabled'}
                onClick={onNextSongClick}
            >
                {isFin || isLastSong ? '\u2302' : '\u21E5'}
            </a>
            <a
                className="enabled"
                onClick={onAudioOptionClick}
            >
                Option: {AUDIO_OPTIONS[selectedAudioOptionIndex]}
            </a>
        </div>
    </div>
)

export default AudioSection
