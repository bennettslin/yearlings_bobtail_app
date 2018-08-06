// Section to show title and all notes and wormholes for each annotation.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import AnnotationCards from './Card/AnnotationCards'
import AnnotationHeader from './Header/AnnotationHeader'

import { getAnnotationObject } from 'helpers/dataHelper'
import { getPropsAreShallowEqual } from 'helpers/generalHelper'
import { getAccessibleAnnotationAnchorsLength } from './annotationHelper'

const mapStateToProps = ({
    canCarouselRender,
    renderableStore,
    selectedDotKeys
}) => ({
    canCarouselRender,
    renderableSongIndex: renderableStore.renderableSongIndex,
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
        selectedDotKeys: PropTypes.object.isRequired,

        // From parent.
        annotationIndex: PropTypes.number.isRequired,
        isSelected: PropTypes.bool
    }

    shouldComponentUpdate(nextProps) {
        const shouldComponentUpdate =
            nextProps.canCarouselRender && !getPropsAreShallowEqual({
                props: this.props,
                nextProps,
                alwaysBypassCheck: {
                    inCarousel: true
                }

            // Only selected annotation needs to care about dot keys.
            }) || (
                nextProps.isSelected && !getPropsAreShallowEqual({
                    props: this.props.selectedDotKeys,
                    nextProps: nextProps.selectedDotKeys
                })
            )

        return shouldComponentUpdate
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                canCarouselRender,
                dispatch,
                /* eslint-enable no-unused-vars */

                renderableSongIndex,
                selectedDotKeys,
                ...other
            } = this.props,
            {
                annotationIndex,
                isSelected,
            } = other,

            /**
             * If in carousel, get annotation index from parent. Otherwise,
             * fetch popup annotation indices from store and get it from data
             * helper.
             */
            annotationObject = getAnnotationObject(
                renderableSongIndex,
                annotationIndex
            )

        // If it's in popup, annotation object won't always exist.
        return Boolean(annotationObject) && (
            <AnnotationView {...other}
                {...{
                    annotationObject,
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
                            selectedAnnotationIndex: annotationIndex,
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
    handleContainerClick: PropTypes.func.isRequired
},

AnnotationView = ({

    // From props.
    isAccessed,
    annotationDotKeys,
    annotationTitle,
    cardsLength,
    accessibleAnnotationAnchorsLength,
    handleTitleClick,
    handleContainerClick,

...other }) => {

    const {
            inCarousel,
            isSelected
        } = other

    return (
        <div
            className={cx(
                'Annotation',

                'bgColour__annotation',

                isSelected &&
                    'bgColour__annotation__selected',

                isSelected ?
                    'boxShadow__annotation__selected' :
                    'boxShadow__annotation'
            )}
            onClick={handleContainerClick}
            onTouchStart={handleContainerClick}
        >
            <AnnotationHeader
                {...{
                    inCarousel,
                    isAccessed,
                    isSelected,
                    annotationDotKeys,
                    annotationTitle,
                    accessibleAnnotationAnchorsLength,
                    handleTitleClick
                }}
            />

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
