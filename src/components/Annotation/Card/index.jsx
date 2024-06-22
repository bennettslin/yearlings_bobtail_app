// Component to show individual annotation note or all wormholes.
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import getSongServerClientHoc from '../../../hocs/SongHoc'
import DotSequenceParent from '../../DotSequence/Parent'
import Texts from '../../Texts'
import AnnotationWormholes from './Wormholes'
import {
    getDescriptionForAnnotationCard,
    getDotsBitForAnnotationCard,
} from '../../../endpoint/album/cards'
import { getDotsBitHasKey } from '../../../helpers/dot'
import { getMapHasSelectedDot } from '../../../redux/dots/selector'
import { BACKSTORY, NARRATIVE, AFTERWORD } from '../../../constants/dots'
import './style'

const AnnotationCard = ({
    didMount,
    serverClientSongIndex,
    annotationIndex,
    inCarousel,
    isSelected,
    cardIndex,

}) => {
    const
        dotsBit = getDotsBitForAnnotationCard(
            serverClientSongIndex,
            annotationIndex,
            cardIndex,
        ),
        hasSelectedDot = useSelector(getMapHasSelectedDot(dotsBit)),
        description = getDescriptionForAnnotationCard(
            serverClientSongIndex,
            annotationIndex,
            cardIndex,
        )

    return (
        <div
            {...{
                ...didMount && {
                    className: cx(
                        'AnnotationCardContainer',
                        hasSelectedDot && 'AnnotationCardContainer__shown',
                        inCarousel && 'AnnotationCardContainer__animated',
                        'ovH',
                    ),
                },
            }}
        >
            <div
                {...{
                    ...didMount && {
                        className: cx(
                            'AnnotationCard',
                            description ?
                                [
                                    'AnnotationCard__isText',
                                    getDotsBitHasKey(dotsBit, BACKSTORY) &&
                                        'AnnotationCard__backstory',
                                    getDotsBitHasKey(dotsBit, NARRATIVE) &&
                                        'AnnotationCard__narrative',
                                    getDotsBitHasKey(dotsBit, AFTERWORD) &&
                                        'AnnotationCard__afterword',
                                ] :
                                'AnnotationCard__wormhole',
                            'fontSize__verse',
                        ),
                    },
                }}
            >
                {description ? (
                    <>
                        <DotSequenceParent
                            inAnnotationCard
                            {...{ dotsBit }}
                        />
                        <div
                            {...{
                                ...didMount && {
                                    className: 'AnnotationCard__text',
                                },
                            }}
                        >
                            <Texts
                                {...{
                                    songIndex: serverClientSongIndex,
                                    text: description,
                                    annotationIndex,
                                }}
                            />
                        </div>
                    </>
                ) : (
                    <AnnotationWormholes
                        {...{
                            isSelected,
                            annotationIndex,
                        }}
                    />
                )}
            </div>
        </div>
    )
}

AnnotationCard.propTypes = {
    didMount: PropTypes.bool.isRequired,
    inCarousel: PropTypes.bool,
    isSelected: PropTypes.bool.isRequired,
    serverClientSongIndex: PropTypes.number.isRequired,
    annotationIndex: PropTypes.number.isRequired,
    cardIndex: PropTypes.number.isRequired,
}

export default memo(getDidMountHoc(getSongServerClientHoc(AnnotationCard)))
