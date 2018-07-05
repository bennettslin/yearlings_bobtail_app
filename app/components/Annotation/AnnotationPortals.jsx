// Component to show all portals for each annotation.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AnnotationPortal from './AnnotationPortal'
import { SOURCE_PORTAL_INDEX } from '../../constants/lyrics'
import {
    getAnnotationCardPortalLinksArray
} from '../../helpers/dataHelper'
import { getPropsAreShallowEqual } from '../../helpers/generalHelper'

const mapStateToProps = ({
    canCarouselRender,
    renderableSongIndex,
    renderableAnnotationIndex,
    accessedAnnotationAnchorIndex
}) => ({
    canCarouselRender,
    renderableSongIndex,
    renderableAnnotationIndex,
    accessedAnnotationAnchorIndex
})

class AnnotationPortals extends Component {

    static propTypes = {
        // Through Redux.
        renderableSongIndex: PropTypes.number.isRequired,
        renderableAnnotationIndex: PropTypes.number.isRequired,
        accessedAnnotationAnchorIndex: PropTypes.number.isRequired,

        // From parent.
        carouselAnnotationIndex: PropTypes.number,
        popupAnnotationIndex: PropTypes.number,
        cardIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canCarouselRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps,
            alwaysBypassCheck: {
                carouselAnnotationIndex: true,
                cardIndex: true
            }
        })
    }

    componentDidUpdate() {
        const {
            carouselAnnotationIndex,
            renderableAnnotationIndex
        } = this.props

        if (carouselAnnotationIndex === renderableAnnotationIndex) {
            console.warn('AnnotationPortals rendered.')
        }
    }

    render() {
        const {
                renderableSongIndex,
                renderableAnnotationIndex,
                accessedAnnotationAnchorIndex,
            ...other } = this.props,

            {
                carouselAnnotationIndex,
                popupAnnotationIndex,
                cardIndex
            } = other,

            portalLinksArray = getAnnotationCardPortalLinksArray({
                songIndex: renderableSongIndex,
                annotationIndex:
                    carouselAnnotationIndex ||
                    renderableAnnotationIndex ||
                    popupAnnotationIndex,
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
