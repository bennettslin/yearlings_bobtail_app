// Component to show single dot anchor as its own stanza.
import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import Anchor from '../../Anchor'
import UnitDotParent from './Parent'
import { getDotForUnit } from '../../../endpoint/album/units'
import { updateAnnotationStore } from '../../../redux/annotation/action'
import { ANCHOR_SCROLL } from '../../../constants/scroll'
import { getMapIsAnnotationAccessed } from '../../../redux/access/selector'
import { mapIsActivated } from '../../../redux/activated/selector'
import { getMapHasSelectedDot } from '../../../redux/dots/selector'
import {
    mapLyricSongIndex,
    getMapIsLyricAnnotation,
} from '../../../redux/lyric/selector'
import { mapIsSliderMoving } from '../../../redux/slider/selector'
import './style'

export const UnitDot = forwardRef(({ unitIndex }, ref) => {
    const
        dispatch = useDispatch(),
        lyricSongIndex = useSelector(mapLyricSongIndex),
        isActivated = useSelector(mapIsActivated),
        isSliderMoving = useSelector(mapIsSliderMoving),
        {
            annotationIndex,
            dotsBit,
        } = getDotForUnit(lyricSongIndex, unitIndex),
        hasSelectedDot = useSelector(getMapHasSelectedDot(dotsBit)),
        isAccessed = useSelector(getMapIsAnnotationAccessed(annotationIndex)),
        isSelected = useSelector(getMapIsLyricAnnotation(annotationIndex))

    const handleAnchorClick = () => {
        if (isSelected || isSliderMoving || isActivated) {
            return false
        }

        dispatch(updateAnnotationStore({
            queuedAnnotationIndex: annotationIndex,
        }))
        return true
    }

    const setRef = node => {
        if (ref) {
            ref.current = ref.current || { anchor: {}, verse: {} }
            ref.current.anchor[annotationIndex] = node
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
                    `${ANCHOR_SCROLL}__${annotationIndex}`,
                ),
            }}
        >
            {/* Scroll to unit dot at bottom, not unit middle. */}
            <Anchor
                {...{
                    ref: setRef,
                    analyticsLabel: 'unitDot',
                    hasSelectedDot,
                    dotsBit,
                    isSelected,
                    isAccessed,
                    annotationIndex,
                    handleAnchorClick,
                }}
            />
        </div>
    )
})

UnitDot.propTypes = {
    unitIndex: PropTypes.number.isRequired,
}

export default memo(UnitDotParent)
