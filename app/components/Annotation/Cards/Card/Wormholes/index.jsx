// Component to show all wormholes for each annotation.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AnnotationWormhole from './Wormhole'
import { SOURCE_WORMHOLE_INDEX } from 'constants/lyrics'
import { getPropsAreShallowEqual } from 'helpers/general'
import { getAnnotationCardWormholeLinksArray } from './helper'

const mapStateToProps = ({
    renderStore: { canCarouselRender },
    renderedStore: { renderedSongIndex },
    toggleStore: { isAccessOn },
    accessStore: { accessedWikiWormholeIndex }
}) => ({
    canCarouselRender,
    renderedSongIndex,
    isAccessOn,
    accessedWikiWormholeIndex
})

class AnnotationWormholes extends Component {

    static propTypes = {
        // Through Redux.
        canCarouselRender: PropTypes.bool.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,
        isAccessOn: PropTypes.bool.isRequired,
        accessedWikiWormholeIndex: PropTypes.number.isRequired,

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
                accessedWikiWormholeIndex,
                isAccessOn,
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

                    isAccessed = isAccessOn &&
                        accessedWikiWormholeIndex === sourceWormholeIndex

                return (
                    <AnnotationWormhole {...other}
                        key={wormholeLinkIndex}
                        {...{
                            wormholeLinkIndex,
                            isAccessed
                        }}
                    />
                )
            })
        )
    }
}

export default connect(mapStateToProps)(AnnotationWormholes)
