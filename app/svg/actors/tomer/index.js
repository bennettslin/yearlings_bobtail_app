import gangbanger from 'assets/svgs/actors/tomer/gangbanger'
import shaneBuying from 'assets/svgs/actors/tomer/shaneBuying'
import abbeyRoad from 'assets/svgs/actors/tomer/abbeyRoad'
import walgreens from 'assets/svgs/actors/tomer/walgreens'
import steamTunnel from 'assets/svgs/actors/tomer/steamTunnel'
import cemetery from 'assets/svgs/actors/tomer/cemetery'
import stationWagon from 'assets/svgs/actors/tomer/stationWagon'
import shaneSpilling from 'assets/svgs/actors/tomer/shaneSpilling'
import epilogue from 'assets/svgs/actors/tomer/epilogue'

import {
    SHANE_BUYING,
    SHANE_SPILLING
} from 'constants/scene/actors/instances/tomer'

import {
    GANGBANGER,
    ABBEY_ROAD,
    WALGREENS,
    STEAM_TUNNEL,
    CEMETERY,
    STATION_WAGON,
    EPILOGUE
} from 'constants/scene/actors/instances/songs'

export default {
    [GANGBANGER]: gangbanger,
    [SHANE_BUYING]: shaneBuying,
    [ABBEY_ROAD]: abbeyRoad,
    [WALGREENS]: walgreens,
    [STEAM_TUNNEL]: steamTunnel,
    [CEMETERY]: cemetery,
    [STATION_WAGON]: stationWagon,
    [SHANE_SPILLING]: shaneSpilling,
    [EPILOGUE]: epilogue
}
