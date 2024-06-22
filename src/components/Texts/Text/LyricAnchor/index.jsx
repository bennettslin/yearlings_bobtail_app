import React, { forwardRef, useRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { updateAnnotationStore } from '../../../../redux/annotation/action'
import { updateIsAnchorMoused } from '../../../../redux/hover/action'
import StopPropagationDispatcher from '../../../../dispatchers/StopPropagation'
import WikiDispatcher from '../../../../dispatchers/Wiki'
import Anchor from '../../../Anchor'
import { REFERENCE_BIT } from '../../../../helpers/dot'
import { ANCHOR_SCROLL } from '../../../../constants/scroll'
import { getMapIsLyricAnchorAccessed } from '../../../../redux/access/selector'
import {
    getMapIsLyricAnnotation,
} from '../../../../redux/lyric/selector'
import './style'

const TextLyricAnchor = forwardRef(({
    annotationIndex,
    wikiAnnotationIndex,
    wikiIndex,
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
        isSelected = useSelector(getMapIsLyricAnnotation(annotationIndex)),
        isLyricAnchorAccessed = useSelector(getMapIsLyricAnchorAccessed({
            annotationIndex,
            wikiAnnotationIndex,
            wikiIndex,
        })),
        isWikiAnchor = Boolean(wikiIndex)

    const handleAnchorClick = e => {
        if (isSelected) {
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
        // If selected, only dispatch exit, not enter.
        if (!isSelected || !isMoused) {
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
            <Anchor
                {...{
                    ref: setRef,
                    className: cx(
                        annotationIndex &&
                            `${ANCHOR_SCROLL}__${annotationIndex}`,

                        wikiIndex && `wiki__${wikiIndex}`,
                    ),
                    analyticsLabel: wikiIndex ? 'wiki' : 'lyric',
                    isAccessed: isLyricAnchorAccessed,
                    isSelected,
                    isLyric: !isWikiAnchor,
                    isWikiAnchor,
                    text,
                    textConfig: {
                        isVerseLyric,
                        isItalic,
                        isEmphasis,
                        beginsVerse,
                        endsVerse,
                    },
                    dotsBit: isWikiAnchor ? REFERENCE_BIT : dotsBit,
                    handleAnchorClick,
                    handleAnchorMouse,
                }}
            />
            {isWikiAnchor && (
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
