import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Tracker from '../../../../Tracker'
import {
    getStartTimeForScene,
    getDurationForScene
} from '../../../../../api/album/time'
import { getMapSceneCursorStatus } from '../../../../../redux/cursor/selectors'
import {
    mapSelectedSongIndex,
    getMapIsSceneSelected,
    mapSelectedTime
} from '../../../../../redux/selected/selectors'
import './style'

const FilmstripCell = ({ sceneIndex }) => {
    const
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        sceneCursorStatus = useSelector(getMapSceneCursorStatus(sceneIndex)),
        isSceneSelected = useSelector(getMapIsSceneSelected(sceneIndex)),
        selectedTime = useSelector(mapSelectedTime),
        sceneStartTime = getStartTimeForScene(
            selectedSongIndex,
            sceneIndex
        ),
        sceneDuration = getDurationForScene(
            selectedSongIndex,
            sceneIndex
        ),

        isOdd = Boolean(sceneIndex % 2),
        isBeforeCursor = sceneCursorStatus === -1,
        isOnCursor = sceneCursorStatus === 0,
        isAfterCursor = sceneCursorStatus === 1,

        cursorWidth = isSceneSelected ?
            (selectedTime - sceneStartTime) /
            sceneDuration * 100 : null

    return (
        <div
            {...{
                className: cx(
                    'FilmstripCell',
                    isOdd && isBeforeCursor && 'FilmstripCell__oddBefore',
                    !isOdd && isBeforeCursor && 'FilmstripCell__evenBefore',
                    isOnCursor && 'FilmstripCell__onCursor',
                    isOdd && isAfterCursor && 'FilmstripCell__oddAfter',
                    !isOdd && isAfterCursor && 'FilmstripCell__evenAfter',
                    'ovH'
                )
            }}
        >
            {/* TODO: Don't rely on cursor width to determine render. */}
            {Number.isFinite(cursorWidth) && (
                <div
                    {...{
                        className: cx(
                            'FilmstripCell__trackerContainer',
                            'abF'
                        )
                    }}
                >
                    <Tracker {...{ cursorWidth }} />
                </div>
            )}
        </div>
    )
}

FilmstripCell.propTypes = {
    sceneIndex: PropTypes.number.isRequired
}

export default memo(FilmstripCell)
