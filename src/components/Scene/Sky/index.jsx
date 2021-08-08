// The scene sky.
import React from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import {
    mapSceneSkyTime,
    mapSceneSkySeason,
} from '../../../redux/scene/selector'
import './style'

const Sky = () => {
    const
        sceneSkyTime = useSelector(mapSceneSkyTime),
        sceneSeason = useSelector(mapSceneSkySeason)

    return (
        <div className={cx(
            'Sky',
            'abF',
        )}>
            <div
                {...{
                    className: cx(
                        'TimeOfDay',
                        'TimeOfDay__space',
                        'Sky__filter',
                        'abF',
                        sceneSkyTime,
                    ),
                }}
            />
            <div
                {...{
                    className: cx(
                        'TimeOfDay',
                        'TimeOfDay__horizon',
                        'Sky__filter',
                        'abF',
                        sceneSkyTime,
                    ),
                }}
            />
            <div
                {...{
                    className: cx(
                        'Season',
                        'Season__space',
                        'Sky__filter',
                        'abF',
                        sceneSeason,
                    ),
                }}
            />
            <div
                {...{
                    className: cx(
                        'Season',
                        'Season__horizon',
                        'Sky__filter',
                        'abF',
                        sceneSeason,
                    ),
                }}
            />
        </div>
    )
}

export default Sky

