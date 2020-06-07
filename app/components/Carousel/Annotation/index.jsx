// Container to show single annotation in carousel.
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Annotation from '../../Annotation'
import { getDotBitForAnnotation } from '../../../api/album/annotations'
import { CAROUSEL_SCROLL } from '../../../constants/scroll'
import { getPrefixedDotLetterClassNames } from '../../../helpers/dot'
import { getCarouselAnnotationData } from './helper'
import { getMapIsAnnotationAccessed } from '../../../redux/access/selectors'
import {
    mapLyricSongIndex,
    getMapIsLyricAnnotation
} from '../../../redux/lyric/selectors'
import './style'

const CarouselAnnotation = ({
    annotationIndex,
    setCarouselAnnotationChild

}) => {
    const
        isAccessed = useSelector(getMapIsAnnotationAccessed(annotationIndex)),
        isSelected = useSelector(getMapIsLyricAnnotation(annotationIndex)),
        lyricSongIndex = useSelector(mapLyricSongIndex),

        // TODO: Make this a selector.
        annotationDotBit = getDotBitForAnnotation(
            lyricSongIndex,
            annotationIndex
        ),
        columnKey = getCarouselAnnotationData({
            songIndex: lyricSongIndex,
            annotationIndex
        })

    const setCarouselAnnotationElement = node => {
        setCarouselAnnotationChild({
            node,
            index: annotationIndex
        })
    }

    return (
        <div
            {...{
                key: annotationIndex,
                ref: setCarouselAnnotationElement,
                className: cx(
                    'CarouselAnnotation',

                    `${CAROUSEL_SCROLL}__${annotationIndex}`,

                    columnKey &&
                        `CarouselAnnotation__inEarColumn__${columnKey}`,

                    getPrefixedDotLetterClassNames(
                        annotationDotBit,
                        // "Child carousel annotation letter."
                        'CcA'
                    ),
                    'ovH'
                )
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
}

CarouselAnnotation.propTypes = {
    annotationIndex: PropTypes.number.isRequired,
    setCarouselAnnotationChild: PropTypes.func.isRequired
}

export default memo(CarouselAnnotation)
