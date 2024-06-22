import React from 'react'
import PropTypes from 'prop-types'
import Texts from '../../../../../../../src/components/Texts'
import {
    getDescriptionForAnnotationCard,
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
        dotsBit = getDotsBitForAnnotationCard(
            songIndex,
            annotationIndex,
            cardIndex,
        )

    return (
        <div className="TodoAnnotationCard">
            <DotSequence
                inAnnotationCard
                {...{ dotsBit }}
            />
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
