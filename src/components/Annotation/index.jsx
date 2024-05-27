// Section to show title and all notes and wormholes for each annotation.
import React, { useRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../../hocs/DidMountHoc'
import getSongServerClientHoc from '../../hocs/SongHoc'
import StopPropagationDispatcher from '../../dispatchers/StopPropagation'
import ShareButtons from '../ShareButtons'
import AnnotationHeader from './Header'
import AnnotationCard from './Card'
import { getAnnotationCardIndices } from '../../endpoint/album/cards'
import './style'
import { ANNOTATION_SOCIAL_MEDIA } from '../../constants/socialMedia'
import AnnotationToggleButton from './ToggleButton'

const Annotation = ({
    didMount,
    inCarousel,
    isAccessed,
    isSelected,
    serverClientSongIndex,
    annotationIndex,

}) => {
    const stopPropagation = useRef()

    const onClick = e => {
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
                        'Annotation',
                    ),
                    onClick,
                }}
            >
                <div
                    {...{
                        ...didMount && {
                            className: cx(
                                'Annotation__cardField',
                                'colour__annotation',
                                'bgColour__annotation__pattern',
                                isSelected && 'bgColour__annotation__selected',
                                'boxShadow__annotation',
                                'abF',
                            ),
                        },
                    }}
                />

                <AnnotationHeader
                    {...{
                        inCarousel,
                        isAccessed,
                        isSelected,
                        annotationIndex,
                    }}
                />

                {getAnnotationCardIndices(
                    serverClientSongIndex,
                    annotationIndex,
                ).map(cardIndex => (
                    <AnnotationCard
                        {...{
                            key: cardIndex,
                            inCarousel,
                            isSelected,
                            annotationIndex,
                            cardIndex,
                        }}
                    />
                ))}
                <div
                    {...{
                        className: cx(
                            'Annotation__footer',
                        ),
                    }}
                >
                    <ShareButtons
                        {...{
                            id: ANNOTATION_SOCIAL_MEDIA,
                            annotationIndex,
                        }}
                    />
                    <AnnotationToggleButton />
                </div>
            </div>
            <StopPropagationDispatcher {...{ ref: stopPropagation }} />
        </>
    )
}

Annotation.propTypes = {
    didMount: PropTypes.bool.isRequired,
    inCarousel: PropTypes.bool,
    isAccessed: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    serverClientSongIndex: PropTypes.number.isRequired,
    annotationIndex: PropTypes.number.isRequired,
}

export default memo(getDidMountHoc(getSongServerClientHoc(Annotation)))
