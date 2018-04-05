// Component to show all notes and portals for each annotation.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AnnotationCard from './Annotation-card'
import { getCarouselOrPopupAnnotationObject } from '../../helpers/dataHelper'
import { getArrayOfLength } from '../../helpers/generalHelper'

const mapStateToProps = ({
    renderReadySongIndex,
    renderReadyAnnotationIndex
}) => ({
    renderReadySongIndex,
    renderReadyAnnotationIndex
})

const annotationUnitPropTypes = {
    // Through Redux.
    renderReadySongIndex: PropTypes.number.isRequired,
    renderReadyAnnotationIndex: PropTypes.number.isRequired,

    // From parent.
    carouselAnnotationIndex: PropTypes.number
},

AnnotationUnit = ({

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
