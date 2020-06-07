// Component to show single dot anchor as its own stanza.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import Anchor from '../../Anchor'
import UnitDotParent from './Parent'
import { getDotForUnit } from '../../../api/album/units'
import { getPrefixedDotLetterClassNames } from '../../../helpers/dot'
import { updateAnnotationStore } from '../../../redux/annotation/action'
import { LYRIC_ANNOTATION_SCROLL } from '../../../constants/scroll'
import { mapIsAnnotationAccessed } from '../../../redux/access/selectors'
import { mapIsActivated } from '../../../redux/activated/selectors'
import {
    mapLyricSongIndex,
    mapIsSelectedLyricAnnotation
} from '../../../redux/lyric/selectors'
import { mapIsSliderMoving } from '../../../redux/slider/selectors'
import './style'

export const UnitDot = ({
    unitIndex,
    setLyricAnnotationElement

}) => {
    const
        dispatch = useDispatch(),
        lyricSongIndex = useSelector(mapLyricSongIndex),
        isActivated = useSelector(mapIsActivated),
        isSliderMoving = useSelector(mapIsSliderMoving),
        {
            annotationIndex,
            dotBit
        } = getDotForUnit(lyricSongIndex, unitIndex),
        isAccessed = useSelector(mapIsAnnotationAccessed(annotationIndex)),
        isSelected = useSelector(mapIsSelectedLyricAnnotation(annotationIndex))

    const handleAnchorClick = () => {
        if (isSelected || isSliderMoving || isActivated) {
            return false
        }

        dispatch(updateAnnotationStore({
            queuedAnnotationIndex: annotationIndex
        }))
        return true
    }

    const setAnnotationForUnit = node => {
        setLyricAnnotationElement({
            node,
            index: annotationIndex
        })
    }

    return (
        <div
            {...{
                className: cx(
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
                )
            }}
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
