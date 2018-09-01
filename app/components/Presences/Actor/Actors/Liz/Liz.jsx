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
import GingerbreadPrison from './Instances/GingerbreadPrison'
import RumpledLinens from './Instances/RumpledLinens'
import CheekUnveiled from './Instances/CheekUnveiled'
import HardOn from './Instances/HardOn'
import Missionary from './Instances/Missionary'
import Afterglow from './Instances/Afterglow'
import HardOnReflection from './Instances/HardOnReflection'
import MissionaryReflection from './Instances/MissionaryReflection'
import AfterglowReflection from './Instances/AfterglowReflection'
import AsleepReaching from './Instances/AsleepReaching';
import BrushedOff from './Instances/BrushedOff'
import FreezingNaked from './Instances/FreezingNaked'
import LeavingCrumbled from './Instances/LeavingCrumbled'
import PettingStanding from './Instances/PettingStanding'
import SiftingTchotchkes from './Instances/SiftingTchotchkes'
import OpeningDoor from './Instances/OpeningDoor'
import Defending from './Instances/Defending'
import NotHungry from './Instances/NotHungry'
import AsleepCouch from './Instances/AsleepCouch'
import Epilogue from './Instances/Epilogue'

import { DEFAULT_COMPONENT } from 'constants/dom'

import {
    ASLEEP_REACHING,
    BRUSHED_OFF,
    FREEZING_NAKED,
    PETTING_STANDING,
    SIFTING_TCHOTCHKES,
    OPENING_DOOR,
    DEFENDING,
    NOT_HUNGRY,
    ASLEEP_COUCH,
} from 'scene/actors/liz'

import {
    DATE_ENDING,
    MUSEUM,
    BACKSTAGE,
    GO_KARTS,
    DATE_ENDED,
    DISHROOM_LANCET,
    GATE_CODE,
    GINGERBREAD_PRISON,
    RUMPLED_LINENS,
    CHEEK_UNVEILED,
    HARD_ON,
    MISSIONARY,
    AFTERGLOW,
    HARD_ON_REFLECTION,
    MISSIONARY_REFLECTION,
    AFTERGLOW_REFLECTION,
    LEAVING_CRUMBLED,
    EPILOGUE
} from 'scene/actors/songs'

const INSTANCES_MAP = {
    [DATE_ENDING]: DateEnding,
    [MUSEUM]: Museum,
    [BACKSTAGE]: Backstage,
    [GO_KARTS]: GoKarts,
    [DATE_ENDED]: DateEnded,
    [DISHROOM_LANCET]: DishroomLancet,
    [GATE_CODE]: GateCode,
    [GINGERBREAD_PRISON]: GingerbreadPrison,
    [RUMPLED_LINENS]: RumpledLinens,
    [CHEEK_UNVEILED]: CheekUnveiled,
    [HARD_ON]: HardOn,
    [MISSIONARY]: Missionary,
    [AFTERGLOW]: Afterglow,
    [HARD_ON_REFLECTION]: HardOnReflection,
    [MISSIONARY_REFLECTION]: MissionaryReflection,
    [AFTERGLOW_REFLECTION]: AfterglowReflection,
    [ASLEEP_REACHING]: AsleepReaching,
    [BRUSHED_OFF]: BrushedOff,
    [FREEZING_NAKED]: FreezingNaked,
    [LEAVING_CRUMBLED]: LeavingCrumbled,
    [PETTING_STANDING]: PettingStanding,
    [SIFTING_TCHOTCHKES]: SiftingTchotchkes,
    [OPENING_DOOR]: OpeningDoor,
    [DEFENDING]: Defending,
    [NOT_HUNGRY]: NotHungry,
    [ASLEEP_COUCH]: AsleepCouch,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Liz = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent =
        INSTANCES_MAP[instanceKey] || DEFAULT_COMPONENT

    return (
        <InstanceComponent {...other}
            className={cx(
                'Liz',
                className
            )}
        />
    )
}

Liz.propTypes = propTypes;

export default Liz
