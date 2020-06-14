// The scene sky.
import React from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import {
    mapSceneSkyTime,
    mapSceneSkySeason
} from '../../../redux/scene/selector'
import './style'

const Sky = () => {
    const
        sceneSkyTime = useSelector(mapSceneSkyTime),
        sceneSeason = useSelector(mapSceneSkySeason)

    return (
        <div className={cx(
            'Sky',
            'abF'
        )}>
            <div
                className={cx(
                    'TimeOfDay',
                    `TimeOfDay__${sceneSkyTime}`,
                    'Sky__filter',
                    'abF'
                )}
            />
            <div
                className={cx(
                    'Season',
                    `Season__${sceneSeason}`,
                    'Sky__filter',
                    'abF'
                )}
            />
        </div>
    )
}

export default Sky

