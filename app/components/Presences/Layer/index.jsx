import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Presence from '../../Presence'
import { getPresenceKeys } from '../../../api/scene/presences'
import { mapSceneCubesKey } from '../../../redux/scene/selectors'
import { ACTOR } from '../../../constants/scene'

const Layer = ({
    presenceType,
    actorKey,
    instanceKey,
    ...other

}) => {
    const
        sceneCubesKey = useSelector(mapSceneCubesKey),
        presenceKeys = getPresenceKeys({
            actorKey,
            presenceType
        })

    return (
        presenceKeys.map(presenceKey => {
            const
                { [presenceKey]: presenceValue } = other,
                existenceValue =
                    actorKey ?
                        // Actor passes an instance if it exists.
                        presenceKey === instanceKey :
                        // Thing passes a presence key with boolean value.
                        Boolean(presenceValue)

            return (
                <Presence
                    {...{
                        key: presenceKey,
                        cubesKey: sceneCubesKey,
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

Layer.propTypes = {
    // Parent also passes presenceKeys.
    presenceType: PropTypes.string,
    actorKey: PropTypes.string,
    instanceKey: PropTypes.string
}

export default memo(Layer)
