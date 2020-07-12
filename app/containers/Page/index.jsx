import React, { memo } from 'react'
import PropTypes from 'prop-types'
import CarouselScroll from '../../components/Carousel/Scroll'
import Lyric from '../../components/Lyric'
import Overview from '../../components/Overview'

const getPageComponent = pageSongIndex => {

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

    return memo(PageComponent)
}

export default getPageComponent
