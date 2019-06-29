import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { ESTHER_MOTHER } from '../../../../../constants/scene/actors'

const EstherMotherLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: ESTHER_MOTHER,
                instanceKey
            }}
        />
    )
})

EstherMotherLayer.propTypes = propTypes

export default EstherMotherLayer
