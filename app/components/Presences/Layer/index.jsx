import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Presence from '../../Presence'
import { getKeysForActor } from '../../../scene/aggregators/actors'
import { getKeysForThing } from '../../../scene/aggregators/things'

import { ACTOR } from '../../../constants/scene'

const mapStateToProps = state => {
    const {
        sceneStore: { sceneCubesKey }
    } = state

    return {
        sceneCubesKey
    }
}

class Layer extends PureComponent {

    static propTypes = {
        // Through Redux.
        sceneCubesKey: PropTypes.string.isRequired,

        // From parent. Parent also passes presenceKeys.
        presenceType: PropTypes.string,
        actorKey: PropTypes.string,
        instanceKey: PropTypes.string
    }

    render() {
        const
            {
                sceneCubesKey: cubesKey,
                presenceType,
                actorKey
            } = this.props,

            isActor = Boolean(actorKey),

            presenceKeys = isActor ?
                getKeysForActor(actorKey) :
                getKeysForThing(presenceType)

        return (
            presenceKeys.map(presenceKey => {
                const {
                        [presenceKey]: presenceValue,
                        instanceKey
                    } = this.props,

                    existenceValue =
                        isActor ?
                            // Actor passes an instance if it exists.
                            presenceKey === instanceKey :

                            // Thing passes a presence key with boolean value.
                            Boolean(presenceValue)

                return (
                    <Presence
                        {...{
                            key: presenceKey,
                            cubesKey,
                            presenceType: presenceType || ACTOR,
                            actorKey,
                            presenceKey,
                            existenceValue
                        }}
                    />
                )
            })
        )
    }
}

export default connect(mapStateToProps)(Layer)
