// Container to show single annotation in carousel.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Annotation from '../Annotation/Annotation'
import { CAROUSEL_SCROLL } from '../../constants/dom'
import { LYRIC_COLUMN_KEYS } from '../../constants/lyrics'
import { getAnnotationObject } from '../../helpers/dataHelper'
import { getPrefixPrependedClassNames } from '../../helpers/domHelper'
import { getPropsAreShallowEqual } from '../../helpers/generalHelper'

const mapStateToProps = ({
    canCarouselRender,
    renderableStore
}) => ({
    canCarouselRender,
    renderableSongIndex: renderableStore.renderableSongIndex
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
        setCarouselAnnotationRef: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this._handleAnnotationContainerClick = this._handleAnnotationContainerClick.bind(this)
        this._handleAnnotationTitleClick = this._handleAnnotationTitleClick.bind(this)
        this.setCarouselAnnotationRef = this.setCarouselAnnotationRef.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canCarouselRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps,
            alwaysBypassCheck: {
                annotationIndex: true
            }
        })
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

    setCarouselAnnotationRef(node) {
        this.props.setCarouselAnnotationRef({
            node,
            index: this.props.annotationIndex
        })
    }

    render() {

        const {
                /* eslint-disable no-unused-vars */
                canCarouselRender,
                handleLyricAnnotationSelect,
                handlePopupContainerClick,
                setCarouselAnnotationRef,
                dispatch,
                /* eslint-enable no-unused-vars */

                renderableSongIndex,
                ...other

            } = this.props,

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
                setRef={this.setCarouselAnnotationRef}
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
    setRef: PropTypes.func.isRequired
},

CarouselAnnotationView = ({

    annotationColumn,
    annotationDotKeys,
    handleContainerClick,
    setRef,

...other }) => {

    const { annotationIndex } = other

    return (
        <div
            key={annotationIndex}
            ref={setRef}
            className={cx(
                'CarouselAnnotation',

                `${CAROUSEL_SCROLL}__${annotationIndex}`,

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
}

CarouselAnnotationView.propTypes = carouselAnnotationViewPropTypes

export default connect(mapStateToProps)(CarouselAnnotation)
