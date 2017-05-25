import React from 'react'
import PropTypes from 'prop-types'
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

...other }) => {

    const { description,
          dotKeys = {} } = card,

        // FIXME: This really can just live on the card itself.
        portalLinks = getPortalLinks(card)

    // if (portalLinks) {
    //     console.error('card, portalLinks', card.portalLinks[0], portalLinks[0]);
    // }

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

AnnotationCard.propTypes = {
    card: PropTypes.object.isRequired
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

AnnotationCardView.propTypes = {
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    portalLinks: PropTypes.array,
    inPortal: PropTypes.bool,
    inPortalCard: PropTypes.bool,
    cardDotKeys: PropTypes.object.isRequired,
    carouselAnnotationIndex: PropTypes.number.isRequired,
    selectedWikiIndex: PropTypes.number,
    accessedPopupAnchorIndex: PropTypes.number.isRequired,
    handleAnnotationWikiSelect: PropTypes.func.isRequired,
    handleAnnotationPortalSelect: PropTypes.func.isRequired,
}

export default AnnotationCard
