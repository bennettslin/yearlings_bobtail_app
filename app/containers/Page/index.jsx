import React from 'react'
import PropTypes from 'prop-types'
import CarouselScroll from '../../components/Carousel/Scroll'
import Lyric from '../../components/Lyric'
import Overview from '../../components/Overview'

const getPageComponent = pageSongIndex => {
    /**
     * This returns the same component for each page, differing only by song
     * index. Extracting into a getter function to avoid repeating code.
     */
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

export default getPageComponent
