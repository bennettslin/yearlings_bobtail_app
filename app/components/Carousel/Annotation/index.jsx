// Container to show single annotation in carousel.

import React, { Component, Fragment as ___ } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AnnotationDispatcher from '../../../handlers/AnnotationHandler/Dispatcher'
import Annotation from '../../Annotation'

import { CAROUSEL_SCROLL } from 'constants/dom'
import { EAR_COLUMN_KEYS } from 'constants/lyrics'
import { getAnnotationObject } from 'helpers/data'
import { getPrefixedDotLetterClassNames } from 'helpers/dot'
import { getPropsAreShallowEqual } from 'helpers/general'

const mapStateToProps = ({
    renderStore: { canCarouselRender },
    renderedStore: { renderedSongIndex }
}) => ({
    canCarouselRender,
    renderedSongIndex
})

/*************
 * CONTAINER *
 *************/

class CarouselAnnotation extends Component {

    static propTypes = {
        // Through Redux.
        canCarouselRender: PropTypes.bool.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,

        // From parent.
        annotationIndex: PropTypes.number.isRequired,
        isAccessed: PropTypes.bool.isRequired,
        isSelected: PropTypes.bool.isRequired,
        setCarouselAnnotationElement: PropTypes.func.isRequired
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

    _handleAnnotationTitleClick = () => {
        if (!this.props.isSelected) {
            const { annotationIndex } = this.props

            this.dispatchAnnotationIndex({
                selectedAnnotationIndex: annotationIndex,
                fromCarousel: true
            })
        }
    }

    setCarouselAnnotationElement = (node) => {
        this.props.setCarouselAnnotationElement({
            node,
            index: this.props.annotationIndex
        })
    }

    render() {

        const {
                /* eslint-disable no-unused-vars */
                canCarouselRender,
                setCarouselAnnotationElement,
                dispatch,
                /* eslint-enable no-unused-vars */

                renderedSongIndex,
                ...other

            } = this.props,

            { annotationIndex } = other,

            annotationObject = getAnnotationObject(
                renderedSongIndex,
                annotationIndex
            ),

            {
                columnIndex,
                dotKeys
            } = annotationObject,

            columnKey = !isNaN(columnIndex) ? EAR_COLUMN_KEYS[columnIndex] : ''

        return (
            <___>
                <CarouselAnnotationView {...other}
                    {...{
                        setRef: this.setCarouselAnnotationElement,
                        annotationColumn: columnKey,
                        annotationDotKeys: dotKeys,
                        handleTitleClick: this._handleAnnotationTitleClick
                    }}
                />
                <AnnotationDispatcher {...{ parentThis: this }} />
            </___>
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
        setRef: PropTypes.func.isRequired
    },

    CarouselAnnotationView = ({

        annotationColumn,
        annotationDotKeys,
        setRef,

        ...other
    }) => {

        const { annotationIndex } = other

        return (
            <div
                key={annotationIndex}
                ref={setRef}
                className={cx(
                    'CarouselAnnotation',

                    `${CAROUSEL_SCROLL}__${annotationIndex}`,

                    annotationColumn &&
                    `CarouselAnnotation__inEarColumn__${annotationColumn}`,

                    getPrefixedDotLetterClassNames(
                        annotationDotKeys,
                        // "Child carousel annotation letter."
                        'CcA'
                    )
                )}
            >
                <Annotation {...other}
                    inCarousel
                />
            </div>
        )
    }

CarouselAnnotationView.propTypes = carouselAnnotationViewPropTypes

export default connect(mapStateToProps)(CarouselAnnotation)
