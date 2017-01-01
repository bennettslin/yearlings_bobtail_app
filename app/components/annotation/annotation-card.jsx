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
    if (portalLinks) {
        dotKeys.portal = true
    }

    const shouldShow = intersects(dotKeys, selectedDotKeys),
        intersectedDotKeys = getIntersection(dotKeys, selectedDotKeys),
        showWikis = selectedDotKeys.wiki,
        showPortals = selectedDotKeys.portal

    return (shouldShow ?
        <AnnotationCardView {...other}
            songs={songs}
            text={description}
            dotKeys={intersectedDotKeys}
            selectedDotKeys={selectedDotKeys}
            portalLinks={portalLinks}
            showWikis={showWikis}
            showPortals={showPortals}
        /> : null
    )
}

/****************
 * PRESENTATION *
 ****************/

const AnnotationCardView = ({

    // From props.
    inPortal,
    inPortalCard,
    songs,
    selectedDotKeys,
    onWikiUrlClick,
    onPortalClick,
    selectedWikiIndex,
    sectionAccessHighlighted,
    accessedPopupAnchorIndex,

    // From controller.
    text,
    dotKeys,
    portalLinks,
    showWikis,
    showPortals

}) => (
    <div className="annotation-card">
        <DotsBlock
            inBackground={true}
            presentDotKeys={dotKeys}
        />
        <TextBlock
            inPortal={inPortal}
            inPortalCard={inPortalCard}
            isLyric={false}
            text={text}
            showWikis={showWikis}
            selectedWikiIndex={selectedWikiIndex}
            sectionAccessHighlighted={sectionAccessHighlighted}
            accessedPopupAnchorIndex={accessedPopupAnchorIndex}
            onAnchorClick={onWikiUrlClick}
        />
        {!inPortal && portalLinks && showPortals ?
            <AnnotationPortalsBlock
                songs={songs}
                selectedDotKeys={selectedDotKeys}
                portalLinks={portalLinks}
                sectionAccessHighlighted={sectionAccessHighlighted}
                accessedPopupAnchorIndex={accessedPopupAnchorIndex}
                onPortalClick={onPortalClick}
            /> : null
        }
    </div>
)

export default AnnotationCard
