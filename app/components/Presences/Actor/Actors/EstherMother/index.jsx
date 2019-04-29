import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { ESTHER_MOTHER } from '../../../../../scene/actors/keys'

const EstherMotherLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: ESTHER_MOTHER,
                instanceKey
            }}
        />
    )
})

EstherMotherLayer.propTypes = propTypes

export default EstherMotherLayer
