// Container to show single annotation in carousel.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Annotation from '../Annotation/Annotation'
import { LYRIC_COLUMN_KEYS } from '../../constants/lyrics'
import { getAnnotationObject } from '../../helpers/dataHelper'
import { getPrefixPrependedClassNames } from '../../helpers/domHelper'
import { getPropsAreShallowEqual } from '../../helpers/generalHelper'

const mapStateToProps = ({
    canCarouselRender,
    renderableSongIndex
}) => ({
    canCarouselRender,
    renderableSongIndex
})

/*************
 * CONTAINER *
 *************/

class CarouselAnnotation extends Component {

    static propTypes = {
        // Through Redux.
        canCarouselRender: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,

        // From parent.
        annotationIndex: PropTypes.number.isRequired,
        isAccessed: PropTypes.bool.isRequired,
        isSelected: PropTypes.bool.isRequired,
        handleLyricAnnotationSelect: PropTypes.func.isRequired,
        getCarouselAnnotationRef: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this._handleAnnotationContainerClick = this._handleAnnotationContainerClick.bind(this)
        this._handleAnnotationTitleClick = this._handleAnnotationTitleClick.bind(this)
        this.getCarouselAnnotationRef = this.getCarouselAnnotationRef.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canCarouselRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    componentDidUpdate() {
        if (this.props.annotationIndex === 1) {
            console.warn('CarouselAnnotation rendered.')
        }
    }

    _handleAnnotationTitleClick(e) {
        if (!this.props.isSelected) {
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
        if (this.props.isSelected) {
            this.props.handlePopupContainerClick(e, true)
        }
    }

    getCarouselAnnotationRef(node) {
        const { renderableSongIndex } = this.props
        this.props.getCarouselAnnotationRef(
            node,
            renderableSongIndex,
            this.props.annotationIndex
        )
    }

    render() {

        const { renderableSongIndex,

                /* eslint-disable no-unused-vars */
                handlePopupContainerClick,
                /* eslint-enable no-unused-vars */

                ...other } = this.props,

            { annotationIndex } = other,

            annotationObject = getAnnotationObject(
                renderableSongIndex,
                annotationIndex
            ),

            { columnIndex,
              dotKeys } = annotationObject,

            columnKey = !isNaN(columnIndex) ? LYRIC_COLUMN_KEYS[columnIndex] : ''

        return (
            <CarouselAnnotationView {...other}
                getRef={this.getCarouselAnnotationRef}
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
    handleContainerClick: PropTypes.func.isRequired,
    getRef: PropTypes.func.isRequired
},

CarouselAnnotationView = ({

    annotationIndex,
    annotationColumn,
    annotationDotKeys,
    handleContainerClick,
    getRef,

...other }) => (

    <div
        ref={getRef}
        className={cx(
            'CarouselAnnotation',

            `Carousel__scrollChild__${annotationIndex}`,

            annotationColumn &&
                `CarouselAnnotation__inLyricColumn__${annotationColumn}`,
            getPrefixPrependedClassNames(
                annotationDotKeys, 'CarouselAnnotationAnimatable'
            )
        )}
    >
        <Annotation {...other}
            inCarousel
            handleContainerClick={handleContainerClick}
        />
    </div>
)

CarouselAnnotationView.propTypes = carouselAnnotationViewPropTypes

export default connect(mapStateToProps)(CarouselAnnotation)
