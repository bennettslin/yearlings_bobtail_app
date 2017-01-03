import React, { Component } from 'react'
import LyricsLine from './lyrics-line'
import LyricsPlayButton from './lyrics-play-button'
import { DOUBLESPEAKER_KEYS, TITLE, LEFT, LYRIC_VERSE_ELEMENT } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const LyricsVerse = ({

    verseObject,
    sectionAccessHighlighted,
    accessedLyricElement,
    accessedVerseIndex,
    selectedVerseIndex,
    lyricsStartAtZero,
    onAnnotationClick,
    onVerseClick,

...other }) => {

    const { lyric,
            isTitle,
            time,
            verseIndex } = verseObject,

        isSelected = verseIndex === selectedVerseIndex,
        isAfterSelected = verseIndex > selectedVerseIndex,
        accessHighlighted = sectionAccessHighlighted && accessedVerseIndex === verseIndex && accessedLyricElement === LYRIC_VERSE_ELEMENT,
        isDoubleSpeaker = !lyric,
        isInteractable = !isNaN(time) && !(verseIndex === 0 && lyricsStartAtZero),
        onPlayClick = isInteractable && !isSelected ? e => onVerseClick(e, verseIndex) : null,
        onAnchorClick = onAnnotationClick

    return (
        <LyricsVerseView {...other}
            verseObject={verseObject}
            accessHighlighted={accessHighlighted}
            sectionAccessHighlighted={sectionAccessHighlighted}
            accessedLyricElement={accessedLyricElement}
            isTitle={isTitle}
            isSelected={isSelected}
            isAfterSelected={isAfterSelected}
            isInteractable={isInteractable}
            isDoubleSpeaker={isDoubleSpeaker}
            onPlayClick={onPlayClick}
            onAnchorClick={onAnchorClick}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

class LyricsVerseView extends Component {

    constructor(props) {
        super(props)
    }

    componentWillUpdate(nextProps) {
        if (this.props.isSelected &&
            this._lyricsDidScroll(this.props, nextProps)) {
            this.props.onSelectedVerseScroll(this.myVerse.getBoundingClientRect())
        }
    }

    _lyricsDidScroll(oldProps, newProps) {
        return oldProps.lyricsScrollTop !== newProps.lyricsScrollTop || oldProps.isLyricExpanded !== newProps.isLyricExpanded
    }

    getLyricsLine({ key, index, columnKey, other }) {

        const { isSelected,
                verseObject,
                } = this.props,

            lyricsLineProps = {
                verseSelected: isSelected,
                text: key ? verseObject[key] : verseObject.lyric,
                firstVerseObject: verseObject.firstVerseObject,
                lastVerseObject: verseObject.lastVerseObject,
                columnKey
            }

        if (typeof index !== 'undefined') {
            lyricsLineProps.key = index
        }

        return <LyricsLine {...other} {...lyricsLineProps} />
    }

    render() {

                // From props.
        const { verseObject,
                hiddenLyricColumnKey,
                inVerseBar,

                // From controller.
                accessHighlighted,
                isInteractable,
                isSelected,
                isPlaying,
                isAfterSelected,
                isDoubleSpeaker,
                isTitle,
                onPlayClick,

            ...other } = this.props

        return (
            <div
                ref={(node) => (this.myVerse = node)}
                className={`verse verse-${verseObject.verseIndex}${isSelected ? ' selected' : ''}${accessHighlighted ? ' access-highlighted' : ''}${isInteractable ? ' interactable' : ''}`}
            >
                {isInteractable && !inVerseBar &&
                    <LyricsPlayButton
                        isSelected={isSelected}
                        isPlaying={isPlaying}
                        isAfterSelected={isAfterSelected}
                        onClick={onPlayClick}
                    />
                }
                {isDoubleSpeaker ? (
                    <div className={`double-lines-block${hiddenLyricColumnKey ? ' hidden-' + hiddenLyricColumnKey : ''}`}>
                        {DOUBLESPEAKER_KEYS.filter(key => {
                            return key === hiddenLyricColumnKey && other.showSingleLyricColumn ? false : verseObject[key]
                        }).map((key, index) => {
                            return this.getLyricsLine({
                                key,
                                index,
                                columnKey: key,
                                other
                            })
                        })}
                    </div>
                ) : (
                    this.getLyricsLine({
                        columnKey: isTitle ? TITLE : LEFT,
                        other
                    })
                )}
            </div>
        )
    }
}

export default LyricsVerse
