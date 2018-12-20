import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import GingerbreadPrison from './Instances/GingerbreadPrison'
import CheekUnveiled from './Instances/CheekUnveiled'
import HardOn from './Instances/HardOn'
import Missionary from './Instances/Missionary'
import Afterglow from './Instances/Afterglow'
import BrushOff from './Instances/BrushOff'
import CelibateFreezing from './Instances/CelibateFreezing'
import AwkwardConsolation from './Instances/AwkwardConsolation'
import Pampas from './Instances/Pampas'
import GettingDark from './Instances/GettingDark'
import Cliff from './Instances/Cliff'
import FinalDream from './Instances/FinalDream'

import {
    GINGERBREAD_PRISON,
    CHEEK_UNVEILED,
    HARD_ON,
    MISSIONARY,
    AFTERGLOW,
    BRUSH_OFF,
    CELIBATE_FREEZING,
    AWKWARD_CONSOLATION,
    PAMPAS,
    GETTING_DARK,
    CLIFF,
    FINAL_DREAM
} from '../../../../../scene/instanceKeys/bennettLiz'

const INSTANCES_MAP = {
    [GINGERBREAD_PRISON]: GingerbreadPrison,
    [CHEEK_UNVEILED]: CheekUnveiled,
    [HARD_ON]: HardOn,
    [MISSIONARY]: Missionary,
    [AFTERGLOW]: Afterglow,
    [BRUSH_OFF]: BrushOff,
    [CELIBATE_FREEZING]: CelibateFreezing,
    [AWKWARD_CONSOLATION]: AwkwardConsolation,
    [PAMPAS]: Pampas,
    [GETTING_DARK]: GettingDark,
    [CLIFF]: Cliff,
    [FINAL_DREAM]: FinalDream
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const BennettLiz = ({

    className,
    instanceKey,

    ...other
}) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'BennettLiz',
                className
            )}
        />
    )
}

BennettLiz.propTypes = propTypes

export default BennettLiz
