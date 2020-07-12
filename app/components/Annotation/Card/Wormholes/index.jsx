// Component to show all wormholes for each annotation.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import getFinalSideHoc from '../../../FinalSideHoc'
import AnnotationWormhole from './Wormhole'
import { getSourceWormholeIndices } from '../../../../api/album/wormholes'
import { mapAccessedWikiWormholeIndex } from '../../../../redux/access/selector'
import './style'

const AnnotationWormholes = ({
    isSelected,
    finalSideSongIndex,
    annotationIndex

}) => {
    const accessedWikiWormholeIndex = useSelector(mapAccessedWikiWormholeIndex)

    /**
     * Iterating through multiple source wormhole indices is necessary only
     * because of the "shiv" wormhole.
     */
    return getSourceWormholeIndices(
        finalSideSongIndex,
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
    finalSideSongIndex: PropTypes.number.isRequired,
    annotationIndex: PropTypes.number.isRequired
}

export default memo(getFinalSideHoc(AnnotationWormholes))
