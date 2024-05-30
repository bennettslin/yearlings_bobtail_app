// Section to show all song annotations in a carousel layout.
import React, { useEffect, useRef, memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import getSongServerClientHoc from '../../../hocs/SongHoc'
import CarouselAnnotation from '../Annotation'
import StopPropagationDispatcher from '../../../dispatchers/StopPropagation'
import ScrollCarouselListener from '../../../handlers/Scroll/Carousel'
import { mapSelectedAnnotationIndex } from '../../../redux/selected/selector'
import { getAnnotationIndices } from '../../../endpoint/album/annotations'
import './style'

const CarouselScroll = ({ serverClientSongIndex }) => {
    const
        stopPropagation = useRef(),
        carouselScrollElement = useRef(),
        carouselScrollChildren = useRef(),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex)

    const getCarouselScrollElement = () => (
        carouselScrollElement.current
    )

    const getCarouselScrollChild = index => (
        carouselScrollChildren.current[index]
    )

    const handleAnnotationClick = ({ e, annotationIndex }) => {
        if (
            // Always stop propagation if clicking selected annotation…
            annotationIndex === selectedAnnotationIndex ||

            // … And also if clicking any annotation when none is selected.
            !selectedAnnotationIndex
        ) {
            stopPropagation.current(e)
        }
    }

    useEffect(() => {
        logMount('CarouselScroll')
    }, [])

    return (
        <div
            {...{
                ref: carouselScrollElement,
                className: 'CarouselScroll',
            }}
        >
            <ScrollCarouselListener {...{
                getCarouselScrollElement,
                getCarouselScrollChild,
            }} />
            {getAnnotationIndices(serverClientSongIndex)
                .map(annotationIndex => (
                    <CarouselAnnotation
                        {...{
                            key: annotationIndex,
                            ref: carouselScrollChildren,
                            annotationIndex,
                            handleAnnotationClick,
                        }}
                    />
                ))
            }
            <StopPropagationDispatcher {...{ ref: stopPropagation }} />
        </div>
    )
}

CarouselScroll.propTypes = {
    serverClientSongIndex: PropTypes.number.isRequired,
}

export default memo(getSongServerClientHoc(CarouselScroll))
