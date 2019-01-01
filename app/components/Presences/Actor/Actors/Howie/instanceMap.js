import PropTypes from 'prop-types'

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
} from 'scene/instanceKeys/howie'

import {
    GANGBANGER,
    ABBEY_ROAD,
    WALGREENS,
    STEAM_TUNNEL,
    STATION_WAGON,
    ATTIC,
    EPILOGUE
} from 'scene/instanceKeys/songs'

export const propTypes = {
    [GANGBANGER]: PropTypes.bool,
    [USHER_WAITING]: PropTypes.bool,
    [USHER_LOOKING]: PropTypes.bool,
    [ABBEY_ROAD]: PropTypes.bool,
    [WALGREENS]: PropTypes.bool,
    [STEAM_TUNNEL]: PropTypes.bool,
    [STATION_WAGON]: PropTypes.bool,
    [ATTIC]: PropTypes.bool,
    [EPILOGUE]: PropTypes.bool
}

export default {
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
