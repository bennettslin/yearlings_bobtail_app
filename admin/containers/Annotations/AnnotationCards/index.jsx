// Component to show all notes and wormholes for each annotation.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import AnnotationCard from './AnnotationCard'
import { getAnnotationCardIndices } from '../../../../app/album/api/cards'

const AnnotationCards = ({ songIndex, annotationIndex }) => (
    <div className="TempGlobalAnnotationCards">
        {getAnnotationCardIndices(
            songIndex,
            annotationIndex

        ).map(cardIndex => (
            <AnnotationCard
                {...{
                    key: cardIndex,
                    songIndex,
                    annotationIndex,
                    cardIndex
                }}
            />
        ))}
    </div>
)

AnnotationCards.propTypes = {
    songIndex: PropTypes.number.isRequired,
    annotationIndex: PropTypes.number.isRequired
}

export default memo(AnnotationCards)
