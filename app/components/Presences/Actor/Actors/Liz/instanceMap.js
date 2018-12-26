import PropTypes from 'prop-types'

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
} from 'scene/instanceKeys/liz'

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
} from 'scene/instanceKeys/songs'

const propTypes = {
    [DATE_ENDING]: PropTypes.bool,
    [MUSEUM]: PropTypes.bool,
    [BACKSTAGE]: PropTypes.bool,
    [GO_KARTS]: PropTypes.bool,
    [DATE_ENDED]: PropTypes.bool,
    [DISHROOM_LANCET]: PropTypes.bool,
    [GATE_CODE]: PropTypes.bool,
    [RUMPLED_LINENS]: PropTypes.bool,
    [ASLEEP_REACHING]: PropTypes.bool,
    [LEAVING_CRUMBLED]: PropTypes.bool,
    [PETTING_SEATED]: PropTypes.bool,
    [PETTING_STANDING]: PropTypes.bool,
    [SIFTING_TCHOTCHKES]: PropTypes.bool,
    [OPENING_DOOR]: PropTypes.bool,
    [DEFENDING]: PropTypes.bool,
    [NOT_HUNGRY]: PropTypes.bool,
    [ASLEEP_COUCH]: PropTypes.bool,
    [EL_TORITO]: PropTypes.bool
}

export { propTypes }

export default {
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
