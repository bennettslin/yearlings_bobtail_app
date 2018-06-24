// Section to show title and all notes and portals for each annotation.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import AnnotationTitle from './AnnotationTitle'
import AnnotationCards from './AnnotationCards'

import { getCarouselOrPopupAnnotationObject } from '../../helpers/dataHelper'
import { getComponentShouldUpdate } from '../../helpers/generalHelper'

const mapStateToProps = ({
    renderableSongIndex,
    renderableAnnotationIndex
}) => ({
    renderableSongIndex,
    renderableAnnotationIndex
})

/*************
 * CONTAINER *
 *************/

class Annotation extends Component {

    static propTypes = {
        // Through Redux.
        renderableSongIndex: PropTypes.number.isRequired,
        renderableAnnotationIndex: PropTypes.number.isRequired,

        // From parent.
        carouselAnnotationIndex: PropTypes.number
    }

    shouldComponentUpdate(nextProps) {

        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [

                    // Container props.
                    'renderableSongIndex',
                    {
                        staticProp: 'carouselAnnotationIndex',
                        conditionalShouldBe: false,
                        subUpdatingKey: 'renderableAnnotationIndex'
                    },

                    // Presentation props.
                    'isAccessed',
                    'isSelected'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { renderableSongIndex,
                renderableAnnotationIndex,
                ...other } = this.props,

            { carouselAnnotationIndex } = other,

            /**
             * If in carousel, get annotation index from parent. Otherwise,
             * fetch popup annotation indices from store and get it from data
             * helper.
             */
            annotationObject = getCarouselOrPopupAnnotationObject({
                renderableSongIndex,
                carouselAnnotationIndex,
                renderableAnnotationIndex
            })

        // If it's in popup, annotation object won't always exist.
        return annotationObject ? (
            <AnnotationSectionView {...other}
                annotationTitle={annotationObject.title}
                annotationDotKeys={annotationObject.dotKeys}
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
    annotationTitle: PropTypes.string.isRequired,
    annotationDotKeys: PropTypes.object.isRequired,

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

    // From controller.
    annotationTitle,
    annotationDotKeys,

...other }) => {

    const annotationTitleChild = (
        <AnnotationTitle
            isSelected={isSelected}
            isAccessed={isAccessed}
            annotationDotKeys={annotationDotKeys}
            annotationTitle={annotationTitle}
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

            <AnnotationCards {...other} />
        </div>
    )
}

AnnotationSectionView.propTypes = annotationSectionViewPropTypes

export default connect(mapStateToProps)(Annotation)
