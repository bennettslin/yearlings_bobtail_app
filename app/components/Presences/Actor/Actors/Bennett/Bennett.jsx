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
import WaitingRoomThoughts from './Instances/WaitingRoomThoughts'
import CheekUnveiled from './Instances/CheekUnveiled'
import HardOn from './Instances/HardOn'
import Missionary from './Instances/Missionary'
import Afterglow from './Instances/Afterglow'
import HardOnReflection from './Instances/HardOnReflection'
import MissionaryReflection from './Instances/MissionaryReflection'
import AfterglowReflection from './Instances/AfterglowReflection'
import AbbeyRoad from './Instances/AbbeyRoad'
import Walgreens from './Instances/Walgreens'
import SteamTunnel from './Instances/SteamTunnel'
import Cemetery from './Instances/Cemetery'
import StationWagon from './Instances/StationWagon'
import Attic from './Instances/Attic'
import Flirting from './Instances/Flirting'
import Greeting from './Instances/Greeting'
import Cowgirl from './Instances/Cowgirl'
import Blowjob from './Instances/Blowjob'
import Past from './Instances/Past'
import Present from './Instances/Present'
import Future from './Instances/Future'
import Epilogue from './Instances/Epilogue'

import { DEFAULT_COMPONENT } from 'constants/dom'

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
    WAITING_ROOM_THOUGHTS,
} from 'scene/actors/bennett'

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
    HARD_ON_REFLECTION,
    MISSIONARY_REFLECTION,
    AFTERGLOW_REFLECTION,
    ABBEY_ROAD,
    WALGREENS,
    STEAM_TUNNEL,
    CEMETERY,
    STATION_WAGON,
    ATTIC,
    FLIRTING,
    GREETING,
    COWGIRL,
    BLOWJOB,
    PAST,
    PRESENT,
    FUTURE,
    EPILOGUE
} from 'scene/actors/songs'

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
    [WAITING_ROOM_THOUGHTS]: WaitingRoomThoughts,
    [CHEEK_UNVEILED]: CheekUnveiled,
    [HARD_ON]: HardOn,
    [MISSIONARY]: Missionary,
    [AFTERGLOW]: Afterglow,
    [HARD_ON_REFLECTION]: HardOnReflection,
    [MISSIONARY_REFLECTION]: MissionaryReflection,
    [AFTERGLOW_REFLECTION]: AfterglowReflection,
    [ABBEY_ROAD]: AbbeyRoad,
    [WALGREENS]: Walgreens,
    [STEAM_TUNNEL]: SteamTunnel,
    [CEMETERY]: Cemetery,
    [STATION_WAGON]: StationWagon,
    [ATTIC]: Attic,
    [FLIRTING]: Flirting,
    [GREETING]: Greeting,
    [COWGIRL]: Cowgirl,
    [BLOWJOB]: Blowjob,
    [PAST]: Past,
    [PRESENT]: Present,
    [FUTURE]: Future,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Bennett = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent =
        INSTANCES_MAP[instanceKey] || DEFAULT_COMPONENT

    return (
        <InstanceComponent {...other}
            className={cx(
                'Bennett',
                className
            )}
        />
    )
}

Bennett.propTypes = propTypes;

export default Bennett
