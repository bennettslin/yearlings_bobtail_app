// Container to show single annotation in carousel.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import AnnotationSection from '../annotation/annotation-section'
import { LYRIC_COLUMN_KEYS } from '../../constants/lyrics'
import { getAnnotationObject } from '../../helpers/data-helper'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

const mapStateToProps = ({
    renderReadySongIndex
}) => ({
    renderReadySongIndex
})

/*************
 * CONTAINER *
 *************/

class CarouselAnnotation extends Component {

    static propTypes = {
        // Through Redux.
        renderReadySongIndex: PropTypes.number.isRequired,

        // From parent.
        annotationIndex: PropTypes.number.isRequired,
        isAccessedAnnotation: PropTypes.bool.isRequired,
        isSelectedAnnotation: PropTypes.bool.isRequired,
        handleLyricAnnotationSelect: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this._handleAnnotationContainerClick = this._handleAnnotationContainerClick.bind(this)
        this._handleAnnotationTitleClick = this._handleAnnotationTitleClick.bind(this)
    }

    shouldComponentUpdate(nextProps) {

        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'renderReadySongIndex',
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

    _handleAnnotationContainerClick(e) {

        /**
         * Ensure that dots and overview get dismissed when carousel annotation
         * container is clicked.
         */
        /**
         * FIXME: Not perfect because annotations overlap, so it's still
         * possible to deselect the annotation by clicking it on the far right.
         */
        if (this.props.isSelectedAnnotation) {
            this.props.handlePopupContainerClick(e, true)
        }
    }

    render() {

        const { renderReadySongIndex,

                /* eslint-disable no-unused-vars */
                handlePopupContainerClick,
                /* eslint-enable no-unused-vars */

                ...other } = this.props,
            { annotationIndex } = other,
            annotationObject = getAnnotationObject(renderReadySongIndex, annotationIndex),

            { columnIndex,
              dotKeys } = annotationObject,

            columnKey = !isNaN(columnIndex) ? LYRIC_COLUMN_KEYS[columnIndex] : ''

        return (
            <CarouselAnnotationView {...other}
                carouselAnnotationIndex={annotationIndex}
                annotationColumn={columnKey}
                annotationDotKeys={dotKeys}
                handleTitleClick={this._handleAnnotationTitleClick}
                handleContainerClick={this._handleAnnotationContainerClick}
            />
        )
    }
}

/****************
 * PRESENTATION *
 ****************/

const carouselAnnotationViewPropTypes = {
    // From parent.
    annotationIndex: PropTypes.number.isRequired,
    annotationColumn: PropTypes.string.isRequired,
    annotationDotKeys: PropTypes.object.isRequired,
    handleContainerClick: PropTypes.func.isRequired
},

CarouselAnnotationView = ({

    annotationIndex,
    annotationColumn,
    annotationDotKeys,
    handleContainerClick,

...other }) => (

    <div
        className={classnames(
            'carousel-annotation',
            `carousel-annotation-${annotationIndex}`,
            annotationColumn && `in-column-${annotationColumn}`,
            annotationDotKeys
        )}
    >
        <AnnotationSection {...other}
            inCarousel={true}
            handleContainerClick={handleContainerClick}
        />
    </div>
)

CarouselAnnotationView.propTypes = carouselAnnotationViewPropTypes

export default connect(mapStateToProps)(CarouselAnnotation)
