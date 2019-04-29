import PropTypes from 'prop-types'

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
} from 'scene/actors/keys/instances/ana'

import {
    EATING,
    ABBEY_ROAD,
    WALGREENS,
    STEAM_TUNNEL,
    STATION_WAGON,
    PERFORMING,
    WAITING,
    EPILOGUE
} from 'scene/actors/keys/instances/songs'

export const propTypes = {
    [SQUATTING]: PropTypes.bool,
    [EATING]: PropTypes.bool,
    [ABBEY_ROAD]: PropTypes.bool,
    [WALGREENS]: PropTypes.bool,
    [STEAM_TUNNEL]: PropTypes.bool,
    [STATION_WAGON]: PropTypes.bool,
    [PERFORMING]: PropTypes.bool,
    [WAITING]: PropTypes.bool,
    [CHUCKLING]: PropTypes.bool,
    [SMIRKING]: PropTypes.bool,
    [EPILOGUE]: PropTypes.bool
}

export default {
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
