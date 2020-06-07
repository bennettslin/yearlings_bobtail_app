// Component to show individual annotation note or all wormholes.
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import DotSequence from '../../DotSequence'
import Texts from '../../Texts'
import AnnotationWormholes from './Wormholes'
import {
    getDescriptionForAnnotationCard,
    getDotsBitForAnnotationCard
} from '../../../api/album/cards'
import { getMapHasSelectedDot } from '../../../redux/dots/selectors'
import { mapLyricSongIndex } from '../../../redux/lyric/selectors'
import './style'

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
        dotsBit = getDotsBitForAnnotationCard(
            lyricSongIndex,
            annotationIndex,
            cardIndex
        ),
        isSelectedDot = useSelector(getMapHasSelectedDot(dotsBit))

    return (
        <div className={cx(
            'AnnotationCardContainer',
            isSelectedDot && 'AnnotationCardContainer__shown',
            inCarousel && 'AnnotationCardContainer__animated',
            'ovH'
        )}>
            <div className={cx(
                'AnnotationCard',
                // !inCarousel && 'AnnotationCard__inPopup',
                description ?
                    'AnnotationCard__isText' :
                    'AnnotationCard__wormhole',
                'fontSize__verse'
            )}>
                {description ? (
                    <>
                        <DotSequence
                            inAnnotationCard
                            {...{ dotsBit }}
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
