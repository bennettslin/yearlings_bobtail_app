// Section to show title and all notes and wormholes for each annotation.
import React, { useRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getFinalSideHoc from '../FinalSideHoc'
import StopPropagationDispatcher from '../../dispatchers/StopPropagation'
import AnnotationHeader from './Header'
import AnnotationCard from './Card'
import { getAnnotationCardIndices } from '../../api/album/cards'
import './style'

const Annotation = ({
    inCarousel,
    isAccessed,
    isSelected,
    finalSideSongIndex,
    annotationIndex

}) => {
    const stopPropagation = useRef()

    const onClick = e => {
        logEvent({ e, componentName: `Annotation ${annotationIndex}` })

        if (isSelected) {
            stopPropagation.current(e)
        }
    }

    // If in popup, annotation won't always exist.
    return annotationIndex && (
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

                {getAnnotationCardIndices(
                    finalSideSongIndex,
                    annotationIndex
                ).map(cardIndex => (
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
            <StopPropagationDispatcher {...{ ref: stopPropagation }} />
        </>
    )
}

Annotation.propTypes = {
    inCarousel: PropTypes.bool,
    isAccessed: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    finalSideSongIndex: PropTypes.number.isRequired,
    annotationIndex: PropTypes.number.isRequired
}

export default memo(getFinalSideHoc(Annotation))
