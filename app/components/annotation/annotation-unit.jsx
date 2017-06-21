// Component to show all notes and portals for each annotation.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AnnotationCard from './annotation-card'
import { getCarouselOrPopupAnnotationObject } from '../../helpers/data-helper'

const AnnotationUnit = ({

    selectedSongIndex,
    popupAnnotationSongIndex,
    popupAnnotationIndex,

...other }) => {

    const { carouselAnnotationIndex } = other,
        annotationObject = getCarouselOrPopupAnnotationObject({
                selectedSongIndex,
                carouselAnnotationIndex,
                popupAnnotationSongIndex,
                popupAnnotationIndex
            }),

        cardsIndices = Array.from(Array(annotationObject.cards.length).keys())

    return (
        <div className="annotation-cards-block">
            {cardsIndices.map(cardIndex => (
                <AnnotationCard {...other}
                    key={cardIndex}
                    cardIndex={cardIndex}
                />
            ))}
        </div>
    )
}

AnnotationUnit.propTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired,
    popupAnnotationSongIndex: PropTypes.number.isRequired,
    popupAnnotationIndex: PropTypes.number.isRequired,

    // From parent.
    carouselAnnotationIndex: PropTypes.number
}

export default connect(({
    selectedSongIndex,
    popupAnnotationIndex,
    popupAnnotationSongIndex
}) => ({
    selectedSongIndex,
    popupAnnotationIndex,
    popupAnnotationSongIndex
}))(AnnotationUnit)
