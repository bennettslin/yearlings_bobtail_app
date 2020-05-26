// Component to show all notes and wormholes for each annotation.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import AnnotationCard from './AnnotationCard'

const AnnotationCards = ({ cards }) => {
    return (
        <div className="TempGlobalAnnotationCards">
            {cards.map((card, index) => (
                <AnnotationCard
                    {...{
                        key: index,
                        card
                    }}
                />
            ))}
        </div>
    )
}

AnnotationCards.propTypes = {
    cards: PropTypes.array.isRequired
}

export default memo(AnnotationCards)
