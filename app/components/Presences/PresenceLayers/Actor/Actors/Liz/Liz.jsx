import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DateEnding from './Instances/DateEnding'
import Museum from './Instances/Museum'
import Backstage from './Instances/Backstage'
import GoKarts from './Instances/GoKarts'
import DateEnded from './Instances/DateEnded'
import DishroomLancet from './Instances/DishroomLancet'
import GateCode from './Instances/GateCode'
import RumpledLinens from './Instances/RumpledLinens'
import AsleepReaching from './Instances/AsleepReaching'
import LeavingCrumbled from './Instances/LeavingCrumbled'
import PettingStanding from './Instances/PettingStanding'
import SiftingTchotchkes from './Instances/SiftingTchotchkes'
import OpeningDoor from './Instances/OpeningDoor'
import Defending from './Instances/Defending'
import NotHungry from './Instances/NotHungry'
import AsleepCouch from './Instances/AsleepCouch'
import PettingSeated from './Instances/PettingSeated'
import ElTorito from './Instances/ElTorito'

import {
    ASLEEP_REACHING,
    PETTING_SEATED,
    PETTING_STANDING,
    SIFTING_TCHOTCHKES,
    OPENING_DOOR,
    DEFENDING,
    NOT_HUNGRY,
    ASLEEP_COUCH
} from '../../../../../../scene/instanceKeys/liz'

import {
    DATE_ENDING,
    MUSEUM,
    BACKSTAGE,
    GO_KARTS,
    DATE_ENDED,
    DISHROOM_LANCET,
    GATE_CODE,
    RUMPLED_LINENS,
    LEAVING_CRUMBLED,
    EL_TORITO
} from '../../../../../../scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [DATE_ENDING]: DateEnding,
    [MUSEUM]: Museum,
    [BACKSTAGE]: Backstage,
    [GO_KARTS]: GoKarts,
    [DATE_ENDED]: DateEnded,
    [DISHROOM_LANCET]: DishroomLancet,
    [GATE_CODE]: GateCode,
    [RUMPLED_LINENS]: RumpledLinens,
    [ASLEEP_REACHING]: AsleepReaching,
    [LEAVING_CRUMBLED]: LeavingCrumbled,
    [PETTING_SEATED]: PettingSeated,
    [PETTING_STANDING]: PettingStanding,
    [SIFTING_TCHOTCHKES]: SiftingTchotchkes,
    [OPENING_DOOR]: OpeningDoor,
    [DEFENDING]: Defending,
    [NOT_HUNGRY]: NotHungry,
    [ASLEEP_COUCH]: AsleepCouch,
    [EL_TORITO]: ElTorito
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Liz = ({

    className,
    instanceKey,

    ...other
}) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'Liz',
                className
            )}
        />
    )
}

Liz.propTypes = propTypes

export default Liz
