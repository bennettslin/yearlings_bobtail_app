import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import AnnotationSection from '../annotation/annotation-section'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

/*************
 * CONTAINER *
 *************/

class CarouselAnnotation extends Component {

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [

                ]
            })

        if (props.annotationIndex === 1) {
            console.error('props:', JSON.stringify(props, null, 2));
            console.error('nextProps:', JSON.stringify(nextProps, null, 2));
            console.error(`componentShouldUpdate:`, componentShouldUpdate);
        }

        return componentShouldUpdate || true
    }

    render() {
        const { annotationIndex,
                handleLyricAnnotationSelect,
                ...other } = this.props,

            isSelectedAnnotation = annotationIndex === other.selectedAnnotationIndex,
            isAccessedAnnotation = annotationIndex === other.accessedAnnotationIndex,
            handleTitleClick = !isSelectedAnnotation ? e => handleLyricAnnotationSelect(e, annotationIndex, true) : null

        return (
            <CarouselAnnotationView {...other}
                annotationIndex={annotationIndex}
                isSelectedAnnotation={isSelectedAnnotation}
                isAccessedAnnotation={isAccessedAnnotation}
                handleTitleClick={handleTitleClick}
            />
        )
    }
}

CarouselAnnotation.propTypes = {
    annotationIndex: PropTypes.number.isRequired,
    handleLyricAnnotationSelect: PropTypes.func.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const CarouselAnnotationView = ({

    // From props.
    annotation,
    annotationIndex,
    annotationColumn,
    annotationDotKeys,

...other }) => (

    <div className={classnames(
            'carousel-annotation',
            `carousel-annotation-${annotationIndex}`,
            annotationColumn && `in-column-${annotationColumn}`,
            annotationDotKeys
        )}
    >
        <AnnotationSection {...other}
            inCarousel={true}
            popupAnnotation={annotation}
        />
    </div>
)

CarouselAnnotationView.propTypes = {
    annotation: PropTypes.object.isRequired,
    annotationIndex: PropTypes.number.isRequired
}

export default CarouselAnnotation
