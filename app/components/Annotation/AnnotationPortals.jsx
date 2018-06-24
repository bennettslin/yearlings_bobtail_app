// Component to show all portals for each annotation.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AnnotationPortal from './AnnotationPortal'
import { SOURCE_PORTAL_INDEX } from '../../constants/lyrics'
import { getCarouselOrPopupCardPortalLinksArray } from '../../helpers/dataHelper'

const mapStateToProps = ({
    renderableSongIndex,
    renderableAnnotationIndex,
    accessedAnnotationAnchorIndex
}) => ({
    renderableSongIndex,
    renderableAnnotationIndex,
    accessedAnnotationAnchorIndex
})

const annotationPortalsPropTypes = {
    // Through Redux.
    renderableSongIndex: PropTypes.number.isRequired,
    renderableAnnotationIndex: PropTypes.number.isRequired,
    accessedAnnotationAnchorIndex: PropTypes.number.isRequired,

    // From parent.
    carouselAnnotationIndex: PropTypes.number,
    cardIndex: PropTypes.number.isRequired
},

AnnotationPortals = ({

    renderableSongIndex,
    renderableAnnotationIndex,
    accessedAnnotationAnchorIndex,

...other }) => {

    const { carouselAnnotationIndex,
            cardIndex } = other,

        portalLinksArray = getCarouselOrPopupCardPortalLinksArray({
            carouselAnnotationIndex,
            renderableSongIndex,
            renderableAnnotationIndex,
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
