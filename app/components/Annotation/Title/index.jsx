import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { updateAnnotationStore } from '../../../redux/annotation/action'
import Anchor from '../../Anchor'
import AnnotationTitleText from './TitleText'
import AnnotationAccess from './Access'
import {
    getDotKeysForAnnotation,
    getTitleForAnnotation
} from '../../../album/api/annotations'
import { getDotKeysFromBitNumber } from '../../../helpers/dot'
import { IS_UNIT_DOT } from '../../../constants/lyrics'
import { getAccessibleWikiWormholesCount } from './helper'
import { DOTS_BIT_NUMBER_SELECTOR } from '../../../redux/dots/selectors'
import { LYRIC_SONG_INDEX_SELECTOR } from '../../../redux/lyric/selectors'
import './style'

const AnnotationTitle = ({
    isAccessed,
    isSelected,
    annotationIndex

}) => {
    const
        dispatch = useDispatch(),
        dotsBitNumber = useSelector(DOTS_BIT_NUMBER_SELECTOR),
        lyricSongIndex = useSelector(LYRIC_SONG_INDEX_SELECTOR),
        selectedDotKeys = getDotKeysFromBitNumber(dotsBitNumber),

        accessibleWikiWormholesLength = getAccessibleWikiWormholesCount({
            songIndex: lyricSongIndex,
            annotationIndex,
            selectedDotKeys
        }),

        annotationDotKeys = getDotKeysForAnnotation(
            lyricSongIndex,
            annotationIndex
        ),

        annotationTitle = getTitleForAnnotation(
            lyricSongIndex,
            annotationIndex
        ),

        showUpDown = isSelected && accessibleWikiWormholesLength > 1,

        isDot = annotationTitle === IS_UNIT_DOT,

        _handleTitleClick = () => {
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
            {isDot ? (
                <Anchor
                    {...{
                        isAccessed,
                        isSelected,
                        stanzaDotBit: dotsBitNumber,
                        handleAnchorClick: _handleTitleClick
                    }}
                />
            ) : (
                <AnnotationTitleText
                    {...{
                        isAccessed,
                        isSelected,
                        text: `\u201c${annotationTitle}\u201d`,
                        sequenceDotKeys: annotationDotKeys,
                        handleAnchorClick: _handleTitleClick
                    }}
                />
            )}
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
