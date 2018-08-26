import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Roaring from './Instances/Roaring'
import AbbeyRoad from './Instances/AbbeyRoad'
import Walgreens from './Instances/Walgreens'
import SteamTunnel from './Instances/SteamTunnel'
import Cemetery from './Instances/Cemetery'
import StationWagon from './Instances/StationWagon'
import Attic from './Instances/Attic'
import Eating from './Instances/Eating'
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
    ROARING,
} from 'scene/actors/bennett'

import {
    EATING,
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
    [ROARING]: Roaring,
    [EATING]: Eating,
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
