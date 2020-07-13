// Container to show single annotation in carousel.
import React, { forwardRef, memo } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../../DidMountHoc'
import getFinalSideHoc from '../../FinalSideHoc'
import Annotation from '../../Annotation'
import { getDotsBitForAnnotation } from '../../../api/album/annotations'
import { CAROUSEL_SCROLL } from '../../../constants/scroll'
import { getCarouselAnnotationData } from './helper'
import { getMapIsAnnotationAccessed } from '../../../redux/access/selector'
import { getMapHasSelectedDot } from '../../../redux/dots/selector'
import { getMapIsLyricAnnotation } from '../../../redux/lyric/selector'
import './style'

const CarouselAnnotation = forwardRef(({
    didMount,
    finalSideSongIndex,
    annotationIndex
}, ref) => {
    const
        isAccessed = useSelector(getMapIsAnnotationAccessed(annotationIndex)),
        isSelected = useSelector(getMapIsLyricAnnotation(annotationIndex)),
        dotsBit = getDotsBitForAnnotation(
            finalSideSongIndex,
            annotationIndex
        ),
        columnKey = getCarouselAnnotationData(
            finalSideSongIndex,
            annotationIndex
        ),
        hasSelectedDot = useSelector(getMapHasSelectedDot(dotsBit))

    const setRef = node => {
        ref.current = ref.current || {}
        ref.current[annotationIndex] = node
    }

    return (
        <div
            {...{
                key: annotationIndex,
                ref: setRef,
                ...didMount && {
                    className: cx(
                        'CarouselAnnotation',
                        hasSelectedDot && 'CarouselAnnotation__shown',

                        `${CAROUSEL_SCROLL}__${annotationIndex}`,

                        columnKey &&
                            `CarouselAnnotation__inEarColumn__${columnKey}`,
                        'ovH'
                    )
                }
            }}
        >
            <Annotation
                inCarousel
                {...{
                    isAccessed,
                    isSelected,
                    annotationIndex
                }}
            />
        </div>
    )
})

CarouselAnnotation.propTypes = {
    didMount: PropTypes.bool.isRequired,
    finalSideSongIndex: PropTypes.number.isRequired,
    annotationIndex: PropTypes.number.isRequired
}

export default memo(getDidMountHoc(getFinalSideHoc(CarouselAnnotation)))
