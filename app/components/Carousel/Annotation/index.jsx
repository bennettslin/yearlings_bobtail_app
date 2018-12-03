// Container to show single annotation in carousel.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Annotation from '../../Annotation'

import { CAROUSEL_SCROLL } from 'constants/dom'
import { getPrefixedDotLetterClassNames } from 'helpers/dot'
import { getPropsAreShallowEqual } from 'helpers/general'

import { getCarouselAnnotationData } from './helper'

const mapStateToProps = ({
    renderStore: { canCarouselRender },
    renderedStore: { renderedSongIndex }
}) => ({
    canCarouselRender,
    renderedSongIndex
})

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
            nextProps
        })
    }

    setCarouselAnnotationElement = (node) => {
        this.props.setCarouselAnnotationElement({
            node,
            index: this.props.annotationIndex
        })
    }

    render() {
        const {
                renderedSongIndex,
                isAccessed,
                isSelected,
                annotationIndex
            } = this.props,

            {
                columnKey,
                dotKeys

            } = getCarouselAnnotationData({
                songIndex: renderedSongIndex,
                annotationIndex
            })

        return (
            <div
                key={annotationIndex}
                ref={this.setCarouselAnnotationElement}
                className={cx(
                    'CarouselAnnotation',

                    `${CAROUSEL_SCROLL}__${annotationIndex}`,

                    columnKey &&
                    `CarouselAnnotation__inEarColumn__${columnKey}`,

                    getPrefixedDotLetterClassNames(
                        dotKeys,
                        // "Child carousel annotation letter."
                        'CcA'
                    )
                )}
            >
                <Annotation
                    inCarousel
                    {...{
                        isAccessed,
                        isSelected,
                        annotationIndex
                    }}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(CarouselAnnotation)
