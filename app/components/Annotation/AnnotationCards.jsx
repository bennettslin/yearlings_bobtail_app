// Component to show all notes and portals for each annotation.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AnnotationCard from './AnnotationCard'
import { getCarouselOrPopupAnnotationObject } from '../../helpers/dataHelper'
import { getArrayOfLength } from '../../helpers/generalHelper'

const mapStateToProps = ({
    renderReadySongIndex,
    renderReadyAnnotationIndex
}) => ({
    renderReadySongIndex,
    renderReadyAnnotationIndex
})

const annotationCardsPropTypes = {
    // Through Redux.
    renderReadySongIndex: PropTypes.number.isRequired,
    renderReadyAnnotationIndex: PropTypes.number.isRequired,

    // From parent.
    carouselAnnotationIndex: PropTypes.number
},

AnnotationCards = ({

    renderReadySongIndex,
    renderReadyAnnotationIndex,

...other }) => {

    const { carouselAnnotationIndex } = other,

        annotationObject = getCarouselOrPopupAnnotationObject({
            renderReadySongIndex,
            carouselAnnotationIndex,
            renderReadyAnnotationIndex
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
