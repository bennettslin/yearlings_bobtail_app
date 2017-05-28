import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import AnnotationSection from '../annotation/annotation-section'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

/*************
 * CONTAINER *
 *************/

class CarouselAnnotation extends Component {

    constructor(props) {
        super(props)

        this._handleTitleClick = this._handleTitleClick.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'selectedSongIndex',
                    'isAccessedAnnotation',
                    'isSelectedAnnotation',
                    {
                        onlyIfTrueInNextProps: 'isSelectedAnnotation',
                        subUpdatingKey: 'accessedPopupAnchorIndex'
                    }
                ]
            })

        return componentShouldUpdate
    }

    _handleTitleClick(e) {
        if (!this.props.isSelectedAnnotation) {
            const { annotationIndex,
                    handleLyricAnnotationSelect } = this.props

            handleLyricAnnotationSelect(e, annotationIndex, true)
        }
    }

    render() {
        return (
            <CarouselAnnotationView {...this.props}
                handleTitleClick={this._handleTitleClick}
            />
        )
    }
}

CarouselAnnotation.propTypes = {
    annotationIndex: PropTypes.number.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,
    isAccessedAnnotation: PropTypes.bool.isRequired,
    isSelectedAnnotation: PropTypes.bool.isRequired,
    handleLyricAnnotationSelect: PropTypes.func.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const CarouselAnnotationView = ({

    // From props.
    annotationIndex,
    annotationColumn,
    annotationDotKeys,

...other }) => (

    <div className={classnames(
            'carousel-annotation',
            `carousel-annotation-${annotationIndex}`,
            annotationColumn && `in-column-${annotationColumn}`,
            annotationDotKeys
        )}
    >
        <AnnotationSection {...other}
            inCarousel={true}
        />
    </div>
)

CarouselAnnotationView.propTypes = {
    annotationIndex: PropTypes.number.isRequired,
    annotationColumn: PropTypes.string,
    annotationDotKeys: PropTypes.object.isRequired
}

export default CarouselAnnotation
