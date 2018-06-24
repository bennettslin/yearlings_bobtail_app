// Component to show all notes and portals for each annotation.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AnnotationCard from './AnnotationCard'
import { getCarouselOrPopupAnnotationObject } from '../../helpers/dataHelper'
import { getArrayOfLength } from '../../helpers/generalHelper'

const mapStateToProps = ({
    renderableSongIndex,
    renderableAnnotationIndex
}) => ({
    renderableSongIndex,
    renderableAnnotationIndex
})

const annotationCardsPropTypes = {
    // Through Redux.
    renderableSongIndex: PropTypes.number.isRequired,
    renderableAnnotationIndex: PropTypes.number.isRequired,

    // From parent.
    carouselAnnotationIndex: PropTypes.number
},

AnnotationCards = ({

    renderableSongIndex,
    renderableAnnotationIndex,

...other }) => {

    const { carouselAnnotationIndex } = other,

        annotationObject = getCarouselOrPopupAnnotationObject({
            renderableSongIndex,
            carouselAnnotationIndex,
            renderableAnnotationIndex
        }),

        cardsIndices = getArrayOfLength({
            length: annotationObject.cards.length
        })

    return cardsIndices.map(cardIndex => (
        <AnnotationCard {...other}
            key={cardIndex}
            cardIndex={cardIndex}
        />
    ))
}

AnnotationCards.propTypes = annotationCardsPropTypes

export default connect(mapStateToProps)(AnnotationCards)
