// Component to show all wormholes for each annotation.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AnnotationWormhole from './Wormhole'
import { getCardWormholeLinksArray } from 'helpers/wormhole'

const mapStateToProps = ({
    lyricStore: { lyricSongIndex },
    accessStore: { accessedWikiWormholeIndex }
}) => ({
    lyricSongIndex,
    accessedWikiWormholeIndex
})

class AnnotationWormholes extends PureComponent {

    static propTypes = {
        // Through Redux.
        lyricSongIndex: PropTypes.number.isRequired,
        accessedWikiWormholeIndex: PropTypes.number.isRequired,

        // From parent.
        isSelected: PropTypes.bool.isRequired,
        annotationIndex: PropTypes.number.isRequired,
        cardIndex: PropTypes.number.isRequired
    }

    render() {
        const {
                lyricSongIndex,
                accessedWikiWormholeIndex,
                isSelected,
                annotationIndex,
                cardIndex
            } = this.props,

            wormholeLinksArray = getCardWormholeLinksArray({
                songIndex: lyricSongIndex,
                annotationIndex,
                cardIndex
            })

        return wormholeLinksArray.map((wormholeObject, wormholeLinkIndex) => {
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
                    key={wormholeLinkIndex}
                    {...{
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
}

export default connect(mapStateToProps)(AnnotationWormholes)
