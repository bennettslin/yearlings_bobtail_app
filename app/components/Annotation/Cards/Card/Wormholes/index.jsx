// Component to show all wormholes for each annotation.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AnnotationWormhole from './Wormhole'
import { SOURCE_WORMHOLE_INDEX } from 'constants/lyrics'
import { getPropsAreShallowEqual } from 'helpers/generalHelper'
import { getAnnotationCardWormholeLinksArray } from './helper'

const mapStateToProps = ({
    renderStore: { canCarouselRender },
    renderedStore: { renderedSongIndex },
    selectedAccessIndex,
    accessedAnnotationAnchorIndex
}) => ({
    canCarouselRender,
    renderedSongIndex,
    selectedAccessIndex,
    accessedAnnotationAnchorIndex
})

class AnnotationWormholes extends Component {

    static propTypes = {
        // Through Redux.
        renderedSongIndex: PropTypes.number.isRequired,
        selectedAccessIndex: PropTypes.number.isRequired,
        accessedAnnotationAnchorIndex: PropTypes.number.isRequired,

        // From parent.
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
                /* eslint-disable no-unused-vars */
                canCarouselRender,
                dispatch,
                /* eslint-enable no-unused-vars */

                renderedSongIndex,
                accessedAnnotationAnchorIndex,
                selectedAccessIndex,
                ...other
            } = this.props,

            {
                annotationIndex,
                cardIndex
            } = other,

            wormholeLinksArray = getAnnotationCardWormholeLinksArray({
                songIndex: renderedSongIndex,
                annotationIndex,
                cardIndex
            })

        return Boolean(wormholeLinksArray) && (
            wormholeLinksArray.map((wormholeObject, wormholeLinkIndex) => {

                /**
                 * The wormholeLinkIndex is solely to fetch the wormhole object
                 * from the data helper when there are two wormholes in the
                 * same annotation. This happens only once, with "shiv."
                 */
                const {
                        [SOURCE_WORMHOLE_INDEX]: sourceWormholeIndex
                    } = wormholeObject,

                    isAccessed = Boolean(selectedAccessIndex) &&
                        accessedAnnotationAnchorIndex === sourceWormholeIndex

                return (
                    <AnnotationWormhole {...other}
                        key={wormholeLinkIndex}
                        wormholeLinkIndex={wormholeLinkIndex}
                        isAccessed={isAccessed}
                    />
                )
            })
        )
    }
}

export default connect(mapStateToProps)(AnnotationWormholes)
