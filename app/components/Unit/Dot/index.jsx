// Component to show single dot anchor as its own stanza.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import Anchor from '../../Anchor'
import UnitDotParent from './Parent'
import { getDotForUnit } from '../../../album/api/units'
import { getPrefixedDotLetterClassNames } from '../../../helpers/dot'
import { updateAnnotationStore } from '../../../redux/annotation/action'
import { LYRIC_ANNOTATION_SCROLL } from '../../../constants/scroll'
import {
    IS_ACCESSED_INDEXED_ANCHOR_SHOWN_SELECTOR,
    ACCESSED_ANNOTATION_INDEX_SELECTOR
} from '../../../redux/access/selectors'
import { IS_ACTIVATED_SELECTOR } from '../../../redux/activated/selectors'
import {
    LYRIC_SONG_INDEX_SELECTOR,
    LYRIC_ANNOTATION_INDEX_SELECTOR
} from '../../../redux/lyric/selectors'
import { IS_SLIDER_MOVING_SELECTOR } from '../../../redux/slider/selectors'
import './logic'
import './style'

export const UnitDot = ({
    unitIndex,
    setLyricAnnotationElement

}) => {
    const
        dispatch = useDispatch(),
        lyricSongIndex = useSelector(LYRIC_SONG_INDEX_SELECTOR),
        lyricAnnotationIndex = useSelector(LYRIC_ANNOTATION_INDEX_SELECTOR),
        isAccessedIndexedAnchorShown = useSelector(IS_ACCESSED_INDEXED_ANCHOR_SHOWN_SELECTOR),
        accessedAnnotationIndex = useSelector(ACCESSED_ANNOTATION_INDEX_SELECTOR),
        isActivated = useSelector(IS_ACTIVATED_SELECTOR),
        isSliderMoving = useSelector(IS_SLIDER_MOVING_SELECTOR),
        {
            annotationIndex,
            dotBit
        } = getDotForUnit(lyricSongIndex, unitIndex),

        isAccessed =
            isAccessedIndexedAnchorShown &&
            annotationIndex === accessedAnnotationIndex,

        isSelected =
            annotationIndex === lyricAnnotationIndex,

        handleAnchorClick = () => {
            if (isSelected || isSliderMoving || isActivated) {
                return false
            }

            dispatch(updateAnnotationStore({
                queuedAnnotationIndex: annotationIndex
            }))
            return true
        },

        setAnnotationForUnit = node => {
            setLyricAnnotationElement({
                node,
                index: annotationIndex
            })
        }

    return (
        <div
            className={cx(
                'UnitDot',
                'Unit__column',

                // Scroll to dot stanza block upon annotation selection.
                annotationIndex &&
                `${LYRIC_ANNOTATION_SCROLL}__${annotationIndex}`,

                // Show and hide dot stanza block in and out based on dot keys.
                getPrefixedDotLetterClassNames(
                    dotBit,
                    // "Child unit dot letter."
                    'CuD'
                )
            )}
        >
            {/* Scroll to unit dot at bottom, not unit middle. */}
            <Anchor
                {...{
                    stanzaDotBit: dotBit,
                    isSelected,
                    isAccessed,
                    annotationIndex,
                    handleAnchorClick,
                    setLyricAnnotationElement: setAnnotationForUnit
                }}
            />
        </div>
    )
}

export const propTypes = {
    unitIndex: PropTypes.number.isRequired,
    setLyricAnnotationElement: PropTypes.func.isRequired
}

UnitDot.propTypes = propTypes

export default memo(UnitDotParent)
