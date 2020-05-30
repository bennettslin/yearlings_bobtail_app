// Component to show all wormholes for each annotation.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import AnnotationWormhole from './Wormhole'
import { getWormholeLinksForAnnotationCard } from '../../../../album/api/annotations'
import { ACCESSED_WIKI_WORMHOLE_INDEX_SELECTOR } from '../../../../redux/access/selectors'
import { LYRIC_SONG_INDEX_SELECTOR } from '../../../../redux/lyric/selectors'
import './style'

const AnnotationWormholes = ({
    isSelected,
    annotationIndex,
    cardIndex
}) => {
    const
        accessedWikiWormholeIndex = useSelector(ACCESSED_WIKI_WORMHOLE_INDEX_SELECTOR),
        lyricSongIndex = useSelector(LYRIC_SONG_INDEX_SELECTOR)

    const
        wormholeLinks = getWormholeLinksForAnnotationCard(
            lyricSongIndex,
            annotationIndex,
            cardIndex
        )

    return wormholeLinks.map((wormholeObject, wormholeLinkIndex) => {
        /**
         * The wormholeLinkIndex is solely to fetch the wormhole object
         * from the data helper when there are two wormholes in the same
         * annotation. This happens only once, with "shiv."
         */
        const
            { sourceWormholeIndex } = wormholeObject,
            isAccessed = accessedWikiWormholeIndex === sourceWormholeIndex

        return (
            <AnnotationWormhole
                {...{
                    key: wormholeLinkIndex,
                    wormholeLinkIndex,
                    isAccessed,
                    isSelected,
                    annotationIndex,
                    cardIndex
                }}
            />
        )
    })
}

AnnotationWormholes.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    annotationIndex: PropTypes.number.isRequired,
    cardIndex: PropTypes.number.isRequired
}

export default memo(AnnotationWormholes)
