import React from 'react'
import DotsBlock from '../dots/dots-block'
import TextBlock from '../text/text-block'
import AnnotationPortalsBlock from './annotation-portals-block'
import { getPortalLinks } from 'helpers/album-view-helper'
import { intersects, getIntersection } from 'helpers/dot-helper'

/*************
 * CONTAINER *
 *************/

const AnnotationCard = ({

    card,
    songs,
    selectedDotKeys,

...other }) => {

    const { description,
          dotKeys = {} } = card,

        portalLinks = getPortalLinks(card, songs)

    // Add portal key to dot keys.
    if (portalLinks) { dotKeys.portal = true }

    const shouldShow = intersects(dotKeys, selectedDotKeys),
        intersectedDotKeys = getIntersection(dotKeys, selectedDotKeys)

    return (shouldShow ?
        <AnnotationCardView {...other}
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
    selectedWikiIndex,

    // From controller.
    text,
    dotKeys,
    portalLinks

}) => (
    <div className="annotation-card">
        <DotsBlock
            inBackground={true}
            presentDotKeys={dotKeys}
        />
        <TextBlock
            isLyric={false}
            text={text}
            selectedWikiIndex={selectedWikiIndex}
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
