import React, { memo } from 'react'

import ScoreToggle from '../../../Score/Toggle'
import TipsHand from '../../Hand'

const Garryowen = () => (
    <>
        <ScoreToggle />
        <TipsHand />
    </>
)

export default memo(Garryowen)
