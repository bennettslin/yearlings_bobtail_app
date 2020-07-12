// Component to show individual annotation note or all wormholes.
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getFinalSideHoc from '../../FinalSideHoc'
import DotSequence from '../../DotSequence'
import Texts from '../../Texts'
import AnnotationWormholes from './Wormholes'
import {
    getDescriptionForAnnotationCard,
    getDotsBitForAnnotationCard
} from '../../../api/album/cards'
import { getMapHasSelectedDot } from '../../../redux/dots/selector'
import './style'

const AnnotationCard = ({
    finalSideSongIndex,
    annotationIndex,
    inCarousel,
    isSelected,
    cardIndex

}) => {
    const
        hasSelectedDot = useSelector(getMapHasSelectedDot(dotsBit)),
        description = getDescriptionForAnnotationCard(
            finalSideSongIndex,
            annotationIndex,
            cardIndex
        ),
        dotsBit = getDotsBitForAnnotationCard(
            finalSideSongIndex,
            annotationIndex,
            cardIndex
        )

    return (
        <div className={cx(
            'AnnotationCardContainer',
            hasSelectedDot && 'AnnotationCardContainer__shown',
            inCarousel && 'AnnotationCardContainer__animated',
            'ovH'
        )}>
            <div className={cx(
                'AnnotationCard',
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
    finalSideSongIndex: PropTypes.number.isRequired,
    annotationIndex: PropTypes.number.isRequired,
    cardIndex: PropTypes.number.isRequired
}

export default memo(getFinalSideHoc(AnnotationCard))
