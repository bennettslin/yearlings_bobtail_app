import React from 'react'
import PropTypes from 'prop-types'
import Carousel from '../../components/Carousel'
import Lyric from '../../components/Lyric'
import Overview from '../../components/Overview'

/**
 * This returns the same component for each page, differing only by song
 * index. Extracting into a getter function to avoid repeating code.
 */
const AlbumPageComponent = ({
    pageSongIndex,
    isCarousel,
    isLyric,
    isOverview

}) => {
    if (isCarousel) {
        return (
            <Carousel {...{ pageSongIndex }} />
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

AlbumPageComponent.propTypes = {
    pageSongIndex: PropTypes.number.isRequired,
    isCarousel: PropTypes.bool,
    isLyric: PropTypes.bool,
    isOverview: PropTypes.bool
}

const getAlbumPageComponent = pageSongIndex => () => (
    <AlbumPageComponent {...{ pageSongIndex }} />
)

export default getAlbumPageComponent
