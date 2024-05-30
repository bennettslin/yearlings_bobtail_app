// Container to show single annotation in carousel.
import React, { forwardRef, memo } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import getSongServerClientHoc from '../../../hocs/SongHoc'
import Annotation from '../../Annotation'
import { getDotsBitForAnnotation } from '../../../endpoint/album/annotations'
import { CAROUSEL_SCROLL } from '../../../constants/scroll'
import { getCarouselAnnotationData } from './helper'
import { getMapIsAnnotationAccessed } from '../../../redux/access/selector'
import { getMapHasSelectedDot } from '../../../redux/dots/selector'
import { getMapIsLyricAnnotation } from '../../../redux/lyric/selector'
import './style'

const CarouselAnnotation = forwardRef(({
    didMount,
    serverClientSongIndex,
    annotationIndex,
    handleAnnotationClick,
}, ref) => {
    const
        isAccessed = useSelector(getMapIsAnnotationAccessed(annotationIndex)),
        isSelected = useSelector(getMapIsLyricAnnotation(annotationIndex)),
        dotsBit = getDotsBitForAnnotation(
            serverClientSongIndex,
            annotationIndex,
        ),
        columnKey = getCarouselAnnotationData(
            serverClientSongIndex,
            annotationIndex,
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
                        'ovH',
                    ),
                },
            }}
        >
            <Annotation
                inCarousel
                {...{
                    isAccessed,
                    isSelected,
                    annotationIndex,
                    handleAnnotationClick,
                }}
            />
        </div>
    )
})

CarouselAnnotation.propTypes = {
    didMount: PropTypes.bool.isRequired,
    serverClientSongIndex: PropTypes.number.isRequired,
    annotationIndex: PropTypes.number.isRequired,
    handleAnnotationClick: PropTypes.func.isRequired,
}

export default memo(getDidMountHoc(getSongServerClientHoc(CarouselAnnotation)))
