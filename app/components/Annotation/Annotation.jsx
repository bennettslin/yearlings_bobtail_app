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
import { getAccessibleAnnotationAnchorsLength } from './annotationHelper'

const mapStateToProps = ({
    canCarouselRender,
    renderableSongIndex,
    renderableAnnotationIndex,
    selectedDotKeys
}) => ({
    canCarouselRender,
    renderableSongIndex,
    renderableAnnotationIndex,
    selectedDotKeys
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
        selectedDotKeys: PropTypes.object.isRequired,

        // From parent.
        annotationIndex: PropTypes.number,
        popupAnnotationIndex: PropTypes.number,
        isSelected: PropTypes.bool
    }

    shouldComponentUpdate(nextProps) {
        const shouldComponentUpdate =
            nextProps.canCarouselRender && !getPropsAreShallowEqual({
                props: this.props,
                nextProps,
                alwaysBypassCheck: {
                    annotationIndex: true,
                    inCarousel: true
                },
                checkIsShallowEqual: {
                    renderableAnnotationIndex: true
                },
                onlyOnCondition: !nextProps.annotationIndex

            }) || !getPropsAreShallowEqual({
                props: this.props.selectedDotKeys,
                nextProps: nextProps.selectedDotKeys
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
                accessedAnnotationAnchorIndex,
                selectedDotKeys,
                ...other
            } = this.props,
            {
                annotationIndex,
                popupAnnotationIndex,
                isSelected,
            } = other,

            /**
             * If in carousel, get annotation index from parent. Otherwise,
             * fetch popup annotation indices from store and get it from data
             * helper.
             */
            annotationObject = getAnnotationObject(
                renderableSongIndex,
                annotationIndex ||
                renderableAnnotationIndex ||
                popupAnnotationIndex
            )

        // If it's in popup, annotation object won't always exist.
        return Boolean(annotationObject) && (
            <AnnotationView {...other}
                annotationObject={annotationObject}
                {...{
                    annotationDotKeys: annotationObject.dotKeys,
                    annotationTitle: annotationObject.title,
                    cardsLength: annotationObject.cards.length
                }}
                {...isSelected && {
                    /**
                     * We will only determine this value for a selected
                     * annotation.
                     */
                    accessibleAnnotationAnchorsLength:
                        getAccessibleAnnotationAnchorsLength({
                            selectedSongIndex: renderableSongIndex,
                            selectedAnnotationIndex:
                                annotationIndex ||
                                renderableAnnotationIndex ||
                                popupAnnotationIndex,
                            selectedDotKeys
                        })
                }}
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
    annotationDotKeys: PropTypes.object.isRequired,
    annotationTitle: PropTypes.string.isRequired,
    cardsLength: PropTypes.number.isRequired,
    accessibleAnnotationAnchorsLength: PropTypes.number,

    // Absent in popup annotation.
    handleTitleClick: PropTypes.func,
    handleContainerClick: PropTypes.func
},

AnnotationView = ({

    // From props.
    inCarousel,
    isAccessed,
    annotationDotKeys,
    annotationTitle,
    cardsLength,
    accessibleAnnotationAnchorsLength,
    handleTitleClick,
    handleContainerClick,

...other }) => {

    const {
            isSelected
        } = other,

        annotationHeader = (
        <Fragment>
            <AnnotationTitle
                {...{
                    isAccessed,
                    isSelected,
                    annotationDotKeys,
                    annotationTitle,
                    handleTitleClick
                }}
            />
            <AnnotationAccess
                {...{
                    isSelected,
                    accessibleAnnotationAnchorsLength
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
                {...{
                    cardsLength
                }}
            />
        </div>
    )
}

AnnotationView.propTypes = propTypes

export default connect(mapStateToProps)(Annotation)
