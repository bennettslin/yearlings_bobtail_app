// Section to show title and all notes and wormholes for each annotation.
import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'

import StopPropagationDispatcher from '../../dispatchers/StopPropagation'
import AnnotationHeader from './Header'
import AnnotationCard from './Card'

import { getCardCountForAnnotation } from '../../album/api/annotations'
import { populateRefs } from '../../helpers/ref'
import { getArrayOfLength } from '../../helpers/general'
import { LYRIC_SONG_INDEX_SELECTOR } from '../../redux/lyric/selectors'

const Annotation = ({
    inCarousel,
    isAccessed,
    isSelected,
    annotationIndex

}) => {
    const
        refDispatch = {},
        lyricSongIndex = useSelector(LYRIC_SONG_INDEX_SELECTOR),

        cardCount = getCardCountForAnnotation(
            lyricSongIndex,
            annotationIndex
        ),

        onClick = e => {
            logEvent({ e, componentName: `Annotation ${annotationIndex}` })

            if (isSelected) {
                refDispatch.dispatchStopPropagation(e)
            }
        },

        getRefs = payload => {
            populateRefs(refDispatch, payload)
        }

    // If in popup, annotation won't always exist.
    return Boolean(cardCount) && (
        <>
            <div
                {...{
                    className: cx(
                        'Annotation'
                    ),
                    onClick
                }}
            >
                <div
                    {...{
                        className: cx(
                            'Annotation__cardField',
                            'bgColour__annotation',
                            'bgColour__annotation__pattern',
                            isSelected && 'bgColour__annotation__selected',
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

                {getArrayOfLength(cardCount).map(cardIndex => (
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
            <StopPropagationDispatcher {...{ getRefs }} />
        </>
    )
}

Annotation.propTypes = {
    // From parent.
    inCarousel: PropTypes.bool,
    isAccessed: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    annotationIndex: PropTypes.number.isRequired
}

export default Annotation
