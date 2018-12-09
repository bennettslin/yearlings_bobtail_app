/**
 * The stage sky. Renders with Theatre, not Scene, because it has no overhead,
 * and the stage lookes weird without it.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getSceneObject } from 'helpers/data'

import {
    TIME_ANYTIME,
    SEASON_INDOOR
} from 'scene/sky'

const mapStateToProps = ({
    renderStore: { canSceneRender },
    renderedStore: { renderedSongIndex },
    sceneStore: { currentSceneIndex }
}) => ({
    canSceneRender,
    renderedSongIndex,
    currentSceneIndex
})

class Sky extends Component {

    static propTypes = {
        // Through Redux.
        canSceneRender: PropTypes.bool.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,
        currentSceneIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canSceneRender
    }

    render() {
        const {
                renderedSongIndex,
                currentSceneIndex
            } = this.props,

            sceneObject = getSceneObject(
                renderedSongIndex,
                currentSceneIndex
            ),

            { sky: skyConfig } = sceneObject,
            {
                time = TIME_ANYTIME,
                season = SEASON_INDOOR
            } = skyConfig

        return (
            <div className={cx(
                'Sky',
                'absoluteFullContainer'
            )}>
                <div
                    className={cx(
                        'Season',
                        `Season__${season}`,
                        'Sky__filter',
                        'absoluteFullContainer'
                    )}
                />
                <div
                    className={cx(
                        'TimeOfDay',
                        `TimeOfDay__${time}`,
                        'Sky__filter',
                        'absoluteFullContainer'
                    )}
                />
                {/* Not going to do this work for now. */}
                {/* <div
                    className={cx(
                        'Sun',
                        `Sun__${timeKey}`,
                        `Sun__${seasonKey}`,
                        'Sky__celestial'
                    )}
                />
                <div
                    className={cx(
                        'Moon',
                        `Moon__${timeKey}`,
                        `Moon__${seasonKey}`,
                        'Sky__celestial'
                    )}
                /> */}
                {/* TODO: Make filter for weather, like clouds and rain. */}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Sky)

