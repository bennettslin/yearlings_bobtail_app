import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Tracker from '../../../../Tracker'
import {
    getStartTimeForScene,
    getDurationForScene
} from '../../../../../api/album/time'
import { getCursorIndex } from '../../../../../helpers/cursor'
import {
    mapActivatedSceneIndex,
    getMapIsSceneActivated
} from '../../../../../redux/activated/selectors'
import {
    mapSelectedSongIndex,
    mapSelectedSceneIndex,
    getMapIsSceneSelected,
    mapSelectedTime
} from '../../../../../redux/selected/selectors'
import {
    mapSliderSceneIndex,
    getMapIsSceneSlid
} from '../../../../../redux/slider/selectors'
import './style'

const FilmstripCell = ({ sceneIndex }) => {
    const
        activatedSceneIndex = useSelector(mapActivatedSceneIndex),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedSceneIndex = useSelector(mapSelectedSceneIndex),
        isSceneSelected = useSelector(getMapIsSceneSelected(sceneIndex)),
        selectedTime = useSelector(mapSelectedTime),
        sliderSceneIndex = useSelector(mapSliderSceneIndex),
        sceneStartTime = getStartTimeForScene(
            selectedSongIndex,
            sceneIndex
        ),
        sceneDuration = getDurationForScene(
            selectedSongIndex,
            sceneIndex
        ),

        isOdd = Boolean(sceneIndex % 2),
        isSceneActivated = useSelector(getMapIsSceneActivated(sceneIndex)),
        isSceneSlid = useSelector(getMapIsSceneSlid(sceneIndex)),

        cursorIndex = getCursorIndex(
            sliderSceneIndex,
            activatedSceneIndex,
            selectedSceneIndex
        ),
        isAfterCursor = cursorIndex < sceneIndex,

        // TODO: Make this a selector. Only selected filmstrip scene gets updates.
        cursorWidth =
            (selectedTime - sceneStartTime) /
            sceneDuration * 100

    return (
        <div
            {...{
                className: cx(
                    'FilmstripCell',
                    isOdd && !isAfterCursor && 'FilmstripCell__oddBefore',
                    !isOdd && !isAfterCursor && 'FilmstripCell__evenBefore',
                    isOdd && isAfterCursor && 'FilmstripCell__oddAfter',
                    !isOdd && isAfterCursor && 'FilmstripCell__evenAfter',
                    (isSceneActivated || isSceneSlid) &&
                        'FilmstripCell__lyricsLocked',
                    isSceneActivated &&
                        'FilmstripCell__activated',
                    isSceneSlid &&
                        'FilmstripCell__slider',
                    isSceneSelected &&
                        'FilmstripCell__selected',
                    'ovH'
                )
            }}
        >
            {/* TODO: Don't rely on cursor width to determine render. */}
            {isSceneSelected && Number.isFinite(cursorWidth) && (
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
