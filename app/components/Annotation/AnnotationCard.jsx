// Component to show individual annotation note or all portals.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import DotBlock from '../dot/dot-block'
import TextBlock from '../text/text-block'
import AnnotationPortalsBlock from './AnnotationPortalsBlock'
import { PORTAL } from '../../constants/dots'
import { getCarouselOrPopupCardObject } from '../../helpers/dataHelper'
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
        cardIndex: PropTypes.number.isRequired,
        inSelectedAnnotation: PropTypes.bool.isRequired
    }

    shouldComponentUpdate(nextProps) {

        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'renderReadySongIndex',
                    'inSelectedAnnotation',
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
    inSelectedAnnotation: PropTypes.bool.isRequired,
    handleAnnotationWikiSelect: PropTypes.func.isRequired,
    handleAnnotationPortalSelect: PropTypes.func.isRequired
},

AnnotationCardView = ({

    // From props.
    carouselAnnotationIndex,
    inSelectedAnnotation,
    handleAnnotationWikiSelect,
    handleAnnotationPortalSelect,

    // From controller.
    text,
    cardDotKeys,
    cardIndex

}) => (
    <div className={cx(
        'AnnotationCard',
        cardDotKeys
    )}>
        {!cardDotKeys.portal && (
            <DotBlock
                dotKeys={cardDotKeys}
            />
        )}
        <TextBlock
            text={text}
            isLyric={false}

            /**
             * Allow for clicking on anchor in unselected annotation in
             * carousel.
             */
            carouselAnnotationIndex={carouselAnnotationIndex}
            handleAnchorClick={handleAnnotationWikiSelect}
        />
        <AnnotationPortalsBlock
            cardIndex={cardIndex}
            carouselAnnotationIndex={carouselAnnotationIndex}
            inSelectedAnnotation={inSelectedAnnotation}
            handleAnnotationPortalSelect={handleAnnotationPortalSelect}
        />
    </div>
)

AnnotationCardView.propTypes = annotationCardViewProptypes

export default connect(mapStateToProps)(AnnotationCard)
