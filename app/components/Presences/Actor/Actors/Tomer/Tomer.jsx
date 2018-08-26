import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Gangbanger from './Instances/Gangbanger'
import ShaneBuying from './Instances/ShaneBuying'
import AbbeyRoad from './Instances/AbbeyRoad'
import Walgreens from './Instances/Walgreens'
import SteamTunnel from './Instances/SteamTunnel'
import Cemetery from './Instances/Cemetery'
import StationWagon from './Instances/StationWagon'
import ShaneSpilling from './Instances/ShaneSpilling'
import Epilogue from './Instances/Epilogue'

import {
    SHANE_BUYING,
    SHANE_SPILLING
} from 'scene/actors/tomer'

import {
    GANGBANGER,
    ABBEY_ROAD,
    WALGREENS,
    STEAM_TUNNEL,
    CEMETERY,
    STATION_WAGON,
    EPILOGUE
} from 'scene/actors/songs'

const INSTANCES_MAP = {
    [GANGBANGER]: Gangbanger,
    [SHANE_BUYING]: ShaneBuying,
    [ABBEY_ROAD]: AbbeyRoad,
    [WALGREENS]: Walgreens,
    [STEAM_TUNNEL]: SteamTunnel,
    [CEMETERY]: Cemetery,
    [STATION_WAGON]: StationWagon,
    [SHANE_SPILLING]: ShaneSpilling,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Tomer = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'Tomer',
                className
            )}
        />
    )
}

Tomer.propTypes = propTypes;

export default Tomer
