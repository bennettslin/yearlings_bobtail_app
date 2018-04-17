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
    renderReadySongIndex,
    renderReadyAnnotationIndex
}) => ({
    renderReadySongIndex,
    renderReadyAnnotationIndex
})

/*************
 * CONTAINER *
 *************/

class Annotation extends Component {

    static propTypes = {
        // Through Redux.
        renderReadySongIndex: PropTypes.number.isRequired,
        renderReadyAnnotationIndex: PropTypes.number.isRequired,

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
                    'renderReadySongIndex',
                    {
                        staticProp: 'carouselAnnotationIndex',
                        conditionalShouldBe: false,
                        subUpdatingKey: 'renderReadyAnnotationIndex'
                    },

                    // Presentation props.
                    'isAccessedAnnotation',
                    'isSelectedAnnotation'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { renderReadySongIndex,
                renderReadyAnnotationIndex,
                ...other } = this.props,

            { carouselAnnotationIndex } = other,

            /**
             * If in carousel, get annotation index from parent. Otherwise,
             * fetch popup annotation indices from store and get it from data
             * helper.
             */
            annotationObject = getCarouselOrPopupAnnotationObject({
                renderReadySongIndex,
                carouselAnnotationIndex,
                renderReadyAnnotationIndex
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
    isAccessedAnnotation: PropTypes.bool,
    isSelectedAnnotation: PropTypes.bool,
    annotationTitle: PropTypes.string.isRequired,
    annotationDotKeys: PropTypes.object.isRequired,

    // (Absent in popup annotation.)
    handleTitleClick: PropTypes.func,
    handleContainerClick: PropTypes.func
},

AnnotationSectionView = ({

    // From props.
    inCarousel,
    isAccessedAnnotation,
    isSelectedAnnotation,
    handleTitleClick,
    handleContainerClick,

    // From controller.
    annotationTitle,
    annotationDotKeys,

...other }) => {

    // Show as selected if it's selected in carousel, or if it's in popup.
    const showAsSelected = isSelectedAnnotation || !inCarousel,

        AnnotationTitleChild = (
            <AnnotationTitle
                showAsSelected={showAsSelected}
                isAccessedAnnotation={isAccessedAnnotation}
                annotationDotKeys={annotationDotKeys}
                annotationTitle={annotationTitle}
                handleTitleClick={handleTitleClick}
            />
        )

    return (
        <div
            className={cx(
                'Annotation',
                { 'Annotation__selected': showAsSelected,
                  'Annotation__accessed': isAccessedAnnotation }
            )}
            onClick={handleContainerClick}
            onTouchStart={handleContainerClick}
        >

            {/* In Carousel, annotation title needs to be hideable. */}
            {inCarousel ? (
                <div className={cx(
                    'Annotation__title__inCarousel'
                )}>
                    {AnnotationTitleChild}
                </div>

            ) : (
                AnnotationTitleChild
            )}

            <AnnotationCards {...other}
                /**
                 * Tell card it's in selected annotation so it knows whether
                 * to care about accessed annotation anchor.
                 */
                inSelectedAnnotation={showAsSelected}
            />
        </div>
    )
}

AnnotationSectionView.propTypes = annotationSectionViewPropTypes

export default connect(mapStateToProps)(Annotation)
