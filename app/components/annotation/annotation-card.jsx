// Component to show individual annotation note or all portals.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import DotBlock from '../dot/dot-block'
import TextBlock from '../text/text-block'
import AnnotationPortalsBlock from './annotation-portals-block'
import { PORTAL } from '../../constants/dots'
import { getCarouselOrPopupCardObject } from '../../helpers/data-helper'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

/*************
 * CONTAINER *
 *************/

class AnnotationCard extends Component {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        popupAnnotationSongIndex: PropTypes.number.isRequired,
        popupAnnotationIndex: PropTypes.number.isRequired,

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
                    'selectedSongIndex',
                    'inSelectedAnnotation',
                    {
                        staticProp: 'carouselAnnotationIndex',
                        conditionalShouldBe: false,
                        subUpdatingKey: 'popupAnnotationSongIndex'
                    },
                    {
                        staticProp: 'carouselAnnotationIndex',
                        conditionalShouldBe: false,
                        subUpdatingKey: 'popupAnnotationIndex'
                    }
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { selectedSongIndex,
                popupAnnotationIndex,
                popupAnnotationSongIndex,
                cardIndex,
                ...other } = this.props,

            { carouselAnnotationIndex } = other,

            cardObject = getCarouselOrPopupCardObject({
                carouselAnnotationIndex,
                selectedSongIndex,
                popupAnnotationIndex,
                popupAnnotationSongIndex,
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
    <div className={classnames(
        'annotation-card',
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

export default connect(({
    selectedSongIndex,
    popupAnnotationSongIndex,
    popupAnnotationIndex
}) => ({
    selectedSongIndex,
    popupAnnotationSongIndex,
    popupAnnotationIndex
}))(AnnotationCard)
