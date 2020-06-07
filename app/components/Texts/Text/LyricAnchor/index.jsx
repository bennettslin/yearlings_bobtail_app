// Container for text anchor.
import React, { useRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { updateAnnotationStore } from '../../../../redux/annotation/action'
import StopPropagationDispatcher from '../../../../dispatchers/StopPropagation'
import WikiDispatcher from '../../../../dispatchers/WikiDispatcher'
import Anchor from '../../../Anchor'
import { REFERENCE_BIT } from '../../../../constants/dots'
import { LYRIC_ANNOTATION_SCROLL } from '../../../../constants/scroll'
import {
    mapIsAccessedIndexedAnchorShown,
    mapAccessedAnnotationIndex,
    mapAccessedWikiWormholeIndex
} from '../../../../redux/access/selectors'
import { mapIsActivated } from '../../../../redux/activated/selectors'
import { mapLyricAnnotationIndex, getMapIsLyricAnnotation } from '../../../../redux/lyric/selectors'
import { mapIsSliderMoving } from '../../../../redux/slider/selectors'
import './style'

const TextLyricAnchor = ({
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
    setLyricAnnotationChild

}) => {
    const
        dispatch = useDispatch(),
        dispatchWiki = useRef(),
        stopPropagation = useRef(),
        isAccessedIndexedAnchorShown = useSelector(mapIsAccessedIndexedAnchorShown),
        accessedAnnotationIndex = useSelector(mapAccessedAnnotationIndex),
        accessedWikiWormholeIndex = useSelector(mapAccessedWikiWormholeIndex),
        isActivated = useSelector(mapIsActivated),
        isSelected = useSelector(getMapIsLyricAnnotation(annotationIndex)),
        lyricAnnotationIndex = useSelector(mapLyricAnnotationIndex),
        isSliderMoving = useSelector(mapIsSliderMoving),
        isWikiTextAnchor = Boolean(wikiIndex)

    let isAccessed = false

    const handleAnchorClick = e => {
        if (isSelected || isSliderMoving || isActivated) {
            return false
        }

        // Stop propagation if anchor click is valid.
        stopPropagation.current(e)

        if (wikiIndex) {
            return dispatchWiki.current(
                wikiIndex,
                wikiAnnotationIndex
            )
        }

        if (annotationIndex) {
            dispatch(updateAnnotationStore({
                queuedAnnotationIndex: annotationIndex,
                queuedAnnotationFromLyricVerse: true
            }))
            return true
        }
    }

    const setLyricAnnotationElement = node => {
        if (node) {
            setLyricAnnotationChild({
                node,
                index: annotationIndex
            })
        }
    }

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

    return (
        <>
            {/* This space will not show if it starts the verse line. */}
            {' '}
            <Anchor
                {...{
                    className: cx(
                        annotationIndex &&
                            `${LYRIC_ANNOTATION_SCROLL}__${annotationIndex}`,

                        wikiIndex && `wiki__${wikiIndex}`
                    ),
                    isAccessed,
                    isSelected,
                    isWikiTextAnchor,
                    text,
                    textConfig: {
                        isVerseLyric,
                        isItalic,
                        isEmphasis,
                        beginsVerse,
                        endsVerse
                    },
                    dotsBit: isWikiTextAnchor ? REFERENCE_BIT : dotsBit,
                    handleAnchorClick,

                    /**
                     * This method is only passed down by stanza, not carousel
                     * annotation.
                     */
                    ...setLyricAnnotationChild && {
                        setLyricAnnotationElement
                    }
                }}
            />
            {isWikiTextAnchor && (
                <WikiDispatcher {...{ ref: dispatchWiki }} />
            )}
            <StopPropagationDispatcher {...{ ref: stopPropagation }} />
        </>
    )
}

TextLyricAnchor.propTypes = {
    wikiIndex: PropTypes.number,
    wikiAnnotationIndex: PropTypes.number,
    annotationIndex: PropTypes.number,
    text: PropTypes.oneOfType([
        PropTypes.string,
        // "Bobtail's words" in M is an array.
        PropTypes.array,
        // "Ubermensch" in Golden Cord is an object.
        PropTypes.object
    ]).isRequired,
    isVerseLyric: PropTypes.bool,
    isItalic: PropTypes.bool,
    isEmphasis: PropTypes.bool,
    beginsVerse: PropTypes.bool,
    endsVerse: PropTypes.bool,
    dotsBit: PropTypes.number,
    setLyricAnnotationChild: PropTypes.func,
    handleAnchorClick: PropTypes.func
}

export default memo(TextLyricAnchor)
