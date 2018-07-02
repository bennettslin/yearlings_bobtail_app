// Component to show all notes and portals for each annotation.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AnnotationCard from './AnnotationCard'

import { getArrayOfLength } from '../../helpers/generalHelper'

class AnnotationCards extends Component {

    static propTypes = {
        // Through Redux.
        canCarouselRender: PropTypes.bool.isRequired,

        // From parent.
        cardsLength: PropTypes.number.isRequired
    }

    render() {
        const {
                cardsLength,
                ...other
            } = this.props,

            cardsIndices = getArrayOfLength({
                length: cardsLength
            })

        return cardsIndices.map(cardIndex => (
            <AnnotationCard {...other}
                key={cardIndex}
                cardIndex={cardIndex}
            />
        ))
    }
}

export default AnnotationCards
