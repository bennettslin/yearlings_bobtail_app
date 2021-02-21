import React, { forwardRef, useRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { updateAnnotationStore } from '../../../../redux/annotation/action'
import { updateIsAnchorMoused } from '../../../../redux/hover/action'
import StopPropagationDispatcher from '../../../../dispatchers/StopPropagation'
import WikiDispatcher from '../../../../dispatchers/Wiki'
import Anchor from '../../../Anchor'
import { REFERENCE_BIT } from '../../../../constants/dots'
import { ANCHOR_SCROLL } from '../../../../constants/scroll'
import {
    mapIsAccessedIndexedAnchorShown,
    mapAccessedAnnotationIndex,
    mapAccessedWikiWormholeIndex,
} from '../../../../redux/access/selector'
import {
    mapLyricAnnotationIndex,
    getMapIsLyricAnnotation,
} from '../../../../redux/lyric/selector'
import { mapIsLyricsLocked } from '../../../../redux/slider/selector'
import './style'

const TextLyricAnchor = forwardRef(({
    annotationIndex,
    wikiIndex,
    wikiAnnotationIndex,
    text,
    dotsBit,
    isVerseLyric,
    isItalic,
    isEmphasis,
    beginsVerse,
    endsVerse,

}, ref) => {
    const
        dispatch = useDispatch(),
        dispatchWiki = useRef(),
        stopPropagation = useRef(),
        isAccessedIndexedAnchorShown = useSelector(mapIsAccessedIndexedAnchorShown),
        accessedAnnotationIndex = useSelector(mapAccessedAnnotationIndex),
        accessedWikiWormholeIndex = useSelector(mapAccessedWikiWormholeIndex),
        isSelected = useSelector(getMapIsLyricAnnotation(annotationIndex)),
        lyricAnnotationIndex = useSelector(mapLyricAnnotationIndex),
        isLyricsLocked = useSelector(mapIsLyricsLocked),
        isWikiTextAnchor = Boolean(wikiIndex)

    let isAccessed = false

    // TODO: Make this a selector.
    if (isAccessedIndexedAnchorShown) {
        if (lyricAnnotationIndex) {
            isAccessed =
                // Check that we're in the annotation that's selected.
                lyricAnnotationIndex === wikiAnnotationIndex &&
                accessedWikiWormholeIndex === wikiIndex

        } else {
            isAccessed =
                accessedAnnotationIndex === annotationIndex
        }
    }

    const handleAnchorClick = e => {
        if (isSelected || isLyricsLocked) {
            return false
        }

        // Stop propagation if anchor click is valid.
        stopPropagation.current(e)

        if (wikiIndex) {
            return dispatchWiki.current(wikiIndex, wikiAnnotationIndex)
        }

        if (annotationIndex) {
            dispatch(updateAnnotationStore({
                queuedAnnotationIndex: annotationIndex,
                queuedAnnotationFromLyricVerse: true,
            }))
            return true
        }
    }

    const handleAnchorMouse = isMoused => {
        // If selected or lyrics are locked, only dispatch exit, not enter.
        if (
            (!isSelected && !isLyricsLocked) ||
            !isMoused
        ) {
            dispatch(updateIsAnchorMoused(isMoused))
        }
    }

    const setRef = node => {
        if (ref) {
            ref.current = ref.current || { anchor: {}, verse: {} }
            ref.current.anchor[annotationIndex] = node
        }
    }

    return (
        <>
            {/* This space will not show if it starts the verse line. */}
            {' '}
            <Anchor
                {...{
                    ref: setRef,
                    className: cx(
                        annotationIndex &&
                            `${ANCHOR_SCROLL}__${annotationIndex}`,

                        wikiIndex && `wiki__${wikiIndex}`
                    ),
                    analyticsLabel: wikiIndex ? 'wiki' : 'lyric',
                    isAccessed,
                    isSelected,
                    isLyric: !isWikiTextAnchor,
                    isWikiTextAnchor,
                    text,
                    textConfig: {
                        isVerseLyric,
                        isItalic,
                        isEmphasis,
                        beginsVerse,
                        endsVerse,
                    },
                    dotsBit: isWikiTextAnchor ? REFERENCE_BIT : dotsBit,
                    handleAnchorClick,
                    handleAnchorMouse,
                }}
            />
            {isWikiTextAnchor && (
                <WikiDispatcher {...{ ref: dispatchWiki }} />
            )}
            <StopPropagationDispatcher {...{ ref: stopPropagation }} />
        </>
    )
})

TextLyricAnchor.propTypes = {
    wikiIndex: PropTypes.number,
    wikiAnnotationIndex: PropTypes.number,
    annotationIndex: PropTypes.number,
    text: PropTypes.oneOfType([
        PropTypes.string,
        // "Bobtail's words" in M is an array.
        PropTypes.array,
        // "Ubermensch" in Golden Cord is an object.
        PropTypes.object,
    ]).isRequired,
    isVerseLyric: PropTypes.bool,
    isItalic: PropTypes.bool,
    isEmphasis: PropTypes.bool,
    beginsVerse: PropTypes.bool,
    endsVerse: PropTypes.bool,
    dotsBit: PropTypes.number,
}

export default memo(TextLyricAnchor)
