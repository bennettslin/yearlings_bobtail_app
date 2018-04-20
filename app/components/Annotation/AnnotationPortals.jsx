// Component to show all portals for each annotation.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AnnotationPortal from './AnnotationPortal'
import { SOURCE_PORTAL_INDEX } from '../../constants/lyrics'
import { getCarouselOrPopupCardPortalLinksArray } from '../../helpers/dataHelper'

const mapStateToProps = ({
    renderReadySongIndex,
    renderReadyAnnotationIndex,
    accessedAnnotationAnchorIndex
}) => ({
    renderReadySongIndex,
    renderReadyAnnotationIndex,
    accessedAnnotationAnchorIndex
})

const annotationPortalsPropTypes = {
    // Through Redux.
    renderReadySongIndex: PropTypes.number.isRequired,
    renderReadyAnnotationIndex: PropTypes.number.isRequired,
    accessedAnnotationAnchorIndex: PropTypes.number.isRequired,

    // From parent.
    carouselAnnotationIndex: PropTypes.number,
    cardIndex: PropTypes.number.isRequired
},

AnnotationPortals = ({

    renderReadySongIndex,
    renderReadyAnnotationIndex,
    accessedAnnotationAnchorIndex,

...other }) => {

    const { carouselAnnotationIndex,
            cardIndex } = other,

        portalLinksArray = getCarouselOrPopupCardPortalLinksArray({
            carouselAnnotationIndex,
            renderReadySongIndex,
            renderReadyAnnotationIndex,
            cardIndex
        })

    return portalLinksArray ? (
        portalLinksArray.map((portalObject, portalLinkIndex) => {

            /**
             * portalLinkIndex is solely to fetch the portal object from the
             * data helper when there are two portals in the same annotation.
             * This happens only once, with the "shiv" one.
             */
            const { [SOURCE_PORTAL_INDEX]: sourcePortalIndex } = portalObject,
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
    ) : null
}

AnnotationPortals.propTypes = annotationPortalsPropTypes

export default connect(mapStateToProps)(AnnotationPortals)
