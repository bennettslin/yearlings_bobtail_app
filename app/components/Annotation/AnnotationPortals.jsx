// Component to show all portals for each annotation.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AnnotationPortal from './AnnotationPortal'
import { SOURCE_PORTAL_INDEX } from '../../constants/lyrics'
import { getPropsAreShallowEqual } from '../../helpers/generalHelper'
import { getAnnotationCardPortalLinksArray } from './annotationHelper'

const mapStateToProps = ({
    canCarouselRender,
    renderableStore,
    accessedAnnotationAnchorIndex
}) => ({
    canCarouselRender,
    renderableSongIndex: renderableStore.renderableSongIndex,
    accessedAnnotationAnchorIndex
})

class AnnotationPortals extends Component {

    static propTypes = {
        // Through Redux.
        renderableSongIndex: PropTypes.number.isRequired,
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

                renderableSongIndex,
                accessedAnnotationAnchorIndex,
                ...other
            } = this.props,

            {
                annotationIndex,
                cardIndex
            } = other,

            portalLinksArray = getAnnotationCardPortalLinksArray({
                songIndex: renderableSongIndex,
                annotationIndex,
                cardIndex
            })

        return Boolean(portalLinksArray) && (
            portalLinksArray.map((portalObject, portalLinkIndex) => {

                /**
                 * The portalLinkIndex is solely to fetch the portal object
                 * from the data helper when there are two portals in the same
                 * annotation. This happens only once, with the "shiv" one.
                 */
                const {
                        [SOURCE_PORTAL_INDEX]: sourcePortalIndex
                    } = portalObject,

                    isAccessed =
                        accessedAnnotationAnchorIndex === sourcePortalIndex

                return (
                    <AnnotationPortal {...other}
                        key={portalLinkIndex}
                        portalLinkIndex={portalLinkIndex}
                        isAccessed={isAccessed}
                    />
                )
            })
        )
    }
}

export default connect(mapStateToProps)(AnnotationPortals)
