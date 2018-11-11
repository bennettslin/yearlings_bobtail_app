import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

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
import GingerbreadPrison from './Instances/GingerbreadPrison'
import RumpledLinens from './Instances/RumpledLinens'
import WaitingRoomAsleep from './Instances/WaitingRoomAsleep'
import CheekUnveiled from './Instances/CheekUnveiled'
import HardOn from './Instances/HardOn'
import Missionary from './Instances/Missionary'
import Afterglow from './Instances/Afterglow'
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
import BrushingOff from './Instances/BrushingOff'
import DroppingMeats from './Instances/DroppingMeats'
import DrunkCelibate from './Instances/DrunkCelibate'
import Greeting from './Instances/Greeting'
import LeavingCrumbled from './Instances/LeavingCrumbled'
import CordSide from './Instances/CordSide'
import AwkwardConsolation from './Instances/AwkwardConsolation'
import CordRear from './Instances/CordRear'
import Horsing from './Instances/Horsing'
import DryingTears from './Instances/DryingTears'
import WakenedFearful from './Instances/WakenedFearful'
import Past from './Instances/Past'
import Present from './Instances/Present'
import Future from './Instances/Future'
import SeekingProtection from './Instances/SeekingProtection'
import RemovingPants from './Instances/RemovingPants'
import Cowgirl from './Instances/Cowgirl'
import Blowjob from './Instances/Blowjob'
import Infirm from './Instances/Infirm'
import DisposingCondom from './Instances/DisposingCondom'
import CampusAshamed from './Instances/CampusAshamed'
import ShowAnnoyed from './Instances/ShowAnnoyed'
import Alley from './Instances/Alley'
import BrokenHearted from './Instances/BrokenHearted'
import Demonstration from './Instances/Demonstration'
import ElTorito from './Instances/ElTorito'
import Pampas from './Instances/Pampas'
import GettingDark from './Instances/GettingDark'
import Cliff from './Instances/Cliff'
import FinalDream from './Instances/FinalDream'
import Epilogue from './Instances/Epilogue'

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
    BRUSHING_OFF,
    DROPPING_MEATS,
    DRUNK_CELIBATE,
    CORD_SIDE,
    AWKWARD_CONSOLATION,
    CORD_REAR,
    HORSING,
    DRYING_TEARS,
    WAKENED_FEARFUL,
    SEEKING_PROTECTION,
    REMOVING_PANTS,
    INFIRM,
    DISPOSING_CONDOM,
    CAMPUS_ASHAMED,
    SHOW_ANNOYED,
    ALLEY,
    BROKEN_HEARTED,
    DEMONSTRATION
} from '../../../../../scene/instanceKeys/bennett'

import {
    EATING,
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
    COWGIRL,
    BLOWJOB,
    EL_TORITO,
    PAMPAS,
    GETTING_DARK,
    CLIFF,
    FINAL_DREAM,
    EPILOGUE
} from '../../../../../scene/instanceKeys/songs'

const INSTANCES_MAP = {
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
    [GINGERBREAD_PRISON]: GingerbreadPrison,
    [RUMPLED_LINENS]: RumpledLinens,
    [WAITING_ROOM_ASLEEP]: WaitingRoomAsleep,
    [CHEEK_UNVEILED]: CheekUnveiled,
    [HARD_ON]: HardOn,
    [MISSIONARY]: Missionary,
    [AFTERGLOW]: Afterglow,
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
    [BRUSHING_OFF]: BrushingOff,
    [DROPPING_MEATS]: DroppingMeats,
    [DRUNK_CELIBATE]: DrunkCelibate,
    [GREETING]: Greeting,
    [LEAVING_CRUMBLED]: LeavingCrumbled,
    [CORD_SIDE]: CordSide,
    [AWKWARD_CONSOLATION]: AwkwardConsolation,
    [CORD_REAR]: CordRear,
    [HORSING]: Horsing,
    [DRYING_TEARS]: DryingTears,
    [WAKENED_FEARFUL]: WakenedFearful,
    [PAST]: Past,
    [PRESENT]: Present,
    [FUTURE]: Future,
    [SEEKING_PROTECTION]: SeekingProtection,
    [REMOVING_PANTS]: RemovingPants,
    [COWGIRL]: Cowgirl,
    [BLOWJOB]: Blowjob,
    [INFIRM]: Infirm,
    [DISPOSING_CONDOM]: DisposingCondom,
    [CAMPUS_ASHAMED]: CampusAshamed,
    [SHOW_ANNOYED]: ShowAnnoyed,
    [ALLEY]: Alley,
    [BROKEN_HEARTED]: BrokenHearted,
    [DEMONSTRATION]: Demonstration,
    [EL_TORITO]: ElTorito,
    [PAMPAS]: Pampas,
    [GETTING_DARK]: GettingDark,
    [CLIFF]: Cliff,
    [FINAL_DREAM]: FinalDream,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const BennettStephanie = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'BennettStephanie',
                className
            )}
        />
    )
}

BennettStephanie.propTypes = propTypes;

export default BennettStephanie
