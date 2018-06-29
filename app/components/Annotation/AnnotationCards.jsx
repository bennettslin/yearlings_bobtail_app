// Component to show all notes and portals for each annotation.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AnnotationCard from './AnnotationCard'
import { getCarouselOrPopupAnnotationObject } from '../../helpers/dataHelper'
import {
    getArrayOfLength,
    getPropsAreShallowEqual
} from '../../helpers/generalHelper'

const mapStateToProps = ({
    canCarouselRender,
    renderableSongIndex,
    renderableAnnotationIndex
}) => ({
    canCarouselRender,
    renderableSongIndex,
    renderableAnnotationIndex
})

class AnnotationCards extends Component {

    static propTypes = {
        // Through Redux.
        canCarouselRender: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,
        renderableAnnotationIndex: PropTypes.number.isRequired,

        // From parent.
        carouselAnnotationIndex: PropTypes.number
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canCarouselRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    componentDidUpdate() {
        const {
            carouselAnnotationIndex,
            renderableAnnotationIndex
        } = this.props

        if (carouselAnnotationIndex === renderableAnnotationIndex) {
            console.warn('AnnotationCards rendered.')
        }
    }

    render() {
        const {
                renderableSongIndex,
                renderableAnnotationIndex,
            ...other } = this.props,

            { carouselAnnotationIndex } = other,

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
}

export default connect(mapStateToProps)(AnnotationCards)
