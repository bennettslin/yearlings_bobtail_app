// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import keys from 'lodash.keys'

const defaultProps = {
    cutouts: {},
    fixtures: {},
    actors: {}
}

const propTypes = {
    cutouts: PropTypes.object.isRequired,
    fixtures: PropTypes.object.isRequired,
    actors: PropTypes.object.isRequired,

    // TODO: Get from parent for now, revisit whether this is the best way.
    sceneIndex: PropTypes.number.isRequired,
    songIndex: PropTypes.number.isRequired
}

const StageActionField = ({
    walls,
    fixtures,
    actors,
    sceneIndex,
    songIndex
}) => {

    // console.error('walls, fixtures, actors', walls, fixtures, actors);

    // Actors always change from scene to scene.
    const actorsArray = keys(actors),
        fixturesArray = keys(fixtures),
        wallsArray = keys(walls)


    return (
        <div className={cx(
            'SceneAction',
            'absoluteFullContainer'
        )}>
            <div className={cx(
                'layer',
                'walls-layer'
            )}>
                {wallsArray.map(wallKey => {
                    return (
                        <div
                            key={`${wallKey}-${songIndex}-${sceneIndex}`}
                            className={cx(
                                'wall',
                                'thing',
                                wallKey
                            )}
                        >
                            {wallKey}
                        </div>
                    )
                })}
            </div>

            <div className={cx(
                'layer',
                'fixtures-layer'
            )}>
                {fixturesArray.map(fixtureKey => {
                    return (
                        <div
                            key={`${fixtureKey}-${songIndex}-${sceneIndex}`}
                            className={cx(
                                'fixture',
                                'thing',
                                fixtureKey
                            )}
                        >
                            {fixtureKey}
                        </div>
                    )
                })}
            </div>

            <div className={cx(
                'layer',
                'actors-layer'
            )}>
                {actorsArray.map(actorKey => {
                    return (
                        <div
                            key={`${actorKey}-${songIndex}-${sceneIndex}`}
                            className={cx(
                                'actor',
                                'thing',
                                actorKey
                            )}
                        >
                            <div>{actorKey}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

StageActionField.defaultProps = defaultProps
StageActionField.propTypes = propTypes

export default StageActionField
