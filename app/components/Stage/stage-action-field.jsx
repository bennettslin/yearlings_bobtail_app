// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const defaultProps = {
    walls: {},
    fixtures: {},
    actors: {}
}

const propTypes = {
    walls: PropTypes.object.isRequired,
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

    /**
     * TODO: Desired animation behaviour.
     * Maybe do this last, after images are more or less in place?
     *
     * When showing scene for first time:
     * Things that should be there should animate in.
     *
     * When changing from one scene to the next:
     * Things that are no longer there should animate out.
     * Wait for floor panels to change.
     * Things that aren't already there should animate in.
     * Things that are already there should not change in any way.
     */

    // console.error('walls, fixtures, actors', walls, fixtures, actors);

    // Actors always change from scene to scene.
    const actorsArray = Object.keys(actors),
        fixturesArray = Object.keys(fixtures),
        wallsArray = Object.keys(walls)


    return (
        <div className="stage-action-field">
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
