// PureComponent to show individual annotation note or all wormholes.

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DotSequence from '../../DotSequence'
import Texts from '../../Texts'
import AnnotationWormholes from './Wormholes'

import { getPrefixedDotLetterClassNames } from 'helpers/dot'

import { getAnnotationCard } from './helper'

const mapStateToProps = ({
    lyricStore: { lyricSongIndex }
}) => ({
    lyricSongIndex
})

/*************
 * CONTAINER *
 *************/

class AnnotationCard extends PureComponent {

    static propTypes = {
        // Through Redux.
        lyricSongIndex: PropTypes.number.isRequired,

        // From parent.
        inCarousel: PropTypes.bool,
        isSelected: PropTypes.bool.isRequired,
        annotationIndex: PropTypes.number.isRequired,
        cardIndex: PropTypes.number.isRequired
    }

    render() {
        const {
                lyricSongIndex,
                annotationIndex,
                inCarousel,
                isSelected,
                cardIndex
            } = this.props,

            {
                text,
                dotKeys,
                isTextCard,
                isWormholeCard

            } = getAnnotationCard({
                songIndex: lyricSongIndex,
                annotationIndex,
                cardIndex
            }),

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
                            {...{ dotKeys }}
                        />
                    )}

                    <div
                        {...{ className: 'AnnotationCard__text' }}
                    >
                        {isTextCard ? (
                            <Texts
                                {...{
                                    text,
                                    annotationIndex,

                                    /**
                                     * Allow for clicking on anchor in unselected
                                     * annotation in carousel.
                                     */
                                    inPopupAnnotation: !inCarousel
                                }}
                            />
                        ) : (
                            <AnnotationWormholes
                                {...{
                                    isSelected,
                                    annotationIndex,
                                    cardIndex
                                }}
                            />
                        )}
                    </div>
                </div>
            )

        return inCarousel ? (
            <div className={cx(
                'AnnotationCardAnimatable',
                getPrefixedDotLetterClassNames(
                    dotKeys,
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
}

export default connect(mapStateToProps)(AnnotationCard)
