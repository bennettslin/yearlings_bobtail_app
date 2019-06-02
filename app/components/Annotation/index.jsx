// Section to show title and all notes and wormholes for each annotation.

import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import StopPropagationDispatcher from '../../dispatchers/StopPropagation'
import AnnotationHeader from './Header'
import AnnotationCard from './Card'

import { populateRefs } from 'helpers/ref'
import { getArrayOfLength } from 'helpers/general'
import { getAnnotationCardsLength } from './helper'

const mapStateToProps = ({
    lyricStore: { lyricSongIndex }
}) => ({
    lyricSongIndex
})

class Annotation extends PureComponent {

    static propTypes = {
        // Through Redux.
        lyricSongIndex: PropTypes.number.isRequired,

        // From parent.
        inCarousel: PropTypes.bool,
        isAccessed: PropTypes.bool.isRequired,
        isSelected: PropTypes.bool.isRequired,
        annotationIndex: PropTypes.number.isRequired
    }

    _handleContainerClick = (e) => {
        logEvent(Annotation.name, e)
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
                lyricSongIndex,
                annotationIndex
            } = this.props,

            cardsLength = getAnnotationCardsLength({
                songIndex: lyricSongIndex,
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
                        onClick: this._handleContainerClick
                    }}
                >
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
                                'abF'
                            )
                        }}
                    />

                    <AnnotationHeader
                        {...{
                            inCarousel,
                            isAccessed,
                            isSelected,
                            annotationIndex
                        }}
                    />

                    {getArrayOfLength(cardsLength).map(cardIndex => (
                        <AnnotationCard
                            {...{
                                key: cardIndex,
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
