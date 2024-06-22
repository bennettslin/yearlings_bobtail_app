import React, { forwardRef, useRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { updateAnnotationStore } from '../../../../redux/annotation/action'
import { updateIsAnchorMoused } from '../../../../redux/hover/action'
import StopPropagationDispatcher from '../../../../dispatchers/StopPropagation'
import WikiDispatcher from '../../../../dispatchers/Wiki'
import Anchor from '../../../Anchor'
import { getWikiUrl } from '../../../../helpers/wiki'
import { getMapIsLyricAnchorAccessed } from '../../../../redux/access/selector'
import { mapIsReduxAdminPage } from '../../../../redux/admin/selector'
import { getMapHasSelectedDot } from '../../../../redux/dots/selector'
import { getMapIsLyricAnnotation } from '../../../../redux/lyric/selector'
import { REFERENCE_BIT } from '../../../../helpers/dot'
import { IS_USER_AGENT_DESKTOP } from '../../../../constants/device'
import { ANCHOR_SCROLL } from '../../../../constants/scroll'
import './style'

const TextLyricAnchor = forwardRef(({
    wikiSongIndex,
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
        isWikiAnchor = Boolean(wikiIndex),
        finalDotsBit = isWikiAnchor ? REFERENCE_BIT : dotsBit,
        hasSelectedDot = useSelector(getMapHasSelectedDot(finalDotsBit)),
        isSelected = useSelector(getMapIsLyricAnnotation(annotationIndex)),
        isLyricAnchorAccessed = useSelector(getMapIsLyricAnchorAccessed({
            annotationIndex,
            wikiAnnotationIndex,
            wikiIndex,
        })),
        isReduxAdminPage = useSelector(mapIsReduxAdminPage)

    const handleAnchorClick = e => {
        if (isSelected) {
            return false
        }

        // Stop propagation if anchor click is valid.
        stopPropagation.current(e)

        if (isWikiAnchor) {
            /**
             * If it's an admin page, or command key is pressed, allow browser
             * to open wiki page in new tab.
             *
             * TODO: I've not tested this in PC.
             */
            if (isReduxAdminPage || e.metaKey || e.ctrlKey) {
                return
            } else {
                e.preventDefault()
            }

            return dispatchWiki.current(wikiIndex, wikiAnnotationIndex)

        } else if (annotationIndex) {
            dispatch(updateAnnotationStore({
                queuedAnnotationIndex: annotationIndex,
                queuedAnnotationFromLyricVerse: true,
            }))
            return true
        }
    }

    const handleAnchorMouse = isMoused => {
        // If selected, only dispatch exit, not enter.
        if (
            !isWikiAnchor &&
            (!isSelected || !isMoused)
        ) {
            /**
             * This is solely to prevent hover over lyric anchor to register as
             * hover over verse, for styling purposes.
             */
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

                        isWikiAnchor && `wiki__${wikiIndex}`,
                    ),
                    analyticsLabel: isWikiAnchor ? 'wiki' : 'lyric',
                    canBePlainText: !isReduxAdminPage,
                    isAccessed: isLyricAnchorAccessed,
                    isSelected,
                    isWikiAnchor,
                    text,
                    textConfig: {
                        isVerseLyric,
                        isItalic,
                        isEmphasis,
                        beginsVerse,
                        endsVerse,
                    },
                    hasSelectedDot,
                    // Only show dot sequence in desktop.
                    showDotSequence: !isWikiAnchor && IS_USER_AGENT_DESKTOP,
                    dotsBit: finalDotsBit,
                    ...isWikiAnchor && {
                        internalLink: getWikiUrl({
                            songIndex: wikiSongIndex,
                            annotationIndex:
                                wikiAnnotationIndex ||
                                annotationIndex,
                            wikiIndex,
                        }),
                    },
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
    wikiSongIndex: PropTypes.number,
    annotationIndex: PropTypes.number,
    wikiAnnotationIndex: PropTypes.number,
    wikiIndex: PropTypes.number,
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
