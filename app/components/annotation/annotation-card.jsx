import React from 'react'
import DotsBlock from '../dots/dots-block'
import TextBlock from '../text/text-block'
import AnnotationPortalsBlock from './annotation-portals-block'
import AppHelper from 'helpers/album-view-helper'
import { intersects, getIntersection } from 'helpers/dot-helper'

/*************
 * CONTAINER *
 *************/

const AnnotationCard = (props) => {

    const { card,
            songs,
            selectedDotKeys } = props,

        { description,
          dotKeys = {} } = card,

        portalLinks = AppHelper.getPortalLinks(card, songs)

    // Add portal key to dot keys.
    if (portalLinks) {
        dotKeys.portal = true
    }

    const shouldShow = intersects(dotKeys, selectedDotKeys),
        intersectedDotKeys = getIntersection(dotKeys, selectedDotKeys)

    return (shouldShow ?
        <AnnotationCardView {...props}
            text={description}
            dotKeys={intersectedDotKeys}
            portalLinks={portalLinks}
        /> : null
    )
}

/****************
 * PRESENTATION *
 ****************/

const AnnotationCardView = ({

    // From props.
    onWikiUrlClick,
    onPortalClick,

    // From controller.
    text,
    dotKeys,
    portalLinks

}) => (

    <div className="annotation-card">
        <DotsBlock
            presentDotKeys={dotKeys}
        />
        <TextBlock
            isLyric={false}
            text={text}
            onAnchorClick={onWikiUrlClick}
        />
        {portalLinks ?
            <AnnotationPortalsBlock
                portalLinks={portalLinks}
                onPortalClick={onPortalClick}
            /> : null
        }
    </div>
)

export default AnnotationCard
