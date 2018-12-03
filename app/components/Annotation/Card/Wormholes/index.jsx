// Component to show all wormholes for each annotation.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AnnotationWormhole from './Wormhole'
import { getPropsAreShallowEqual } from 'helpers/general'
import { getAnnotationCardWormholeLinksArray } from './helper'

const mapStateToProps = ({
    renderStore: { canCarouselRender },
    renderedStore: { renderedSongIndex },
    accessStore: { accessedWikiWormholeIndex }
}) => ({
    canCarouselRender,
    renderedSongIndex,
    accessedWikiWormholeIndex
})

class AnnotationWormholes extends Component {

    static propTypes = {
        // Through Redux.
        canCarouselRender: PropTypes.bool.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,
        accessedWikiWormholeIndex: PropTypes.number.isRequired,

        // From parent.
        isSelected: PropTypes.bool.isRequired,
        annotationIndex: PropTypes.number.isRequired,
        cardIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canCarouselRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps,
            alwaysBypassCheck: {
                cardIndex: true
            }
        })
    }

    render() {
        const {
                renderedSongIndex,
                accessedWikiWormholeIndex,
                isSelected,
                annotationIndex,
                cardIndex
            } = this.props,

            wormholeLinksArray = getAnnotationCardWormholeLinksArray({
                songIndex: renderedSongIndex,
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
