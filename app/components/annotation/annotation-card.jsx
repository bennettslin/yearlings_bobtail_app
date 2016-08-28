import React from 'react'
import DotsBlock from '../dots/dots-block'
import TextBlock from '../text/text-block'
import AnnotationPortalsBlock from './annotation-portals-block'
import AppHelper from 'helpers/album-view-helper'

/*************
 * CONTAINER *
 *************/

const AnnotationCard = (props) => {

    const { card, songs } = props,
        { description,
          dotKeys = {} } = card

    const portalLinks = AppHelper.getPortalLinks(card, songs)

    // Add portal key to dot keys.
    if (portalLinks) {
        dotKeys.portal = true
    }

    return (
        <AnnotationCardView {...props}
            text={description}
            dotKeys={dotKeys}
            portalLinks={portalLinks}
        />
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
            interactable={true}
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
