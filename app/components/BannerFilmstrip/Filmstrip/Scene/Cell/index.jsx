import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Tracker from '../../../../Tracker'
import {
    getMapSceneCursorStatus,
    getMapSceneCursorWidth
} from '../../../../../redux/cursor/selectors'
import './style'

const FilmstripCell = ({ sceneIndex }) => {
    const
        sceneCursorStatus = useSelector(getMapSceneCursorStatus(sceneIndex)),
        sceneCursorWidth = useSelector(getMapSceneCursorWidth(sceneIndex)),

        isOdd = Boolean(sceneIndex % 2),
        isBeforeCursor = sceneCursorStatus === -1,
        isOnCursor = sceneCursorStatus === 0,
        isAfterCursor = sceneCursorStatus === 1

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
            {Number.isFinite(sceneCursorWidth) && (
                <div
                    {...{
                        className: cx(
                            'FilmstripCell__trackerContainer',
                            'abF'
                        )
                    }}
                >
                    <Tracker {...{ cursorWidth: sceneCursorWidth }} />
                </div>
            )}
        </div>
    )
}

FilmstripCell.propTypes = {
    sceneIndex: PropTypes.number.isRequired
}

export default memo(FilmstripCell)
