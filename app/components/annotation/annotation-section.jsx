// Section to show title and all notes and portals for each annotation.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import AnnotationUnit from './annotation-unit'
import DotAnchor from '../dot/dot-anchor'
import { IS_DOT_STANZA } from '../../constants/lyrics'
import { getCarouselOrPopupAnnotationObject } from '../../helpers/data-helper'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

const mapStateToProps = ({
    renderReadySongIndex,
    popupAnnotationSongIndex,
    popupAnnotationIndex
}) => ({
    renderReadySongIndex,
    popupAnnotationSongIndex,
    popupAnnotationIndex
})

/*************
 * CONTAINER *
 *************/

class AnnotationSection extends Component {

    static propTypes = {
        // Through Redux.
        renderReadySongIndex: PropTypes.number.isRequired,
        popupAnnotationSongIndex: PropTypes.number.isRequired,
        popupAnnotationIndex: PropTypes.number.isRequired,

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
                        subUpdatingKey: 'popupAnnotationSongIndex'
                    },
                    {
                        staticProp: 'carouselAnnotationIndex',
                        conditionalShouldBe: false,
                        subUpdatingKey: 'popupAnnotationIndex'
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
                popupAnnotationSongIndex,
                popupAnnotationIndex,
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
                popupAnnotationSongIndex,
                popupAnnotationIndex
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
    handleTitleClick: PropTypes.func
},

AnnotationSectionView = ({

    // From props.
    inCarousel,
    isAccessedAnnotation,
    isSelectedAnnotation,
    handleTitleClick,

    // From controller.
    annotationTitle,
    annotationDotKeys,

...other }) => {

    // Show as selected if it's selected in carousel, or if it's in popup.
    const showAsSelected = isSelectedAnnotation || !inCarousel

    return (
        <div className={classnames(
            'section',
            'annotation-section',
            { 'selected-annotation': showAsSelected,
              'accessed-annotation': isAccessedAnnotation }
        )}>
            <div className="annotation-title-block">
                {annotationTitle === IS_DOT_STANZA ? (
                    <div className="annotation-title">
                        <DotAnchor
                            isSmall={true}
                            isSelected={showAsSelected}
                            accessHighlighted={isAccessedAnnotation}
                            dotKeys={annotationDotKeys}
                            handleDotButtonClick={handleTitleClick}
                        />
                    </div>
                ) : (
                    <a className={classnames(
                            'anchor-block',
                            'text-anchor-block',
                            'annotation-title',
                            annotationDotKeys,
                            { 'selected': showAsSelected,
                              'access-highlighted': isAccessedAnnotation }
                        )}
                        onClick={handleTitleClick}
                    >
                        <span className="underline-bar" />
                        <span className="text-span">
                            {`\u201c${annotationTitle}\u201d`}
                        </span>
                    </a>
                )}
            </div>
            <div className="cards-block">
                <AnnotationUnit {...other}

                    /**
                     * Tell card it's in selected annotation so it knows
                     * whether to care about accessed annotation anchor.
                     */
                    inSelectedAnnotation={showAsSelected}
                />
            </div>
        </div>
    )
}

AnnotationSectionView.propTypes = annotationSectionViewPropTypes

export default connect(mapStateToProps)(AnnotationSection)
