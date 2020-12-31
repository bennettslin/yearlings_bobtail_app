import React, { useContext, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import PlayerTimeContext from '../../../../../contexts/PlayerTime'
import Tracker from '../../../../Tracker'
import { getMapIsSceneCursor } from '../../../../../redux/cursor/selector'
import { getMapSceneTrackerWidth } from '../../../../../redux/tracker/selector'
import { SCENE_CURSOR_CHILD_PREFIX } from '../../../../../constants/cursor'
import './style'

const FilmstripCell = ({ sceneIndex }) => {
    const
        { playerTime } = useContext(PlayerTimeContext),
        isSceneCursor = useSelector(getMapIsSceneCursor(sceneIndex)),
        sceneTrackerWidth = useSelector(getMapSceneTrackerWidth({
            sceneIndex,
            playerTime,
        }))

    return (
        <div
            {...{
                className: cx(
                    'FilmstripCell',
                    `${SCENE_CURSOR_CHILD_PREFIX}${sceneIndex}`,
                    isSceneCursor ?
                        'FilmstripCell__cursor' :
                        'FilmstripCell__notCursor',
                    'ovH'
                ),
            }}
        >
            {Number.isFinite(sceneTrackerWidth) && (
                <div
                    {...{
                        className: cx(
                            'FilmstripCell__trackerContainer',
                            'abF'
                        ),
                    }}
                >
                    <Tracker {...{ trackerLength: sceneTrackerWidth }} />
                </div>
            )}
        </div>
    )
}

FilmstripCell.propTypes = {
    sceneIndex: PropTypes.number.isRequired,
}

export default memo(FilmstripCell)
