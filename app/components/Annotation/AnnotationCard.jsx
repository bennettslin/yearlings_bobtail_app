// Component to show individual annotation note or all portals.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import DotSequence from '../Dot/DotSequence'
import Texts from '../Text/Texts'
import AnnotationPortals from './AnnotationPortals'
import { PORTAL } from '../../constants/dots'

import { getCarouselOrPopupCardObject } from '../../helpers/dataHelper'
import { getPrefixPrependedClassNames } from '../../helpers/domHelper'
import { getComponentShouldUpdate } from '../../helpers/generalHelper'

const mapStateToProps = ({
    renderReadySongIndex,
    renderReadyAnnotationIndex
}) => ({
    renderReadySongIndex,
    renderReadyAnnotationIndex
})

/*************
 * CONTAINER *
 *************/

class AnnotationCard extends Component {

    static propTypes = {
        // Through Redux.
        renderReadySongIndex: PropTypes.number.isRequired,
        renderReadyAnnotationIndex: PropTypes.number.isRequired,

        // From parent.
        carouselAnnotationIndex: PropTypes.number,
        cardIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {

        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'renderReadySongIndex',
                    {
                        staticProp: 'carouselAnnotationIndex',
                        conditionalShouldBe: false,
                        subUpdatingKey: 'renderReadyAnnotationIndex'
                    }
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { renderReadySongIndex,
                renderReadyAnnotationIndex,
                cardIndex,
                ...other } = this.props,

            { carouselAnnotationIndex } = other,

            cardObject = getCarouselOrPopupCardObject({
                carouselAnnotationIndex,
                renderReadySongIndex,
                renderReadyAnnotationIndex,
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

        annotationCardChild = (

            <div className={cx(
                'AnnotationCard',
                isTextCard && 'AnnotationCard__isText',
                'fontSize__verse',
                'textShadow__background',
                getPrefixPrependedClassNames(cardDotKeys, 'AnnotationCard')
            )}>
                {!cardDotKeys.portal && (
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
            <div className="Annotation__card__inCarousel">
                {annotationCardChild}
            </div>

        ) : (
            annotationCardChild
        )
}

AnnotationCardView.propTypes = annotationCardViewProptypes

export default connect(mapStateToProps)(AnnotationCard)
