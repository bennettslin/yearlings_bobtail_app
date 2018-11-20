import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Squatting from './Instances/Squatting'
import Eating from './Instances/Eating'
import AbbeyRoad from './Instances/AbbeyRoad'
import Walgreens from './Instances/Walgreens'
import SteamTunnel from './Instances/SteamTunnel'
import StationWagon from './Instances/StationWagon'
import Performing from './Instances/Performing'
import Waiting from './Instances/Waiting'
import Chuckling from './Instances/Chuckling'
import Smirking from './Instances/Smirking'
import Epilogue from './Instances/Epilogue'

import {
    SQUATTING,
    CHUCKLING,
    SMIRKING
} from '../../../../../../scene/instanceKeys/ana'

import {
    EATING,
    ABBEY_ROAD,
    WALGREENS,
    STEAM_TUNNEL,
    STATION_WAGON,
    PERFORMING,
    WAITING,
    EPILOGUE
} from '../../../../../../scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [SQUATTING]: Squatting,
    [EATING]: Eating,
    [ABBEY_ROAD]: AbbeyRoad,
    [WALGREENS]: Walgreens,
    [STEAM_TUNNEL]: SteamTunnel,
    [STATION_WAGON]: StationWagon,
    [PERFORMING]: Performing,
    [WAITING]: Waiting,
    [CHUCKLING]: Chuckling,
    [SMIRKING]: Smirking,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Ana = ({

    className,
    instanceKey,

    ...other }) => {

    const InstanceComponent =
        INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'Ana',
                className
            )}
        />
    )
}

Ana.propTypes = propTypes

export default Ana
