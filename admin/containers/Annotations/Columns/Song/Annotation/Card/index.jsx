import React from 'react'
import PropTypes from 'prop-types'
import Texts from '../../../../../../../src/components/Texts'
import { ORDERED_DOT_KEYS } from '../../../../../../../src/constants/dots'
import {
    getDescriptionForAnnotationCard,
    getDotKeysForAnnotationCard,
    getDotsBitForAnnotationCard,
} from '../../../../../../../src/endpoint/album/cards'
import DotSequence from '../../../../../../../src/components/DotSequence'

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
        <div className="TodoAnnotationCard">
            {/* Set to true to show dot categories as text. */}
            {false && (
                <div className="TodoAnnotationCard__dotKeys">
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
                <div className="TodoAnnotationCard__description">
                    <Texts {...{ songIndex, text: description }} />
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
