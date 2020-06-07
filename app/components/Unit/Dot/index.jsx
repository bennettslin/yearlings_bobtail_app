// Component to show single dot anchor as its own stanza.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import Anchor from '../../Anchor'
import UnitDotParent from './Parent'
import { getDotForUnit } from '../../../api/album/units'
import { updateAnnotationStore } from '../../../redux/annotation/action'
import { LYRIC_ANNOTATION_SCROLL } from '../../../constants/scroll'
import { getMapIsAnnotationAccessed } from '../../../redux/access/selectors'
import { mapIsActivated } from '../../../redux/activated/selectors'
import { getMapHasSelectedDot } from '../../../redux/dots/selectors'
import {
    mapLyricSongIndex,
    getMapIsLyricAnnotation
} from '../../../redux/lyric/selectors'
import { mapIsSliderMoving } from '../../../redux/slider/selectors'
import './style'

export const UnitDot = ({
    unitIndex,
    setLyricAnnotationChild

}) => {
    const
        dispatch = useDispatch(),
        lyricSongIndex = useSelector(mapLyricSongIndex),
        isActivated = useSelector(mapIsActivated),
        isSliderMoving = useSelector(mapIsSliderMoving),
        {
            annotationIndex,
            dotsBit
        } = getDotForUnit(lyricSongIndex, unitIndex),
        hasSelectedDot = useSelector(getMapHasSelectedDot(dotsBit)),
        isAccessed = useSelector(getMapIsAnnotationAccessed(annotationIndex)),
        isSelected = useSelector(getMapIsLyricAnnotation(annotationIndex))

    const handleAnchorClick = () => {
        if (isSelected || isSliderMoving || isActivated) {
            return false
        }

        dispatch(updateAnnotationStore({
            queuedAnnotationIndex: annotationIndex
        }))
        return true
    }

    const setLyricAnnotationElement = node => {
        if (node) {
            setLyricAnnotationChild({
                node,
                index: annotationIndex
            })
        }
    }

    return (
        <div
            {...{
                className: cx(
                    'UnitDot',
                    'Unit__column',
                    hasSelectedDot && 'UnitDot__shown',

                    // Scroll to dot stanza block upon annotation selection.
                    `${LYRIC_ANNOTATION_SCROLL}__${annotationIndex}`
                )
            }}
        >
            {/* Scroll to unit dot at bottom, not unit middle. */}
            <Anchor
                {...{
                    unitDotsBit: dotsBit,
                    isSelected,
                    isAccessed,
                    annotationIndex,
                    handleAnchorClick,
                    setLyricAnnotationElement
                }}
            />
        </div>
    )
}

export const propTypes = {
    unitIndex: PropTypes.number.isRequired,
    setLyricAnnotationChild: PropTypes.func.isRequired
}

UnitDot.propTypes = propTypes

export default memo(UnitDotParent)
