// Component to show all wormholes for each annotation.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import AnnotationWormhole from './Wormhole'
import { getSourceWormholeIndices } from '../../../../album/api/wormholes'
import { mapAccessedWikiWormholeIndex } from '../../../../redux/access/selectors'
import { mapLyricSongIndex } from '../../../../redux/lyric/selectors'
import './style'

const AnnotationWormholes = ({
    isSelected,
    annotationIndex

}) => {
    const
        accessedWikiWormholeIndex = useSelector(mapAccessedWikiWormholeIndex),
        lyricSongIndex = useSelector(mapLyricSongIndex)

    /**
     * Iterating through multiple source wormhole indices is necessary only
     * because of the "shiv" wormhole.
     */
    return getSourceWormholeIndices(
        lyricSongIndex,
        annotationIndex

    ).map((sourceWormholeIndex, wormholeLinkIndex) => {
        const isAccessed = accessedWikiWormholeIndex === sourceWormholeIndex

        return (
            <AnnotationWormhole
                {...{
                    key: wormholeLinkIndex,
                    annotationIndex,
                    wormholeLinkIndex,
                    isAccessedShown: isAccessed && isSelected
                }}
            />
        )
    })
}

AnnotationWormholes.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    annotationIndex: PropTypes.number.isRequired
}

export default memo(AnnotationWormholes)
