// Section to show title and all notes and portals for each annotation.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import AnnotationTitle from './AnnotationTitle'
import AnnotationCards from './AnnotationCards'

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
        return annotationObject ? (
            <AnnotationSectionView {...other}
                annotationObject={annotationObject}
            />
        ) : null
    }
}

/****************
 * PRESENTATION *
 ****************/

const annotationSectionViewPropTypes = {
    // From parent.
    inCarousel: PropTypes.bool,
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    annotationObject: PropTypes.object.isRequired,

    // Absent in popup annotation.
    handleTitleClick: PropTypes.func,
    handleContainerClick: PropTypes.func
},

AnnotationSectionView = ({

    // From props.
    inCarousel,
    isAccessed,
    isSelected,
    handleTitleClick,
    handleContainerClick,
    annotationObject,

...other }) => {

    const annotationTitleChild = (
        <AnnotationTitle
            isSelected={isSelected}
            isAccessed={isAccessed}
            annotationDotKeys={annotationObject.dotKeys}
            annotationTitle={annotationObject.title}
            handleTitleClick={handleTitleClick}
        />
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
                <div className="AnnotationTitleAnimatable">
                    {annotationTitleChild}
                </div>

            ) : (
                annotationTitleChild
            )}

            <AnnotationCards
                {...other}
                cardsLength={annotationObject.cards.length}
            />
        </div>
    )
}

AnnotationSectionView.propTypes = annotationSectionViewPropTypes

export default connect(mapStateToProps)(Annotation)
