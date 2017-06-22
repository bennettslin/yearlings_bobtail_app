// Component to show all portals for each annotation.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AnnotationPortal from './annotation-portal'
import { SOURCE_PORTAL_INDEX } from '../../constants/lyrics'
import { getCarouselOrPopupCardPortalLinksArray } from '../../helpers/data-helper'

const AnnotationPortalsBlock = ({

    selectedSongIndex,
    popupAnnotationSongIndex,
    popupAnnotationIndex,
    accessedAnnotationAnchorIndex,
    inSelectedAnnotation,

...other }) => {

    const { carouselAnnotationIndex,
            cardIndex } = other,

        portalLinksArray = getCarouselOrPopupCardPortalLinksArray({
            carouselAnnotationIndex,
            selectedSongIndex,
            popupAnnotationIndex,
            popupAnnotationSongIndex,
            cardIndex
        })

    return portalLinksArray ? (
        <div className="portals-block">
            {portalLinksArray.map((portalObject, portalLinkIndex) => {

                /**
                 * NOTE: portalLinkIndex and sourcePortalIndex are not the same
                 * value! portalLinkIndex is solely for the portal component to
                 * fetch the portal object from the data helper.
                 */
                const { [SOURCE_PORTAL_INDEX]: sourcePortalIndex } = portalObject,
                    isAccessedPortal = inSelectedAnnotation &&
                        accessedAnnotationAnchorIndex === sourcePortalIndex

                return (
                    <AnnotationPortal {...other}
                        key={portalLinkIndex}
                        portalLinkIndex={portalLinkIndex}
                        isAccessedPortal={isAccessedPortal}
                    />
                )
            })}
        </div>
    ) : null
}

AnnotationPortalsBlock.propTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired,
    popupAnnotationSongIndex: PropTypes.number.isRequired,
    popupAnnotationIndex: PropTypes.number.isRequired,
    accessedAnnotationAnchorIndex: PropTypes.number.isRequired,

    // From parent.
    carouselAnnotationIndex: PropTypes.number,
    cardIndex: PropTypes.number.isRequired,
    inSelectedAnnotation: PropTypes.bool.isRequired
}

export default connect(({
    selectedSongIndex,
    popupAnnotationSongIndex,
    popupAnnotationIndex,
    accessedAnnotationAnchorIndex
}) => ({
    selectedSongIndex,
    popupAnnotationSongIndex,
    popupAnnotationIndex,
    accessedAnnotationAnchorIndex
}))(AnnotationPortalsBlock)
