import dateEnding from '../../../../assets/svgs/actors/liz/dateEnding'
import museum from '../../../../assets/svgs/actors/liz/museum'
import backstage from '../../../../assets/svgs/actors/liz/backstage'
import goKarts from '../../../../assets/svgs/actors/liz/goKarts'
import dateEnded from '../../../../assets/svgs/actors/liz/dateEnded'
import dishroomLancet from '../../../../assets/svgs/actors/liz/dishroomLancet'
import gateCode from '../../../../assets/svgs/actors/liz/gateCode'
import rumpledLinens from '../../../../assets/svgs/actors/liz/rumpledLinens'
import asleepReaching from '../../../../assets/svgs/actors/liz/asleepReaching'
import leavingCrumbled from '../../../../assets/svgs/actors/liz/leavingCrumbled'
import pettingStanding from '../../../../assets/svgs/actors/liz/pettingStanding'
import siftingTchotchkes from '../../../../assets/svgs/actors/liz/siftingTchotchkes'
import openingDoor from '../../../../assets/svgs/actors/liz/openingDoor'
import defending from '../../../../assets/svgs/actors/liz/defending'
import notHungry from '../../../../assets/svgs/actors/liz/notHungry'
import asleepCouch from '../../../../assets/svgs/actors/liz/asleepCouch'
import pettingSeated from '../../../../assets/svgs/actors/liz/pettingSeated'
import elTorito from '../../../../assets/svgs/actors/liz/elTorito'

import {
    ASLEEP_REACHING,
    PETTING_SEATED,
    PETTING_SEATED_PRESENT,
    PETTING_STANDING,
    SIFTING_TCHOTCHKES,
    OPENING_DOOR,
    DEFENDING,
    NOT_HUNGRY,
    ASLEEP_COUCH,
} from '../../../../constants/scene/actors/liz'

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
    EL_TORITO,
} from '../../../../constants/scene/actors/songs'

export default {
    [DATE_ENDING]: dateEnding,
    [MUSEUM]: museum,
    [BACKSTAGE]: backstage,
    [GO_KARTS]: goKarts,
    [DATE_ENDED]: dateEnded,
    [DISHROOM_LANCET]: dishroomLancet,
    [GATE_CODE]: gateCode,
    [RUMPLED_LINENS]: rumpledLinens,
    [ASLEEP_REACHING]: asleepReaching,
    [LEAVING_CRUMBLED]: leavingCrumbled,
    [PETTING_SEATED]: pettingSeated,
    [PETTING_SEATED_PRESENT]: pettingSeated,
    [PETTING_STANDING]: pettingStanding,
    [SIFTING_TCHOTCHKES]: siftingTchotchkes,
    [OPENING_DOOR]: openingDoor,
    [DEFENDING]: defending,
    [NOT_HUNGRY]: notHungry,
    [ASLEEP_COUCH]: asleepCouch,
    [EL_TORITO]: elTorito,
}
