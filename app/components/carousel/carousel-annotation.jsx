// Container to show single annotation in carousel.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import AnnotationSection from '../annotation/annotation-section'
import { getAnnotationObject } from '../../helpers/data-helper'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

/*************
 * CONTAINER *
 *************/

class CarouselAnnotation extends Component {

    constructor(props) {
        super(props)

        this._handleAnnotationTitleClick = this._handleAnnotationTitleClick.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'selectedSongIndex',
                    'isAccessedAnnotation',
                    'isSelectedAnnotation'
                ]
            })

        return componentShouldUpdate
    }

    _handleAnnotationTitleClick(e) {
        if (!this.props.isSelectedAnnotation) {
            const { annotationIndex,
                    handleLyricAnnotationSelect } = this.props

            handleLyricAnnotationSelect(e, annotationIndex, true)
        }
    }

    render() {

        const { selectedSongIndex,
                annotationIndex } = this.props,

            annotationObject = getAnnotationObject(selectedSongIndex, annotationIndex)

        return (
            <CarouselAnnotationView {...this.props}
                handleTitleClick={this._handleAnnotationTitleClick}
                annotationObject={annotationObject}
                annotationColumn={annotationObject.column}
                annotationDotKeys={annotationObject.dotKeys}
            />
        )
    }
}

CarouselAnnotation.propTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired,

    // From parent.
    annotationIndex: PropTypes.number.isRequired,
    isAccessedAnnotation: PropTypes.bool.isRequired,
    isSelectedAnnotation: PropTypes.bool.isRequired,
    handleLyricAnnotationSelect: PropTypes.func.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const CarouselAnnotationView = ({

    annotationIndex,
    annotationColumn,
    annotationDotKeys,
    handlePopupContainerClick,

...other }) => (

    <div
        className={classnames(
            'carousel-annotation',
            `carousel-annotation-${annotationIndex}`,
            annotationColumn && `in-column-${annotationColumn}`,
            annotationDotKeys
        )}
        onClick={handlePopupContainerClick}
    >
        <AnnotationSection {...other}
            inCarousel={true}
        />
    </div>
)

CarouselAnnotationView.propTypes = {
    // From parent.
    annotationIndex: PropTypes.number.isRequired,
    annotationColumn: PropTypes.string,
    annotationDotKeys: PropTypes.object.isRequired,
    handlePopupContainerClick: PropTypes.func.isRequired
}

export default connect(({
    selectedSongIndex
}) => ({
    selectedSongIndex
}))(CarouselAnnotation)
