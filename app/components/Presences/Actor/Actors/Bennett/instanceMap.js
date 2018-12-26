import PropTypes from 'prop-types'

import BreakupDejected from './Instances/BreakupDejected'
import SolicitingOpinion from './Instances/SolicitingOpinion'
import CatholicPensive from './Instances/CatholicPensive'
import CatholicIdea from './Instances/CatholicIdea'
import Pious from './Instances/Pious'
import Pondering from './Instances/Pondering'
import CouchReading from './Instances/CouchReading'
import RubiksCube from './Instances/RubiksCube'
import Distracted from './Instances/Distracted'
import HopelesslyCrushed from './Instances/HopelesslyCrushed'
import WonderingBaby from './Instances/WonderingBaby'
import MerrilyDeranged from './Instances/MerrilyDeranged'
import Eating from './Instances/Eating'
import DateEnding from './Instances/DateEnding'
import Museum from './Instances/Museum'
import Backstage from './Instances/Backstage'
import GoKarts from './Instances/GoKarts'
import DateEnded from './Instances/DateEnded'
import DishroomReading from './Instances/DishroomReading'
import DishroomLancet from './Instances/DishroomLancet'
import MopSopped from './Instances/MopSopped'
import GateCode from './Instances/GateCode'
import RumpledLinens from './Instances/RumpledLinens'
import WaitingRoomAsleep from './Instances/WaitingRoomAsleep'
import AbbeyRoad from './Instances/AbbeyRoad'
import Walgreens from './Instances/Walgreens'
import SteamTunnel from './Instances/SteamTunnel'
import Cemetery from './Instances/Cemetery'
import StationWagon from './Instances/StationWagon'
import Attic from './Instances/Attic'
import Performing from './Instances/Performing'
import Flirting from './Instances/Flirting'
import SidelongHesitance from './Instances/SidelongHesitance'
import RemovingShoes from './Instances/RemovingShoes'
import DroppingMeats from './Instances/DroppingMeats'
import Greeting from './Instances/Greeting'
import LeavingCrumbled from './Instances/LeavingCrumbled'
import CordSide from './Instances/CordSide'
import CordRear from './Instances/CordRear'
import Past from './Instances/Past'
import Present from './Instances/Present'
import Future from './Instances/Future'
import RemovingPants from './Instances/RemovingPants'
import Infirm from './Instances/Infirm'
import DisposingCondom from './Instances/DisposingCondom'
import CampusAshamed from './Instances/CampusAshamed'
import ShowAnnoyed from './Instances/ShowAnnoyed'
import Alley from './Instances/Alley'
import BrokenHearted from './Instances/BrokenHearted'
import Demonstration from './Instances/Demonstration'
import ElTorito from './Instances/ElTorito'

import {
    BREAKUP_DEJECTED,
    SOLICITING_OPINION,
    CATHOLIC_PENSIVE,
    CATHOLIC_IDEA,
    PIOUS,
    PONDERING,
    COUCH_READING,
    RUBIKS_CUBE,
    DISTRACTED,
    HOPELESSLY_CRUSHED,
    WONDERING_BABY,
    MERRILY_DERANGED,
    DISHROOM_READING,
    MOP_SOPPED,
    WAITING_ROOM_ASLEEP,
    SIDELONG_HESITANCE,
    REMOVING_SHOES,
    DROPPING_MEATS,
    CORD_SIDE,
    CORD_REAR,
    REMOVING_PANTS,
    INFIRM,
    DISPOSING_CONDOM,
    CAMPUS_ASHAMED,
    SHOW_ANNOYED,
    ALLEY,
    BROKEN_HEARTED,
    DEMONSTRATION
} from 'scene/instanceKeys/bennett'

import {
    EATING,
    DATE_ENDING,
    MUSEUM,
    BACKSTAGE,
    GO_KARTS,
    DATE_ENDED,
    DISHROOM_LANCET,
    GATE_CODE,
    RUMPLED_LINENS,
    ABBEY_ROAD,
    WALGREENS,
    STEAM_TUNNEL,
    CEMETERY,
    STATION_WAGON,
    ATTIC,
    PERFORMING,
    FLIRTING,
    GREETING,
    LEAVING_CRUMBLED,
    PAST,
    PRESENT,
    FUTURE,
    EL_TORITO
} from 'scene/instanceKeys/songs'

const propTypes = {
    [BREAKUP_DEJECTED]: PropTypes.bool,
    [SOLICITING_OPINION]: PropTypes.bool,
    [CATHOLIC_PENSIVE]: PropTypes.bool,
    [CATHOLIC_IDEA]: PropTypes.bool,
    [PIOUS]: PropTypes.bool,
    [PONDERING]: PropTypes.bool,
    [COUCH_READING]: PropTypes.bool,
    [RUBIKS_CUBE]: PropTypes.bool,
    [DISTRACTED]: PropTypes.bool,
    [HOPELESSLY_CRUSHED]: PropTypes.bool,
    [WONDERING_BABY]: PropTypes.bool,
    [MERRILY_DERANGED]: PropTypes.bool,
    [EATING]: PropTypes.bool,
    [DATE_ENDING]: PropTypes.bool,
    [MUSEUM]: PropTypes.bool,
    [BACKSTAGE]: PropTypes.bool,
    [GO_KARTS]: PropTypes.bool,
    [DATE_ENDED]: PropTypes.bool,
    [DISHROOM_READING]: PropTypes.bool,
    [DISHROOM_LANCET]: PropTypes.bool,
    [MOP_SOPPED]: PropTypes.bool,
    [GATE_CODE]: PropTypes.bool,
    [RUMPLED_LINENS]: PropTypes.bool,
    [WAITING_ROOM_ASLEEP]: PropTypes.bool,
    [ABBEY_ROAD]: PropTypes.bool,
    [WALGREENS]: PropTypes.bool,
    [STEAM_TUNNEL]: PropTypes.bool,
    [CEMETERY]: PropTypes.bool,
    [STATION_WAGON]: PropTypes.bool,
    [ATTIC]: PropTypes.bool,
    [PERFORMING]: PropTypes.bool,
    [FLIRTING]: PropTypes.bool,
    [SIDELONG_HESITANCE]: PropTypes.bool,
    [REMOVING_SHOES]: PropTypes.bool,
    [DROPPING_MEATS]: PropTypes.bool,
    [GREETING]: PropTypes.bool,
    [LEAVING_CRUMBLED]: PropTypes.bool,
    [CORD_SIDE]: PropTypes.bool,
    [CORD_REAR]: PropTypes.bool,
    [PAST]: PropTypes.bool,
    [PRESENT]: PropTypes.bool,
    [FUTURE]: PropTypes.bool,
    [REMOVING_PANTS]: PropTypes.bool,
    [INFIRM]: PropTypes.bool,
    [DISPOSING_CONDOM]: PropTypes.bool,
    [CAMPUS_ASHAMED]: PropTypes.bool,
    [SHOW_ANNOYED]: PropTypes.bool,
    [ALLEY]: PropTypes.bool,
    [BROKEN_HEARTED]: PropTypes.bool,
    [DEMONSTRATION]: PropTypes.bool,
    [EL_TORITO]: PropTypes.bool
}

export { propTypes }

export default {
    [BREAKUP_DEJECTED]: BreakupDejected,
    [SOLICITING_OPINION]: SolicitingOpinion,
    [CATHOLIC_PENSIVE]: CatholicPensive,
    [CATHOLIC_IDEA]: CatholicIdea,
    [PIOUS]: Pious,
    [PONDERING]: Pondering,
    [COUCH_READING]: CouchReading,
    [RUBIKS_CUBE]: RubiksCube,
    [DISTRACTED]: Distracted,
    [HOPELESSLY_CRUSHED]: HopelesslyCrushed,
    [WONDERING_BABY]: WonderingBaby,
    [MERRILY_DERANGED]: MerrilyDeranged,
    [EATING]: Eating,
    [DATE_ENDING]: DateEnding,
    [MUSEUM]: Museum,
    [BACKSTAGE]: Backstage,
    [GO_KARTS]: GoKarts,
    [DATE_ENDED]: DateEnded,
    [DISHROOM_READING]: DishroomReading,
    [DISHROOM_LANCET]: DishroomLancet,
    [MOP_SOPPED]: MopSopped,
    [GATE_CODE]: GateCode,
    [RUMPLED_LINENS]: RumpledLinens,
    [WAITING_ROOM_ASLEEP]: WaitingRoomAsleep,
    [ABBEY_ROAD]: AbbeyRoad,
    [WALGREENS]: Walgreens,
    [STEAM_TUNNEL]: SteamTunnel,
    [CEMETERY]: Cemetery,
    [STATION_WAGON]: StationWagon,
    [ATTIC]: Attic,
    [PERFORMING]: Performing,
    [FLIRTING]: Flirting,
    [SIDELONG_HESITANCE]: SidelongHesitance,
    [REMOVING_SHOES]: RemovingShoes,
    [DROPPING_MEATS]: DroppingMeats,
    [GREETING]: Greeting,
    [LEAVING_CRUMBLED]: LeavingCrumbled,
    [CORD_SIDE]: CordSide,
    [CORD_REAR]: CordRear,
    [PAST]: Past,
    [PRESENT]: Present,
    [FUTURE]: Future,
    [REMOVING_PANTS]: RemovingPants,
    [INFIRM]: Infirm,
    [DISPOSING_CONDOM]: DisposingCondom,
    [CAMPUS_ASHAMED]: CampusAshamed,
    [SHOW_ANNOYED]: ShowAnnoyed,
    [ALLEY]: Alley,
    [BROKEN_HEARTED]: BrokenHearted,
    [DEMONSTRATION]: Demonstration,
    [EL_TORITO]: ElTorito
}
