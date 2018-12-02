// Component to show individual annotation note or all wormholes.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DotSequence from '../../../DotSequence'
import Texts from '../../../Texts'
import AnnotationWormholes from './Wormholes'
import { WORMHOLE } from 'constants/dots'

import { getAnnotationCardObject } from 'helpers/data'
import { getPrefixedDotLetterClassNames } from 'helpers/dot'
import { getPropsAreShallowEqual } from 'helpers/general'

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
            <AnnotationCardView {...other}
                {...{
                    text: description,
                    cardDotKeys: dotKeys,
                    cardIndex
                }}
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
        isSelected: PropTypes.bool.isRequired
    },

    AnnotationCardView = ({

        // From props.
        inCarousel,
        isSelected,
        annotationIndex,

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
                            {...{
                                text,
                                annotationIndex,

                                /**
                                 * Allow for clicking on anchor in unselected
                                 * annotation in carousel.
                                 */
                                showAccessInPopupAnnotation: !inCarousel
                            }}
                        />
                    ) : (
                        <AnnotationWormholes
                            {...{
                                isSelected,
                                cardIndex,
                                annotationIndex
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
