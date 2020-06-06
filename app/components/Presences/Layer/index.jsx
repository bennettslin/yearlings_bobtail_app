import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Presence from '../../Presence'
import { getPresencesForLayer } from '../../../api/scene/presences'
import { ACTOR } from '../../../constants/scene'

const Layer = ({
    presenceType,
    actorKey,
    instanceKey,
    yIndex,
    ...other

}) => (
    getPresencesForLayer({
        actorKey,
        presenceType,
        yIndex

    }).map(presenceKey => {
        const
            { [presenceKey]: presenceValue } = other,

            // TODO: Presence knows its own existence value.
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
                    presenceType: presenceType || ACTOR,
                    actorKey,
                    presenceKey,
                    existenceValue
                }}
            />
        )
    })
)

Layer.propTypes = {
    // Parent also passes presenceKeys.
    presenceType: PropTypes.string,
    actorKey: PropTypes.string,
    instanceKey: PropTypes.string
}

export default memo(Layer)
