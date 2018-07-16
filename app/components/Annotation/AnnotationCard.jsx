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
    renderableStore
}) => ({
    canCarouselRender,
    renderableSongIndex: renderableStore.renderableSongIndex,
})

/*************
 * CONTAINER *
 *************/

class AnnotationCard extends Component {

    static propTypes = {
        // Through Redux.
        canCarouselRender: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,

        // From parent.
        annotationIndex: PropTypes.number.isRequired,
        cardIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        const shouldComponentUpdate =
            nextProps.canCarouselRender && !getPropsAreShallowEqual({
                props: this.props,
                nextProps,
                alwaysBypassCheck: {
                    cardIndex: true
                }
            })

        return shouldComponentUpdate
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                canCarouselRender,
                dispatch,
                /* eslint-enable no-unused-vars */

                renderableSongIndex,
                cardIndex,
                ...other
            } = this.props,

            {
                annotationIndex,
            } = other,

            cardObject = getAnnotationCardObject({
                songIndex: renderableSongIndex,
                annotationIndex,
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
    inCarousel: PropTypes.bool,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    annotationIndex: PropTypes.number.isRequired,
    cardDotKeys: PropTypes.object.isRequired,
    cardIndex: PropTypes.number.isRequired,
    isSelected: PropTypes.bool.isRequired,
    handleAnnotationWikiSelect: PropTypes.func.isRequired,
    handleAnnotationPortalSelect: PropTypes.func.isRequired
},

AnnotationCardView = ({

    // From props.
    inCarousel,
    isSelected,
    annotationIndex,
    handleAnnotationWikiSelect,
    handleAnnotationPortalSelect,

    // From controller.
    text,
    cardDotKeys,
    cardIndex

}) => {

    const isTextCard = Boolean(text),
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
                        showAccessInPopupAnnotation={!inCarousel}
                        /**
                         * Allow for clicking on anchor in unselected
                         * annotation in carousel.
                         */
                        annotationIndex={annotationIndex}
                        handleAnchorClick={handleAnnotationWikiSelect}
                    />
                ) : (
                    <AnnotationPortals
                        {...{
                            isSelected,
                            cardIndex,
                            annotationIndex,
                            handleAnnotationPortalSelect
                        }}
                    />
                )}
            </div>
        )

        return inCarousel ? (
            <div className={cx(
                'AnnotationCardAnimatable',
                getPrefixPrependedClassNames(
                    cardDotKeys,
                    'AnnotationCardAnimatable'
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
