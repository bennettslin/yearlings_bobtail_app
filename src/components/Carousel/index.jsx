// Section to show all song annotations in a carousel layout.
import React, { useEffect, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'
import PageSongIndexContext from '../../contexts/PageSongIndex'
import getDidMountHoc from '../../hocs/DidMountHoc'
import CarouselScroll from './Scroll'
import { updateEntranceStore } from '../../redux/entrance/action'
import { scrollCarouselForSongSelect } from '../../redux/scrollCarousel/action'
import { mapIsSongChangeDone } from '../../redux/entrance/selector'
import { CAROUSEL_LYRICS_ENTERED_AFTER_SONG_CHANGE_DONE_DURATION } from '../../constants/entrance'
import './style'

const Carousel = ({ didMount, pageSongIndex }) => {
    const
        dispatch = useDispatch(),
        isSongChangeDone = useSelector(mapIsSongChangeDone)

    const onExit = () => {
        logTransition('Carousel did exit.')
    }

    const onEntered = () => {
        logTransition('Carousel did enter.')
        dispatch(updateEntranceStore({
            canTransitionAfterSongChange: true,
        }))
    }

    useEffect(() => {
        logMount('Carousel')
        dispatch(scrollCarouselForSongSelect())
    }, [])

    return (
        <PageSongIndexContext.Provider {...{ value: pageSongIndex }}>
            <CSSTransition
                appear
                {...{
                    in: isSongChangeDone,
                    timeout:
                        CAROUSEL_LYRICS_ENTERED_AFTER_SONG_CHANGE_DONE_DURATION,
                    classNames: { enterDone: 'Carousel__visible' },
                    onExit,
                    onEntered,
                }}
            >
                <div
                    {...{
                        className: cx(
                            'Carousel',
                            didMount && [
                                'gradientMask__carousel__desktop',
                            ],
                        ),
                    }}
                >
                    <CarouselScroll />
                </div>
            </CSSTransition>
        </PageSongIndexContext.Provider>
    )
}

Carousel.propTypes = {
    didMount: PropTypes.bool.isRequired,
    pageSongIndex: PropTypes.number,
}

export default memo(getDidMountHoc(Carousel))
