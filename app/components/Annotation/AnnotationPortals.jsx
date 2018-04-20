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
             * NOTE: portalLinkIndex and sourcePortalIndex are not the same
             * value! portalLinkIndex is solely for the portal component to
             * fetch the portal object from the data helper.
             */
            const { [SOURCE_PORTAL_INDEX]: sourcePortalIndex } = portalObject,
                isAccessedPortal = accessedAnnotationAnchorIndex === sourcePortalIndex

            return (
                <AnnotationPortal {...other}
                    key={portalLinkIndex}
                    portalLinkIndex={portalLinkIndex}
                    isAccessedPortal={isAccessedPortal}
                />
            )
        })
    ) : null
}

AnnotationPortals.propTypes = annotationPortalsPropTypes

export default connect(mapStateToProps)(AnnotationPortals)
