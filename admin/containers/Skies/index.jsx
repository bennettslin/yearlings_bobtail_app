import React, { PureComponent } from 'react'
import cx from 'classnames'

import Sky from './Sky'
import SkyDay from './SkyDay'

import { removeLoadingIndicator } from '../../../app/utils/browser'

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
                        'fCC'
                    )
                }}
            >
                <SkyDay {...{ sceneSkySeason: SEASON_SPRING }} />
                <SkyDay {...{ sceneSkySeason: SEASON_SUMMER }} />
                <SkyDay {...{ sceneSkySeason: SEASON_AUTUMN }} />
                <SkyDay {...{ sceneSkySeason: SEASON_WINTER }} />
                <div className={cx(
                    'SkyDay',
                    'fCC'
                )}>
                    <Sky {...{ sceneSkySeason: SEASON_PAST }} />
                    <Sky {...{ sceneSkySeason: SEASON_PRESENT }} />
                    <Sky {...{ sceneSkySeason: SEASON_FUTURE }} />
                    <Sky {...{ sceneSkyTime: TIME_TWILIGHT_TAIWAN, sceneSkySeason: SEASON_AUTUMN }} />
                    <Sky {...{ sceneSkyTime: TIME_NIGHT_TAIWAN, sceneSkySeason: SEASON_AUTUMN }} />
                </div>
                <div className={cx(
                    'SkyDay',
                    'fCC'
                )}>
                    <Sky {...{ sceneSkySeason: SEASON_STAGE }} />
                    <Sky {...{ sceneSkySeason: SEASON_OCEAN_TOP }} />
                    <Sky {...{ sceneSkySeason: SEASON_OCEAN_SIDE }} />
                    <Sky {...{ sceneSkySeason: SEASON_LOVE }} />
                    <Sky {...{ sceneSkySeason: SEASON_THOUGHT }} />
                    <Sky {...{ sceneSkySeason: SEASON_NIGHT_MAGIC }} />
                </div>
            </div>
        )
    }
}

export default Skies
