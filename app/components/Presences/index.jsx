/**
 * A single row of presences. A presences is any actor, fixture or prop on the
 * stage for any given scene. I really couldn't think of a better word...
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Presence from '../Presence'

import { getPropsAreShallowEqual } from 'helpers/general'

const mapStateToProps = ({
    renderStore: { canSceneRender },
    sceneStore: {
        sceneCubesKey,
        presenceYIndices
    }
}) => ({
    canSceneRender,
    sceneCubesKey,
    presenceYIndices
})

class Presences extends Component {

    static propTypes = {
        // Through Redux.
        canSceneRender: PropTypes.bool.isRequired,
        sceneCubesKey: PropTypes.string.isRequired,
        presenceYIndices: PropTypes.any.isRequired,

        // From parent.
        yIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canSceneRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    render() {
        const {
                yIndex,
                sceneCubesKey: cubesKey,
                presenceYIndices
            } = this.props,

            presences = presenceYIndices[yIndex]

        return presences ? (
            <div
                className={cx(
                    `Presences__y${yIndex}`,
                    'absoluteFullContainer'
                )}
            >
                {presences.map(presence => (
                    <Presence
                        key={presence.name}
                        {...{
                            presenceType: presence.type,
                            nameKey: presence.name,
                            instanceKey: presence.instance,
                            arrangement: presence.arrangement,
                            cubesKey,
                            yIndex
                        }}
                    />
                ))}
            </div>
        ) : null
    }
}

export default connect(mapStateToProps)(Presences)
