import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Tracker from '../../../../Tracker'
import { getMapIsSceneCursor } from '../../../../../redux/cursor/selector'
import { getMapSceneTrackerWidth } from '../../../../../redux/tracker/selector'
import { SCENE_CURSOR_CHILD_PREFIX } from '../../../../../constants/cursor'
import './style'

const FilmstripCell = ({ sceneIndex }) => {
    const
        isSceneCursor = useSelector(getMapIsSceneCursor(sceneIndex)),
        sceneTrackerWidth = useSelector(getMapSceneTrackerWidth(sceneIndex))

    return (
        <div
            {...{
                className: cx(
                    'FilmstripCell',
                    `${SCENE_CURSOR_CHILD_PREFIX}${sceneIndex}`,
                    isSceneCursor && 'FilmstripCell__cursor',
                    'ovH'
                )
            }}
        >
            {Number.isFinite(sceneTrackerWidth) && (
                <div
                    {...{
                        className: cx(
                            'FilmstripCell__trackerContainer',
                            'abF'
                        )
                    }}
                >
                    <Tracker {...{ trackerLength: sceneTrackerWidth }} />
                </div>
            )}
        </div>
    )
}

FilmstripCell.propTypes = {
    sceneIndex: PropTypes.number.isRequired
}

export default memo(FilmstripCell)
