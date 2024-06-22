import React, { memo, useRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { updateAnnotationStore } from '../../../redux/annotation/action'
import getSongServerClientHoc from '../../../hocs/SongHoc'
import StopPropagationDispatcher from '../../../dispatchers/StopPropagation'
import Anchor from '../../Anchor'
import AnnotationAccess from './Access'
import {
    getDotsBitForAnnotation,
    getTitleForAnnotation,
} from '../../../endpoint/album/annotations'
import { getDotKeysFromBit } from '../../../helpers/dot'
import { IS_UNIT_DOT } from '../../../constants/lyrics'
import { getAccessibleWikiWormholesCount } from './helper'
import { mapSelectedDotsBit } from '../../../redux/dots/selector'
import './style'

const AnnotationTitle = ({
    isAccessed,
    isSelected,
    serverClientSongIndex,
    annotationIndex,

}) => {
    const
        dispatch = useDispatch(),
        stopPropagation = useRef(),
        selectedDotsBit = useSelector(mapSelectedDotsBit),
        selectedDotKeys = getDotKeysFromBit(selectedDotsBit),

        accessibleWikiWormholesLength = getAccessibleWikiWormholesCount({
            songIndex: serverClientSongIndex,
            annotationIndex,
            selectedDotKeys,
        }),

        dotsBit = getDotsBitForAnnotation(
            serverClientSongIndex,
            annotationIndex,
        ),

        annotationTitle = getTitleForAnnotation(
            serverClientSongIndex,
            annotationIndex,
        ),

        showUpDown = isSelected && accessibleWikiWormholesLength > 1,

        isDot = annotationTitle === IS_UNIT_DOT

    const handleAnchorClick = e => {
        if (isSelected) {
            return false
        }

        stopPropagation.current(e)

        dispatch(updateAnnotationStore({
            queuedAnnotationIndex: annotationIndex,
            queuedAnnotationFromCarousel: true,
        }))
        return true
    }

    return (
        <div
            {...{
                className: cx(
                    'AnnotationTitle',

                    isDot && 'AnnotationTitle__dot',

                    'colour__annotation',
                    'bgColour__annotation__pattern',
                    'bgColour__annotation__pattern__reverse',

                    isSelected && 'bgColour__annotation__selected',
                    'boxShadow__annotationTab',
                ),
            }}
        >
            <Anchor
                {...{
                    className: 'fontSize__smallTitle',
                    ...isDot ? {
                    } : {
                        isAnnotationTitle: true,
                        text: `\u201c${annotationTitle}\u201d`,
                    },
                    analyticsLabel: 'annotationTitle',
                    dotsBit,
                    isAccessed,
                    isSelected,
                    handleAnchorClick,
                }}
            />
            <AnnotationAccess {...{
                isDot,
                showUpDown,
            }} />
            <StopPropagationDispatcher {...{ ref: stopPropagation }} />
        </div>
    )
}

AnnotationTitle.propTypes = {
    isAccessed: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    serverClientSongIndex: PropTypes.number.isRequired,
    annotationIndex: PropTypes.number.isRequired,
}

export default memo(getSongServerClientHoc(AnnotationTitle))
