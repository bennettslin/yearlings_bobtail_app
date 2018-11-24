// Component to show individual annotation note or all wormholes.

import React, { Component, Fragment as ___ } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import WikiDispatcher from '../../../../dispatchers/WikiDispatcher'

import DotSequence from '../../../DotSequence'
import Texts from '../../../Texts'
import AnnotationWormholes from './Wormholes'
import { WORMHOLE } from 'constants/dots'

import { getAnnotationCardObject } from 'helpers/dataHelper'
import { getPrefixedDotLetterClassNames } from 'helpers/dotHelper'
import { getPropsAreShallowEqual } from 'helpers/generalHelper'

const mapStateToProps = ({
    renderStore: { canCarouselRender },
    renderedStore: { renderedSongIndex }
}) => ({
    canCarouselRender,
    renderedSongIndex
})

/*************
 * CONTAINER *
 *************/

class AnnotationCard extends Component {

    static propTypes = {
        // Through Redux.
        canCarouselRender: PropTypes.bool.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,

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

    handleWikiSelectClick = (
        e,
        selectedWikiIndex,
        carouselAnnotationIndex
    ) => {
        this.dispatchWiki(
            selectedWikiIndex,
            carouselAnnotationIndex
        )
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                canCarouselRender,
                dispatch,
                /* eslint-enable no-unused-vars */

                renderedSongIndex,
                cardIndex,
                ...other
            } = this.props,

            {
                annotationIndex
            } = other,

            cardObject = getAnnotationCardObject({
                songIndex: renderedSongIndex,
                annotationIndex,
                cardIndex
            }),

            {
                description,
                dotKeys = {},
                wormholeLinks
            } = cardObject

        // Add wormhole key to dot keys.
        if (wormholeLinks) {
            dotKeys[WORMHOLE] = true
        }

        return (
            <___>
                <AnnotationCardView {...other}
                    {...{
                        text: description,
                        cardDotKeys: dotKeys,
                        cardIndex,
                        handleWikiSelectClick: this.handleWikiSelectClick
                    }}
                />
                <WikiDispatcher {...{ getDispatch: this }} />
            </___>
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
        handleWikiSelectClick: PropTypes.func.isRequired,
        handleAnnotationWormholeSelect: PropTypes.func.isRequired
    },

    AnnotationCardView = ({

        // From props.
        inCarousel,
        isSelected,
        annotationIndex,
        handleWikiSelectClick,
        handleAnnotationWormholeSelect,

        // From controller.
        text,
        cardDotKeys,
        cardIndex

    }) => {

        const isTextCard = Boolean(text),
            isWormholeCard = cardDotKeys.wormhole,

            annotationCardChild = (
                <div className={cx(
                    'AnnotationCard',
                    !inCarousel && 'AnnotationCard__inPopup',
                    isTextCard && 'AnnotationCard__isText',
                    isWormholeCard && 'AnnotationCard__wormhole',
                    'fontSize__verse'
                )}>
                    {!isWormholeCard && (
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
                            handleAnchorClick={handleWikiSelectClick}
                        />
                    ) : (
                        <AnnotationWormholes
                            {...{
                                isSelected,
                                cardIndex,
                                annotationIndex,
                                handleAnnotationWormholeSelect
                            }}
                        />
                    )}
                </div>
            )

        return inCarousel ? (
            <div className={cx(
                'AnnotationCardAnimatable',
                getPrefixedDotLetterClassNames(
                    cardDotKeys,
                    // "Child annotation card letter."
                    'CaC'
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
