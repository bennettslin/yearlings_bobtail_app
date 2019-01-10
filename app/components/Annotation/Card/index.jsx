// PureComponent to show individual annotation note or all wormholes.

import React, { PureComponent, Fragment as ___ } from 'react'
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
                    {isTextCard ? (
                        <___>
                            <DotSequence
                                inAnnotationCard
                                {...{ dotKeys }}
                            />
                            <div {...{ className: 'AnnotationCard__text' }}>
                                <Texts
                                    {...{
                                        text,
                                        annotationIndex
                                    }}
                                />
                            </div>
                        </___>
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
