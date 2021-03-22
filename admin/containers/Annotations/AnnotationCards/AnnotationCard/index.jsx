// Component to show individual annotation note or all wormholes.
import React from 'react'
import PropTypes from 'prop-types'
import Texts from '../../../../../app/components/Texts'
import { ORDERED_DOT_KEYS } from '../../../../../app/constants/dots'
import {
    getDescriptionForAnnotationCard,
    getDotKeysForAnnotationCard,
} from '../../../../../app/api/album/cards'

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
        )

    return (
        <div className="TempGlobalAnnotationCard">
            <div className="TempGlobalAnnotationCard__dotKeys">
                {ORDERED_DOT_KEYS.filter(dotKey => (
                    dotKeys[dotKey]
                )).join(', ')}
            </div>
            {description && (
                <Texts {...{ text: description }} />
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
