// Section to show all song annotations in a carousel layout.
import React, { useEffect, useRef, memo } from 'react'
import { useSelector } from 'react-redux'
import ScrollCarouselListener from '../../../handlers/Scroll/Carousel'
import CarouselAnnotation from '../Annotation'
import { getAnnotationIndices } from '../../../api/album/annotations'
import { mapLyricSongIndex } from '../../../redux/lyric/selector'
import './style'

const CarouselScroll = () => {
    const
        carouselScrollElement = useRef(),
        carouselScrollChildren = useRef(),
        lyricSongIndex = useSelector(mapLyricSongIndex)

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
                className: 'CarouselScroll'
            }}
        >
            <ScrollCarouselListener {...{
                getCarouselScrollElement,
                getCarouselScrollChild
            }} />
            {getAnnotationIndices(lyricSongIndex).map(index => {
                const annotationIndex = index + 1

                return (
                    <CarouselAnnotation
                        {...{
                            key: index,
                            ref: carouselScrollChildren,
                            annotationIndex
                        }}
                    />
                )
            })}
        </div>
    )
}

export default memo(CarouselScroll)
