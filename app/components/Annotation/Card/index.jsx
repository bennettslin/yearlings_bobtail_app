// Component to show individual annotation note or all wormholes.
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapLyricSongIndex } from '../../../redux/lyric/selectors'
import DotSequence from '../../DotSequence'
import Texts from '../../Texts'
import AnnotationWormholes from './Wormholes'
import { getPrefixedDotLetterClassNames } from '../../../helpers/dot'
import './logic'
import './style'
import {
    getDescriptionForAnnotationCard,
    getDotBitForAnnotationCard
} from '../../../api/album/cards'

const AnnotationCard = ({
    annotationIndex,
    inCarousel,
    isSelected,
    cardIndex

}) => {
    const
        lyricSongIndex = useSelector(mapLyricSongIndex),
        description = getDescriptionForAnnotationCard(
            lyricSongIndex,
            annotationIndex,
            cardIndex
        ),
        dotBit = getDotBitForAnnotationCard(
            lyricSongIndex,
            annotationIndex,
            cardIndex
        )

    return (
        <div className={cx(
            'AnnotationCardContainer',
            inCarousel && 'AnnotationCardContainer__animated',
            getPrefixedDotLetterClassNames(
                dotBit,

                // "Child annotation card letter."
                'CaC'
            ),
            'ovH'
        )}>
            <div className={cx(
                'AnnotationCard',
                !inCarousel && 'AnnotationCard__inPopup',
                description ?
                    'AnnotationCard__isText' :
                    'AnnotationCard__wormhole',
                'fontSize__verse'
            )}>
                {description ? (
                    <>
                        <DotSequence
                            inAnnotationCard
                            {...{ dotBit }}
                        />
                        <div {...{ className: 'AnnotationCard__text' }}>
                            <Texts
                                {...{
                                    text: description,
                                    annotationIndex
                                }}
                            />
                        </div>
                    </>
                ) : (
                    <AnnotationWormholes
                        {...{
                            isSelected,
                            annotationIndex
                        }}
                    />
                )}
            </div>
        </div>
    )
}

AnnotationCard.propTypes = {
    inCarousel: PropTypes.bool,
    isSelected: PropTypes.bool.isRequired,
    annotationIndex: PropTypes.number.isRequired,
    cardIndex: PropTypes.number.isRequired
}

export default memo(AnnotationCard)
