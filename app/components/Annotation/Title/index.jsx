import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { updateAnnotationStore } from '../../../redux/annotation/action'
import Anchor from '../../Anchor'
import AnnotationAccess from './Access'
import {
    getDotBitForAnnotation,
    getTitleForAnnotation
} from '../../../album/api/annotations'
import { getDotKeysFromBitNumber } from '../../../helpers/dot'
import { IS_UNIT_DOT } from '../../../constants/lyrics'
import { getAccessibleWikiWormholesCount } from './helper'
import { mapDotsBitNumber } from '../../../redux/dots/selectors'
import { mapLyricSongIndex } from '../../../redux/lyric/selectors'
import './style'

const AnnotationTitle = ({
    isAccessed,
    isSelected,
    annotationIndex

}) => {
    const
        dispatch = useDispatch(),
        dotsBitNumber = useSelector(mapDotsBitNumber),
        lyricSongIndex = useSelector(mapLyricSongIndex),
        selectedDotKeys = getDotKeysFromBitNumber(dotsBitNumber),

        accessibleWikiWormholesLength = getAccessibleWikiWormholesCount({
            songIndex: lyricSongIndex,
            annotationIndex,
            selectedDotKeys
        }),

        annotationDotBit = getDotBitForAnnotation(
            lyricSongIndex,
            annotationIndex
        ),

        annotationTitle = getTitleForAnnotation(
            lyricSongIndex,
            annotationIndex
        ),

        showUpDown = isSelected && accessibleWikiWormholesLength > 1,

        isDot = annotationTitle === IS_UNIT_DOT

    const handleAnchorClick = () => {
        if (isSelected) {
            return false
        }

        dispatch(updateAnnotationStore({
            queuedAnnotationIndex: annotationIndex,
            queuedAnnotationFromCarousel: true
        }))
        return true
    }

    return (
        <div
            {...{
                className: cx(
                    'AnnotationTitle',

                    isDot && 'AnnotationTitle__dot',

                    'bgColour__annotation',
                    'bgColour__annotation__pattern',
                    'bgColour__annotation__pattern__reverse',

                    isSelected && 'bgColour__annotation__selected',
                    isSelected ?
                        'boxShadow__annotationTab__selected' :
                        'boxShadow__annotationTab',

                    'fontSize__title'
                )
            }}
        >
            <Anchor
                {...{
                    ...isDot ? {
                        stanzaDotBit: annotationDotBit
                    } : {
                        isAnnotationTitle: true,
                        text: `\u201c${annotationTitle}\u201d`,
                        sequenceDotBit: annotationDotBit
                    },
                    isAccessed,
                    isSelected,
                    handleAnchorClick
                }}
            />
            <AnnotationAccess {...{
                isDot,
                showUpDown
            }} />
        </div>
    )
}

AnnotationTitle.propTypes = {
    isAccessed: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    annotationIndex: PropTypes.number.isRequired
}

export default memo(AnnotationTitle)
