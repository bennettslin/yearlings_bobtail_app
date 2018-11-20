import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Gangbanger from './Instances/Gangbanger'
import UsherWaiting from './Instances/UsherWaiting'
import UsherLooking from './Instances/UsherLooking'
import AbbeyRoad from './Instances/AbbeyRoad'
import Walgreens from './Instances/Walgreens'
import SteamTunnel from './Instances/SteamTunnel'
import StationWagon from './Instances/StationWagon'
import Attic from './Instances/Attic'
import Epilogue from './Instances/Epilogue'

import {
    USHER_WAITING,
    USHER_LOOKING
} from '../../../../../../scene/instanceKeys/howie'

import {
    GANGBANGER,
    ABBEY_ROAD,
    WALGREENS,
    STEAM_TUNNEL,
    STATION_WAGON,
    ATTIC,
    EPILOGUE
} from '../../../../../../scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [GANGBANGER]: Gangbanger,
    [USHER_WAITING]: UsherWaiting,
    [USHER_LOOKING]: UsherLooking,
    [ABBEY_ROAD]: AbbeyRoad,
    [WALGREENS]: Walgreens,
    [STEAM_TUNNEL]: SteamTunnel,
    [STATION_WAGON]: StationWagon,
    [ATTIC]: Attic,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Howie = ({

    className,
    instanceKey,

    ...other
}) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'Howie',
                className
            )}
        />
    )
}

Howie.propTypes = propTypes

export default Howie
