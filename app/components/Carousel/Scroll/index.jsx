// Section to show all song annotations in a carousel layout.
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateEntranceStore } from '../../../redux/entrance/action'
import Transition from 'react-transition-group/Transition'
import ScrollCarouselListener from '../../../listeners/Scroll/Carousel'
import CarouselAnnotation from '../Annotation'
import { getAnnotationIndices } from '../../../api/album/annotations'
import { mapCanLyricCarouselUpdate } from '../../../redux/entrance/selectors'
import { mapLyricSongIndex } from '../../../redux/lyric/selectors'
import './style'

const CarouselScroll = () => {
    const
        dispatch = useDispatch(),
        carouselScrollElement = useRef(),
        carouselScrollChildren = useRef(),
        canLyricCarouselUpdate = useSelector(mapCanLyricCarouselUpdate),
        lyricSongIndex = useSelector(mapLyricSongIndex)

    const _handleTransitionEntered = () => {
        logTransition('Carousel did update from CarouselScroll.')
        dispatch(updateEntranceStore({ didCarouselUpdate: true }))
    }

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
        <Transition
            {...{
                in: canLyricCarouselUpdate,
                timeout: 200,
                onEntered: _handleTransitionEntered
            }}
        >
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
        </Transition>
    )
}

export default CarouselScroll
