// Component to show all notes and wormholes for each annotation.

import React, { Component, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import AnnotationCard from './Card'

import { getArrayOfLength } from 'helpers/general'

class AnnotationCards extends Component {

    static propTypes = {
        // From parent.
        cardsLength: PropTypes.number.isRequired
    }

    render() {
        const {
                cardsLength,
                ...other
            } = this.props,

            cardsIndices = getArrayOfLength(cardsLength)

        return (
            <___>
                {cardsIndices.map(cardIndex => (
                    <AnnotationCard {...other}
                        key={cardIndex}
                        cardIndex={cardIndex}
                    />
                ))}
            </___>
        )
    }
}

export default AnnotationCards
