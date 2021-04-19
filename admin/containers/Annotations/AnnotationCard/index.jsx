// Component to show individual annotation note or all wormholes.
import React from 'react'
import PropTypes from 'prop-types'
import Texts from '../../../../app/components/Texts'
import { ORDERED_DOT_KEYS } from '../../../../app/constants/dots'
import {
    getDescriptionForAnnotationCard,
    getDotKeysForAnnotationCard,
    getDotsBitForAnnotationCard,
} from '../../../../app/api/album/cards'
import DotSequence from '../../../../app/components/DotSequence'

const AnnotationCard = ({
    songIndex,
    annotationIndex,
    cardIndex,

}) => {
    const
        description = getDescriptionForAnnotationCard(
            songIndex,
            annotationIndex,
            cardIndex,
        ),
        dotKeys = getDotKeysForAnnotationCard(
            songIndex,
            annotationIndex,
            cardIndex,
        ),
        dotsBit = getDotsBitForAnnotationCard(
            songIndex,
            annotationIndex,
            cardIndex,
        )

    return (
        <div className="TempGlobalAnnotationCard">
            {/* Set to true to show dot categories as text. */}
            {false && (
                <div className="TempGlobalAnnotationCard__dotKeys">
                    {ORDERED_DOT_KEYS.filter(dotKey => (
                        dotKeys[dotKey]
                    )).join(', ')}
                </div>
            )}
            {/* Set to true to show dot categories as icons. */}
            {true && (
                <DotSequence
                    inAnnotationCard
                    {...{ dotsBit }}
                />
            )}
            {description && (
                <div className="TempGlobalAnnotationCard__description">
                    <Texts {...{ text: description }} />
                </div>
            )}
        </div>
    )
}

AnnotationCard.propTypes = {
    songIndex: PropTypes.number.isRequired,
    annotationIndex: PropTypes.number.isRequired,
    cardIndex: PropTypes.number.isRequired,
}

export default AnnotationCard
