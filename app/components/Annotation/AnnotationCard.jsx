// Component to show individual annotation note or all portals.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import DotSequence from '../Dot/DotSequence'
import Texts from '../Text/Texts'
import AnnotationPortals from './AnnotationPortals'
import { PORTAL } from '../../constants/dots'

import { getAnnotationCardObject } from '../../helpers/dataHelper'
import { getPrefixPrependedClassNames } from '../../helpers/domHelper'
import { getPropsAreShallowEqual } from '../../helpers/generalHelper'

const mapStateToProps = ({
    canCarouselRender,
    renderableSongIndex,
    renderableAnnotationIndex
}) => ({
    canCarouselRender,
    renderableSongIndex,
    renderableAnnotationIndex
})

/*************
 * CONTAINER *
 *************/

class AnnotationCard extends Component {

    static propTypes = {
        // Through Redux.
        canCarouselRender: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,
        renderableAnnotationIndex: PropTypes.number.isRequired,

        // From parent.
        carouselAnnotationIndex: PropTypes.number,
        popupAnnotationIndex: PropTypes.number,
        cardIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        const shouldComponentUpdate =
            nextProps.canCarouselRender && !getPropsAreShallowEqual({
                props: this.props,
                nextProps,
                alwaysBypassCheck: {
                    carouselAnnotationIndex: true,
                    cardIndex: true
                },
                checkIsShallowEqual: {
                    renderableAnnotationIndex: true
                },
                onlyOnCondition: !nextProps.carouselAnnotationIndex
            })

        return shouldComponentUpdate
    }

    componentDidUpdate() {
        const {
            carouselAnnotationIndex,
            renderableAnnotationIndex
        } = this.props

        if (carouselAnnotationIndex === renderableAnnotationIndex) {
            console.warn('AnnotationCard rendered.')
        }
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                canCarouselRender,
                dispatch,
                /* eslint-enable no-unused-vars */

                renderableSongIndex,
                renderableAnnotationIndex,
                cardIndex,
                ...other
            } = this.props,

            {
                carouselAnnotationIndex,
                popupAnnotationIndex,
            } = other,

            cardObject = getAnnotationCardObject({
                songIndex: renderableSongIndex,
                annotationIndex:
                    carouselAnnotationIndex ||
                    renderableAnnotationIndex ||
                    popupAnnotationIndex,
                cardIndex
            }),

            { description,
              dotKeys = {},
              portalLinks } = cardObject

        // Add portal key to dot keys.
        if (portalLinks) {
            dotKeys[PORTAL] = true
        }

        return (
            <AnnotationCardView {...other}
                text={description}
                cardDotKeys={dotKeys}
                cardIndex={cardIndex}
            />
        )
    }
}

/****************
 * PRESENTATION *
 ****************/

const annotationCardViewProptypes = {
    // From parent.
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    carouselAnnotationIndex: PropTypes.number,
    cardDotKeys: PropTypes.object.isRequired,
    cardIndex: PropTypes.number.isRequired,
    handleAnnotationWikiSelect: PropTypes.func.isRequired,
    handleAnnotationPortalSelect: PropTypes.func.isRequired
},

AnnotationCardView = ({

    // From props.
    carouselAnnotationIndex,
    handleAnnotationWikiSelect,
    handleAnnotationPortalSelect,

    // From controller.
    text,
    cardDotKeys,
    cardIndex

}) => {

    const isTextCard = Boolean(text),
        inCarousel = Boolean(carouselAnnotationIndex),
        isPortalCard = cardDotKeys.portal,

        annotationCardChild = (
            <div className={cx(
                'AnnotationCard',
                !inCarousel && 'AnnotationCard__inPopup',
                isTextCard && 'AnnotationCard__isText',
                isPortalCard && 'AnnotationCard__portal',
                'fontSize__verse'
            )}>
                {!isPortalCard && (
                    <DotSequence
                        inAnnotationCard
                        dotKeys={cardDotKeys}
                    />
                )}

                {isTextCard ? (
                    <Texts
                        text={text}

                        /**
                         * Allow for clicking on anchor in unselected annotation in
                         * carousel.
                         */
                        carouselAnnotationIndex={carouselAnnotationIndex}
                        handleAnchorClick={handleAnnotationWikiSelect}
                    />
                ) : (
                    <AnnotationPortals
                        cardIndex={cardIndex}
                        carouselAnnotationIndex={carouselAnnotationIndex}
                        handleAnnotationPortalSelect={handleAnnotationPortalSelect}
                    />
                )}
            </div>
        )

        return inCarousel ? (
            <div className={cx(
                'AnnotationCardAnimatable',
                getPrefixPrependedClassNames(
                    cardDotKeys, 'AnnotationCardAnimatable'
                )
            )}>
                {annotationCardChild}
            </div>

        ) : (
            annotationCardChild
        )
}

AnnotationCardView.propTypes = annotationCardViewProptypes

export default connect(mapStateToProps)(AnnotationCard)
