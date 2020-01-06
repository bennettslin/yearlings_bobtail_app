import React, { PureComponent } from 'react'
import cx from 'classnames'

import Sky from './Sky'
import SkyDay from './SkyDay'

import { removeLoadingIndicator } from 'utils/window'

import {
    TIME_TWILIGHT_TAIWAN,
    TIME_NIGHT_TAIWAN,

    SEASON_SPRING,
    SEASON_SUMMER,
    SEASON_AUTUMN,
    SEASON_WINTER,

    SEASON_STAGE,
    SEASON_PAST,
    SEASON_PRESENT,
    SEASON_FUTURE,

    SEASON_LOVE,
    SEASON_NIGHT_MAGIC,
    SEASON_OCEAN_TOP,
    SEASON_OCEAN_SIDE,
    SEASON_THOUGHT
} from '../../../app/scene/sky/keys'

import './style.scss'

class Skies extends PureComponent {
    componentDidMount() {
        logMount('Skies')
        removeLoadingIndicator()
    }

    render() {
        return (
            <div
                {...{
                    className: cx(
                        'Skies',
                        'abF',
                        'flexCentreContainer'
                    )
                }}
            >
                <SkyDay {...{ sceneSeason: SEASON_SPRING }} />
                <SkyDay {...{ sceneSeason: SEASON_SUMMER }} />
                <SkyDay {...{ sceneSeason: SEASON_AUTUMN }} />
                <SkyDay {...{ sceneSeason: SEASON_WINTER }} />
                <div className={cx(
                    'SkyDay',
                    'flexCentreContainer'
                )}>
                    <Sky {...{ sceneSeason: SEASON_PAST }} />
                    <Sky {...{ sceneSeason: SEASON_PRESENT }} />
                    <Sky {...{ sceneSeason: SEASON_FUTURE }} />
                    <Sky {...{ sceneTime: TIME_TWILIGHT_TAIWAN, sceneSeason: SEASON_AUTUMN }} />
                    <Sky {...{ sceneTime: TIME_NIGHT_TAIWAN, sceneSeason: SEASON_AUTUMN }} />
                </div>
                <div className={cx(
                    'SkyDay',
                    'flexCentreContainer'
                )}>
                    <Sky {...{ sceneSeason: SEASON_STAGE }} />
                    <Sky {...{ sceneSeason: SEASON_OCEAN_TOP }} />
                    <Sky {...{ sceneSeason: SEASON_OCEAN_SIDE }} />
                    <Sky {...{ sceneSeason: SEASON_LOVE }} />
                    <Sky {...{ sceneSeason: SEASON_THOUGHT }} />
                    <Sky {...{ sceneSeason: SEASON_NIGHT_MAGIC }} />
                </div>
            </div>
        )
    }
}

export default Skies
