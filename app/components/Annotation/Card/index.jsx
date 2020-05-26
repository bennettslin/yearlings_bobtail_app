// Component to show individual annotation note or all wormholes.
import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { LYRIC_SONG_INDEX_SELECTOR } from '../../../redux/lyric/selectors'
import DotSequence from '../../DotSequence'
import Texts from '../../Texts'
import AnnotationWormholes from './Wormholes'
import { getPrefixedDotLetterClassNames } from '../../../helpers/dot'
import { getAnnotationCard } from './helper'
import './logic'
import './style'

const AnnotationCard = ({
    annotationIndex,
    inCarousel,
    isSelected,
    cardIndex

}) => {
    const
        lyricSongIndex = useSelector(LYRIC_SONG_INDEX_SELECTOR),
        {
            text,
            dotKeys,
            isTextCard,
            isWormholeCard

        } = getAnnotationCard({
            songIndex: lyricSongIndex,
            annotationIndex,
            cardIndex
        })

    return (
        <div className={cx(
            'AnnotationCardContainer',
            inCarousel && 'AnnotationCardContainer__animated',
            getPrefixedDotLetterClassNames(
                dotKeys,

                // "Child annotation card letter."
                'CaC'
            ),
            'ovH'
        )}>
            <div className={cx(
                'AnnotationCard',
                !inCarousel && 'AnnotationCard__inPopup',
                isTextCard && 'AnnotationCard__isText',
                isWormholeCard && 'AnnotationCard__wormhole',
                'fontSize__verse'
            )}>
                {isTextCard ? (
                    <>
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
                    </>
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
}

AnnotationCard.propTypes = {
    inCarousel: PropTypes.bool,
    isSelected: PropTypes.bool.isRequired,
    annotationIndex: PropTypes.number.isRequired,
    cardIndex: PropTypes.number.isRequired
}

export default AnnotationCard
