import React from 'react'
import PropTypes from 'prop-types'
import CarouselScroll from '../../app/components/Carousel/Scroll'
import Lyric from '../../app/components/Lyric'
import Overview from '../../app/components/Overview'

export const getPageComponent = pageSongIndex => {

    const PageComponent = ({
        isCarousel,
        isLyric,
        isOverview

    }) => {
        if (isCarousel) {
            return (
                <CarouselScroll {...{ pageSongIndex }} />
            )
        }

        if (isLyric) {
            return (
                <Lyric {...{ pageSongIndex }} />
            )
        }

        if (isOverview) {
            return (
                <Overview {...{ pageSongIndex }} />
            )
        }

        return null
    }

    PageComponent.propTypes = {
        isCarousel: PropTypes.bool,
        isLyric: PropTypes.bool,
        isOverview: PropTypes.bool
    }

    return PageComponent
}
