// Section to show title and all notes and wormholes for each annotation.

import React, { Component, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import StopPropagationDispatcher from '../../dispatchers/StopPropagationDispatcher'
import AnnotationHeader from './Header'
import AnnotationTitle from './Title'
import AnnotationCard from './Card'

import { populateRefs } from 'helpers/ref'
import {
    getPropsAreShallowEqual,
    getArrayOfLength
} from 'helpers/general'
import { getAnnotationCardsLength } from './helper'

const mapStateToProps = ({
    renderStore: { canCarouselRender },
    renderedStore: { renderedSongIndex }
}) => ({
    canCarouselRender,
    renderedSongIndex
})

class Annotation extends Component {

    static propTypes = {
        // Through Redux.
        canCarouselRender: PropTypes.bool.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,

        // From parent.
        inCarousel: PropTypes.bool,
        isAccessed: PropTypes.bool.isRequired,
        isSelected: PropTypes.bool.isRequired,
        annotationIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        const shouldComponentUpdate =
            nextProps.canCarouselRender && !getPropsAreShallowEqual({
                props: this.props,
                nextProps,
                alwaysBypassCheck: {
                    inCarousel: true
                }
            })

        return shouldComponentUpdate
    }

    _handleContainerClick = (e) => {
        if (this.props.isSelected) {
            this.dispatchStopPropagation(e)
        }
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const {
                inCarousel,
                isAccessed,
                isSelected,
                renderedSongIndex,
                annotationIndex
            } = this.props,

            cardsLength = getAnnotationCardsLength({
                songIndex: renderedSongIndex,
                annotationIndex
            })

        // If in popup, annotation won't always exist.
        return Boolean(cardsLength) && (
            <___>
                <div
                    {...{
                        className: cx(
                            'Annotation'
                        ),
                        onClick: this._handleContainerClick,
                        onTouchStart: this._handleContainerClick
                    }}
                >
                    <AnnotationHeader {...{ inCarousel }}>
                        <AnnotationTitle
                            isShadow
                            {...{
                                isAccessed,
                                isSelected,
                                annotationIndex
                            }}
                        />
                    </AnnotationHeader>

                    <div
                        {...{
                            className: cx(
                                'Annotation__cardField',
                                'bgColour__annotation',
                                'bgColour__annotation__pattern',
                                isSelected && 'bgColour__annotation__selected',
                                isSelected ?
                                    'boxShadow__annotation__selected' :
                                    'boxShadow__annotation',
                                'absoluteFullContainer'
                            )
                        }}
                    />

                    <AnnotationHeader {...{ inCarousel }}>
                        <AnnotationTitle
                            {...{
                                isAccessed,
                                isSelected,
                                annotationIndex
                            }}
                        />
                    </AnnotationHeader>

                    {getArrayOfLength(cardsLength).map(cardIndex => (
                        <AnnotationCard
                            key={cardIndex}
                            {...{
                                inCarousel,
                                isSelected,
                                annotationIndex,
                                cardIndex
                            }}
                        />
                    ))}

                </div>
                <StopPropagationDispatcher {...{ getRefs: this._getRefs }} />
            </___>
        )
    }
}

export default connect(mapStateToProps)(Annotation)
