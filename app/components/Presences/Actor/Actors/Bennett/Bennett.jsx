import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import BreakupDejected from './Instances/BreakupDejected'
import SolicitingOpinion from './Instances/SolicitingOpinion'
import CatholicPensive from './Instances/CatholicPensive'
import CatholicIdea from './Instances/CatholicIdea'
import Pious from './Instances/Pious'
import Pondering from './Instances/Pondering'
import Reading from './Instances/Reading'
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
    READING,
    RUBIKS_CUBE,
    DISTRACTED,
    HOPELESSLY_CRUSHED,
    WONDERING_BABY,
    MERRILY_DERANGED,
} from 'scene/actors/bennett'

import {
    EATING,
    DATE_ENDING,
    MUSEUM,
    BACKSTAGE,
    GO_KARTS,
    DATE_ENDED,
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
    [READING]: Reading,
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
