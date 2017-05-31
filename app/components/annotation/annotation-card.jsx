import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import DotBlock from '../dot/dot-block'
import TextBlock from '../text/text-block'
import AnnotationPortalsBlock from './annotation-portals-block'

// Pass Redux state into component props.
const passReduxStateToProps = ({
    accessedAnnotationAnchorIndex
}) => ({
    accessedAnnotationAnchorIndex
})

/*************
 * CONTAINER *
 *************/

const AnnotationCard = ({

    card,

...other }) => {

    const { description,
            dotKeys = {},
            portalLinks } = card

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
    accessedAnnotationAnchorIndex: PropTypes.number.isRequired,
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
    accessedAnnotationAnchorIndex,

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
            accessedAnnotationAnchorIndex={accessedAnnotationAnchorIndex}
            handleAnchorClick={handleAnnotationWikiSelect}
        />
        {!inPortal && portalLinks &&
            <AnnotationPortalsBlock
                portalLinks={portalLinks}
                accessedAnnotationAnchorIndex={accessedAnnotationAnchorIndex}
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
    accessedAnnotationAnchorIndex: PropTypes.number.isRequired,
    handleAnnotationWikiSelect: PropTypes.func.isRequired,
    handleAnnotationPortalSelect: PropTypes.func.isRequired,
}

export default connect(passReduxStateToProps)(AnnotationCard)
