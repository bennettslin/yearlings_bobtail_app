import React from 'react'
import PropTypes from 'prop-types'
import Carousel from '../../components/Carousel'
import Lyric from '../../components/Lyric'
import Overview from '../../components/Overview'

const AlbumPage = ({
    isCarousel,
    isLyric,
    isOverview,
    pageContext: {
        pageSongIndex = 0,
    } = {},

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

AlbumPage.propTypes = {
    isCarousel: PropTypes.bool,
    isLyric: PropTypes.bool,
    isOverview: PropTypes.bool,
    pageContext: PropTypes.shape({
        pageSongIndex: PropTypes.number,
    }),
}
export default AlbumPage
