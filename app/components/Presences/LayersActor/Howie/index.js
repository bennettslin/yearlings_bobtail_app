// import usherWaiting from 'assets/svgs/actors/howie/usherWaiting'
// import usherLooking from 'assets/svgs/actors/howie/usherLooking'
// import abbeyRoad from 'assets/svgs/actors/howie/abbeyRoad'
// import walgreens from 'assets/svgs/actors/howie/walgreens'
// import steamTunnel from 'assets/svgs/actors/howie/steamTunnel'
// import stationWagon from 'assets/svgs/actors/howie/stationWagon'
// import attic from 'assets/svgs/actors/howie/attic'
// import epilogue from 'assets/svgs/actors/howie/epilogue'

import {
    USHER_WAITING,
    USHER_LOOKING
} from 'constants/scene/actors/instances/howie'

import {
    ABBEY_ROAD,
    WALGREENS,
    STEAM_TUNNEL,
    STATION_WAGON,
    ATTIC,
    EPILOGUE
} from 'constants/scene/actors/instances/songs'

export default {
    [USHER_WAITING]: false,
    [USHER_LOOKING]: false,
    [ABBEY_ROAD]: false,
    [WALGREENS]: false,
    [STEAM_TUNNEL]: false,
    [STATION_WAGON]: false,
    [ATTIC]: false,
    [EPILOGUE]: false
}
