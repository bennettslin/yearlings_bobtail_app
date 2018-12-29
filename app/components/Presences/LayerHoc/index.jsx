import React, { Component } from 'react'
import PropTypes from 'prop-types'
import keys from 'lodash.keys'
import { connect } from 'react-redux'

import PresenceHoc from '../PresenceHoc'
import { getMapForPresenceType } from '../helper'
import { getMapForActorKey } from '../Actor/helper'
import { getPropsAreShallowEqual } from 'helpers/general'

import { ACTORS } from 'constants/scene'

const mapStateToProps = ({
    sceneStore: {
        canSceneRender,
        sceneCubesKey
    }
}) => ({
    canSceneRender,
    sceneCubesKey
})

class LayerHoc extends Component {

    static propTypes = {
        // Through Redux.
        canSceneRender: PropTypes.bool.isRequired,
        sceneCubesKey: PropTypes.string.isRequired,

        // From parent. Parent also passes presenceKeys.
        presenceType: PropTypes.string,
        actorKey: PropTypes.string,
        instanceKey: PropTypes.string
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canSceneRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
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
                    <PresenceHoc
                        key={presenceKey}
                        {...{
                            cubesKey,
                            presenceType: presenceType || ACTORS,
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

export default connect(mapStateToProps)(LayerHoc)
