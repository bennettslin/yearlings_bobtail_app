import React from 'react'
import classnames from 'classnames'
import DotBlock from '../dot/dots-block'
import TextBlock from '../text/text-block'
import AnnotationPortalsBlock from './annotation-portals-block'
import { getPortalLinks } from '../../helpers/logic-helper'

/*************
 * CONTAINER *
 *************/

const AnnotationCard = ({

    card,
    songs,

...other }) => {

    const { description,
          dotKeys = {} } = card,

        portalLinks = getPortalLinks(card, songs)

    // Add portal key to dot keys.
    if (portalLinks) {
        dotKeys.portal = true
    }

    return (
        <AnnotationCardView {...other}
            text={description}
            cardDotKeys={dotKeys}
            portalLinks={portalLinks}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const AnnotationCardView = ({

    // From props.
    inPortal,
    inPortalCard,
    carouselAnnotationIndex,
    cardDotKeys,
    handleAnnotationWikiSelect,
    handleAnnotationPortalSelect,
    selectedWikiIndex,
    accessedPopupAnchorIndex,

    // From controller.
    text,
    portalLinks

}) => (
    <div className={classnames(
        'annotation-card',
        cardDotKeys
    )}>
        <DotBlock
            inAnnotationCard={true}
            dotKeys={cardDotKeys}
        />
        <TextBlock
            inPortal={inPortal}
            inPortalCard={inPortalCard}
            isLyric={false}
            text={text}
            selectedWikiIndex={selectedWikiIndex}
            carouselAnnotationIndex={carouselAnnotationIndex}
            accessedPopupAnchorIndex={accessedPopupAnchorIndex}
            handleAnchorClick={handleAnnotationWikiSelect}
        />
        {!inPortal && portalLinks &&
            <AnnotationPortalsBlock
                portalLinks={portalLinks}
                accessedPopupAnchorIndex={accessedPopupAnchorIndex}
                handleAnnotationPortalSelect={handleAnnotationPortalSelect}
            />
        }
    </div>
)

export default AnnotationCard
