import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import keys from 'lodash.keys'
import { connect } from 'react-redux'

import Presence from '../Presence'
import { getMapForPresenceType } from '../Thing/helper'
import { getMapForActorKey } from '../Actor/helper'

import { ACTOR } from 'constants/scene'

const mapStateToProps = ({
    sceneStore: { sceneCubesKey }
}) => ({
    sceneCubesKey
})

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

            presenceMap = isActor ?
                getMapForActorKey(actorKey) :
                getMapForPresenceType(presenceType)

        return (
            keys(presenceMap).map(presenceKey => {
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
