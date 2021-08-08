// Section to show all song annotations in a carousel layout.
import React, { useEffect, useRef, memo } from 'react'
import PropTypes from 'prop-types'
import getSongServerClientHoc from '../../../hocs/SongHoc'
import ScrollCarouselListener from '../../../handlers/Scroll/Carousel'
import CarouselAnnotation from '../Annotation'
import { getAnnotationIndices } from '../../../endpoint/album/annotations'
import './style'

const CarouselScroll = ({ serverClientSongIndex }) => {
    const
        carouselScrollElement = useRef(),
        carouselScrollChildren = useRef()

    const getCarouselScrollElement = () => (
        carouselScrollElement.current
    )

    const getCarouselScrollChild = index => (
        carouselScrollChildren.current[index]
    )

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
                        }}
                    />
                ))
            }
        </div>
    )
}

CarouselScroll.propTypes = {
    serverClientSongIndex: PropTypes.number.isRequired,
}

export default memo(getSongServerClientHoc(CarouselScroll))
