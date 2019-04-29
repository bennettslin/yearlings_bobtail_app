import PropTypes from 'prop-types'

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
} from 'scene/actors/keys/instances/tomer'

import {
    GANGBANGER,
    ABBEY_ROAD,
    WALGREENS,
    STEAM_TUNNEL,
    CEMETERY,
    STATION_WAGON,
    EPILOGUE
} from 'scene/actors/keys/instances/songs'

export const propTypes = {
    [GANGBANGER]: PropTypes.bool,
    [SHANE_BUYING]: PropTypes.bool,
    [ABBEY_ROAD]: PropTypes.bool,
    [WALGREENS]: PropTypes.bool,
    [STEAM_TUNNEL]: PropTypes.bool,
    [CEMETERY]: PropTypes.bool,
    [STATION_WAGON]: PropTypes.bool,
    [SHANE_SPILLING]: PropTypes.bool,
    [EPILOGUE]: PropTypes.bool
}

export default {
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
