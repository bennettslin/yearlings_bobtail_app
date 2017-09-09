// Component to show all notes and portals for each annotation.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AnnotationCard from './annotation-card'
import { getCarouselOrPopupAnnotationObject } from '../../helpers/data-helper'
import { getArrayOfLength } from '../../helpers/general-helper'

const mapStateToProps = ({
    renderReadySongIndex,
    popupAnnotationIndex,
    popupAnnotationSongIndex
}) => ({
    renderReadySongIndex,
    popupAnnotationIndex,
    popupAnnotationSongIndex
})

const annotationUnitPropTypes = {
    // Through Redux.
    renderReadySongIndex: PropTypes.number.isRequired,
    popupAnnotationSongIndex: PropTypes.number.isRequired,
    popupAnnotationIndex: PropTypes.number.isRequired,

    // From parent.
    carouselAnnotationIndex: PropTypes.number
},

AnnotationUnit = ({

    renderReadySongIndex,
    popupAnnotationSongIndex,
    popupAnnotationIndex,

...other }) => {

    const { carouselAnnotationIndex } = other,
        annotationObject = getCarouselOrPopupAnnotationObject({
            renderReadySongIndex,
            carouselAnnotationIndex,
            popupAnnotationSongIndex,
            popupAnnotationIndex
        }),

        cardsIndices = getArrayOfLength({
            length: annotationObject.cards.length
        })

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

AnnotationUnit.propTypes = annotationUnitPropTypes

export default connect(mapStateToProps)(AnnotationUnit)
