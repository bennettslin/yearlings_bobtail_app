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
import AsleepReaching from './Instances/AsleepReaching';
import BrushedOff from './Instances/BrushedOff'
import FreezingNaked from './Instances/FreezingNaked'
import ReturningCord from './Instances/ReturningCord'
import LeavingCrumbled from './Instances/LeavingCrumbled'
import PettingStanding from './Instances/PettingStanding'
import SiftingTchotchkes from './Instances/SiftingTchotchkes'
import OpeningDoor from './Instances/OpeningDoor'
import Defending from './Instances/Defending'
import NotHungry from './Instances/NotHungry'
import AsleepCouch from './Instances/AsleepCouch'
import PettingSeated from './Instances/PettingSeated'
import Laughing from './Instances/Laughing'
import SelflessConcern from './Instances/SelflessConcern'
import Caressed from './Instances/Caressed'
import ElTorito from './Instances/ElTorito'
import Pampas from './Instances/Pampas'
import GettingDark from './Instances/GettingDark'
import Cliff from './Instances/Cliff'
import FinalDream from './Instances/FinalDream'

import {
    ASLEEP_REACHING,
    BRUSHED_OFF,
    FREEZING_NAKED,
    RETURNING_CORD,
    PETTING_SEATED,
    PETTING_STANDING,
    SIFTING_TCHOTCHKES,
    OPENING_DOOR,
    DEFENDING,
    NOT_HUNGRY,
    ASLEEP_COUCH,
    LAUGHING,
    SELFLESS_CONCERN,
    CARESSED
} from '../../../../../scene/instanceKeys/liz'

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
    LEAVING_CRUMBLED,
    EL_TORITO,
    PAMPAS,
    GETTING_DARK,
    CLIFF,
    FINAL_DREAM
} from '../../../../../scene/instanceKeys/songs'

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
    [ASLEEP_REACHING]: AsleepReaching,
    [BRUSHED_OFF]: BrushedOff,
    [FREEZING_NAKED]: FreezingNaked,
    [RETURNING_CORD]: ReturningCord,
    [LEAVING_CRUMBLED]: LeavingCrumbled,
    [PETTING_SEATED]: PettingSeated,
    [PETTING_STANDING]: PettingStanding,
    [SIFTING_TCHOTCHKES]: SiftingTchotchkes,
    [OPENING_DOOR]: OpeningDoor,
    [DEFENDING]: Defending,
    [NOT_HUNGRY]: NotHungry,
    [ASLEEP_COUCH]: AsleepCouch,
    [LAUGHING]: Laughing,
    [SELFLESS_CONCERN]: SelflessConcern,
    [CARESSED]: Caressed,
    [EL_TORITO]: ElTorito,
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

const Liz = ({

    className,
    instanceKey,

...other }) => {

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

Liz.propTypes = propTypes;

export default Liz
