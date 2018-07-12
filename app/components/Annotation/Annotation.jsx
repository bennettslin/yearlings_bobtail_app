// Section to show title and all notes and portals for each annotation.

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import AnnotationTitle from './AnnotationTitle'
import AnnotationCards from './AnnotationCards'
import AnnotationAccess from './AnnotationAccess'

import { getAnnotationObject } from '../../helpers/dataHelper'
import { getPropsAreShallowEqual } from '../../helpers/generalHelper'

const mapStateToProps = ({
    canCarouselRender,
    renderableSongIndex,
    renderableAnnotationIndex
}) => ({
    canCarouselRender,
    renderableSongIndex,
    renderableAnnotationIndex
})

/*************
 * CONTAINER *
 *************/

class Annotation extends Component {

    static propTypes = {
        // Through Redux.
        canCarouselRender: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,
        renderableAnnotationIndex: PropTypes.number.isRequired,

        // From parent.
        carouselAnnotationIndex: PropTypes.number,
        popupAnnotationIndex: PropTypes.number
    }

    shouldComponentUpdate(nextProps) {
        const shouldComponentUpdate =
            nextProps.canCarouselRender && !getPropsAreShallowEqual({
                props: this.props,
                nextProps,
                alwaysBypassCheck: {
                    carouselAnnotationIndex: true,
                    inCarousel: true
                },
                checkIsShallowEqual: {
                    renderableAnnotationIndex: true
                },
                onlyOnCondition: !nextProps.carouselAnnotationIndex
            })

        return shouldComponentUpdate
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                canCarouselRender,
                dispatch,
                /* eslint-disable no-unused-vars */

                renderableSongIndex,
                renderableAnnotationIndex,
                ...other
            } = this.props,
            {
                carouselAnnotationIndex,
                popupAnnotationIndex,
            } = other,

            /**
             * If in carousel, get annotation index from parent. Otherwise,
             * fetch popup annotation indices from store and get it from data
             * helper.
             */
            annotationObject = getAnnotationObject(
                renderableSongIndex,
                carouselAnnotationIndex ||
                renderableAnnotationIndex ||
                popupAnnotationIndex
            )

        // If it's in popup, annotation object won't always exist.
        return Boolean(annotationObject) && (
            <AnnotationView {...other}
                annotationObject={annotationObject}
            />
        )
    }
}

/****************
 * PRESENTATION *
 ****************/

const propTypes = {
    // From parent.
    inCarousel: PropTypes.bool,
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    annotationObject: PropTypes.object.isRequired,

    // Absent in popup annotation.
    handleTitleClick: PropTypes.func,
    handleContainerClick: PropTypes.func
},

AnnotationView = ({

    // From props.
    inCarousel,
    isAccessed,
    isSelected,
    handleTitleClick,
    handleContainerClick,
    annotationObject,

...other }) => {

    const annotationHeader = (
        <Fragment>
            <AnnotationTitle
                {...{
                    isSelected,
                    isAccessed,
                    annotationDotKeys: annotationObject.dotKeys,
                    annotationTitle: annotationObject.title,
                    handleTitleClick
                }}
            />
            <AnnotationAccess
                {...{
                    isSelected
                }}
            />
        </Fragment>
    )

    return (
        <div
            className={cx(
                'Annotation',
                { 'Annotation__selectedInCarousel': isSelected && inCarousel }
            )}
            onClick={handleContainerClick}
            onTouchStart={handleContainerClick}
        >

            {/* In Carousel, annotation title needs to be hideable. */}
            {inCarousel ? (
                <div className="AnnotationHeaderAnimatable">
                    {annotationHeader}
                </div>

            ) : (
                annotationHeader
            )}

            <AnnotationCards
                {...other}
                cardsLength={annotationObject.cards.length}
            />
        </div>
    )
}

AnnotationView.propTypes = propTypes

export default connect(mapStateToProps)(Annotation)
