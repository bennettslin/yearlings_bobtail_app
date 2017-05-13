import React from 'react'
import classnames from 'classnames'
import DotBlock from '../dot/dots-block'
import TextBlock from '../text/text-block'
import AnnotationPortalsBlock from './annotation-portals-block'
import { getPortalLinks } from '../../helpers/album-view-helper'
import { getIntersection } from '../../helpers/dot-helper'

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

    const shownDotKeys = getIntersection(dotKeys, selectedDotKeys),
        showWikis = selectedDotKeys.wiki

    return (
        <AnnotationCardView {...other}
            text={description}
            shownDotKeys={shownDotKeys}
            annotationDotKeys={dotKeys}
            portalLinks={portalLinks}
            showWikis={showWikis}
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
    annotationDotKeys,
    handleAnnotationWikiSelect,
    handleAnnotationPortalSelect,
    selectedWikiIndex,
    accessedPopupAnchorIndex,

    // From controller.
    text,
    shownDotKeys,
    portalLinks,
    showWikis

}) => (
    <div className={classnames(
        'annotation-card',
        shownDotKeys
    )}>
        {/* <div className="annotation-card-animatable"> */}
            <DotBlock
                inAnnotationCard={true}
                annotationDotKeys={annotationDotKeys}
            />
            <TextBlock
                inPortal={inPortal}
                inPortalCard={inPortalCard}
                isLyric={false}
                text={text}
                showWikis={showWikis}
                selectedWikiIndex={selectedWikiIndex}
                carouselAnnotationIndex={carouselAnnotationIndex}
                accessedPopupAnchorIndex={accessedPopupAnchorIndex}
                handleAnchorClick={handleAnnotationWikiSelect}
            />
            {/* Why does portal need to care about annotation dot keys? */}
            {!inPortal && portalLinks &&
                <AnnotationPortalsBlock
                    portalLinks={portalLinks}
                    accessedPopupAnchorIndex={accessedPopupAnchorIndex}
                    handleAnnotationPortalSelect={handleAnnotationPortalSelect}
                />
            }
        {/* </div> */}
    </div>
)

export default AnnotationCard
