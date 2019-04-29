import { DEFAULT_STAGE_KEY } from '../cubesKeys'

import CUBES_DEFAULT_STAGE from './scenes/defaultStage'
import CUBES_LOGUE from './scenes/logue'
import CUBES_NOHO_HOUSES from './scenes/nohoHouses'
import CUBES_NOHO_SCHOOL from './scenes/nohoSchool'
import CUBES_BATHROOM from './scenes/bathroom'
import CUBES_FREEWAY from './scenes/freeway'
import CUBES_PORCH from './scenes/porch'
import CUBES_CHANGELING_CAVE from './scenes/changelingCave'
import CUBES_PUPPET_SHOW from './scenes/puppetShow'
import CUBES_SCHOOLBUS from './scenes/schoolbus'
import CUBES_TETHERBALL_COURT from './scenes/tetherballCourt'
import CUBES_TAIWAN_ROOM from './scenes/taiwanRoom'
import CUBES_TAIWAN_STAIRS from './scenes/taiwanStairs'
import CUBES_TAIWAN_GATE from './scenes/taiwanGate'
import CUBES_RICKSHAW from './scenes/rickshaw'
import CUBES_SHORE from './scenes/shore'
import CUBES_BUOY from './scenes/buoy'
import CUBES_OCEAN_DEPTHS from './scenes/oceanDepths'
import CUBES_OCEAN_FLOOR from './scenes/oceanFloor'
import CUBES_BEDROOM from './scenes/bedroom'
import CUBES_VAN_NUYS_LOCKERS from './scenes/vanNuysLockers'
import CUBES_VAN_NUYS_QUAD from './scenes/vanNuysQuad'
import CUBES_VAN_NUYS_HALLWAY from './scenes/vanNuysHallway'
import CUBES_CATHOLIC_CHURCH from './scenes/catholicChurch'
import CUBES_UC_BERKELEY from './scenes/ucBerkeley'
import CUBES_CINEMA from './scenes/cinema'
import CUBES_BASEMENT from './scenes/basement'
import CUBES_MUSEUM from './scenes/museum'
import CUBES_BACKSTAGE from './scenes/backstage'
import CUBES_GO_KARTS from './scenes/goKarts'
import CUBES_DISHROOM from './scenes/dishroom'
import CUBES_WAITING_ROOM from './scenes/waitingRoom'
import CUBES_CLUB_FRONT from './scenes/clubFront'
import CUBES_CLUB_SIDE from './scenes/clubSide'
import CUBES_CLUB_FAR from './scenes/clubFar'
import CUBES_CLUB_LOADING from './scenes/clubLoading'
import CUBES_BENNETT_BED from './scenes/bennettBed'
import CUBES_BENNETT_COUCH from './scenes/bennettCouch'
import CUBES_COURTYARD from './scenes/courtyard'
import CUBES_BENNETT_GATE from './scenes/bennettGate'
import CUBES_LIZ_BED from './scenes/lizBed'
import CUBES_LIZ_COUCH from './scenes/lizCouch'
import CUBES_LIZ_GATE from './scenes/lizGate'
import CUBES_ROYCE_HALL from './scenes/royceHall'
import CUBES_WALGREENS from './scenes/walgreens'
import CUBES_STEAM_TUNNEL from './scenes/steamTunnel'
import CUBES_CEMETERY from './scenes/cemetery'
import CUBES_STATION_WAGON from './scenes/stationWagon'
import CUBES_ATTIC from './scenes/attic'
import CUBES_OAKLAND_HOUSES from './scenes/oaklandHouses'
import CUBES_OAKLAND_RESIDENTIAL from './scenes/oaklandResidential'
import CUBES_OAKLAND_COMMERCIAL from './scenes/oaklandCommercial'
import CUBES_OAKLAND_PUBLIC from './scenes/oaklandPublic'
import CUBES_SNOWGLOBES_PAST from './scenes/snowglobesPast'
import CUBES_SNOWGLOBES_PRESENT from './scenes/snowglobesPresent'
import CUBES_SNOWGLOBES_FUTURE from './scenes/snowglobesFuture'
import CUBES_EL_CERRITO from './scenes/elCerrito'
import CUBES_ALLEY from './scenes/alley'
import CUBES_EL_TORITO from './scenes/elTorito'
import CUBES_PAMPAS from './scenes/pampas'
import CUBES_WEDDING from './scenes/wedding'
import CUBES_CLIFF from './scenes/cliff'
import CUBES_DEATHBED from './scenes/deathbed'

const CUBES = {
    ...CUBES_DEFAULT_STAGE,
    ...CUBES_LOGUE,
    ...CUBES_NOHO_HOUSES,
    ...CUBES_NOHO_SCHOOL,
    ...CUBES_BATHROOM,
    ...CUBES_FREEWAY,
    ...CUBES_PORCH,
    ...CUBES_CHANGELING_CAVE,
    ...CUBES_PUPPET_SHOW,
    ...CUBES_SCHOOLBUS,
    ...CUBES_TETHERBALL_COURT,
    ...CUBES_TAIWAN_ROOM,
    ...CUBES_TAIWAN_STAIRS,
    ...CUBES_TAIWAN_GATE,
    ...CUBES_RICKSHAW,
    ...CUBES_SHORE,
    ...CUBES_BUOY,
    ...CUBES_OCEAN_DEPTHS,
    ...CUBES_OCEAN_FLOOR,
    ...CUBES_BEDROOM,
    ...CUBES_VAN_NUYS_LOCKERS,
    ...CUBES_VAN_NUYS_QUAD,
    ...CUBES_VAN_NUYS_HALLWAY,
    ...CUBES_CATHOLIC_CHURCH,
    ...CUBES_UC_BERKELEY,
    ...CUBES_CINEMA,
    ...CUBES_BASEMENT,
    ...CUBES_MUSEUM,
    ...CUBES_BACKSTAGE,
    ...CUBES_GO_KARTS,
    ...CUBES_DISHROOM,
    ...CUBES_WAITING_ROOM,
    ...CUBES_CLUB_FRONT,
    ...CUBES_CLUB_SIDE,
    ...CUBES_CLUB_FAR,
    ...CUBES_CLUB_LOADING,
    ...CUBES_BENNETT_BED,
    ...CUBES_BENNETT_COUCH,
    ...CUBES_COURTYARD,
    ...CUBES_BENNETT_GATE,
    ...CUBES_LIZ_BED,
    ...CUBES_LIZ_COUCH,
    ...CUBES_LIZ_GATE,
    ...CUBES_ROYCE_HALL,
    ...CUBES_WALGREENS,
    ...CUBES_STEAM_TUNNEL,
    ...CUBES_CEMETERY,
    ...CUBES_STATION_WAGON,
    ...CUBES_ATTIC,
    ...CUBES_OAKLAND_HOUSES,
    ...CUBES_OAKLAND_RESIDENTIAL,
    ...CUBES_OAKLAND_COMMERCIAL,
    ...CUBES_OAKLAND_PUBLIC,
    ...CUBES_SNOWGLOBES_PAST,
    ...CUBES_SNOWGLOBES_PRESENT,
    ...CUBES_SNOWGLOBES_FUTURE,
    ...CUBES_EL_CERRITO,
    ...CUBES_ALLEY,
    ...CUBES_EL_TORITO,
    ...CUBES_PAMPAS,
    ...CUBES_WEDDING,
    ...CUBES_CLIFF,
    ...CUBES_DEATHBED
}

const getCubesForKey = (cubesKey) => {

    const defaultStageCubes = CUBES[DEFAULT_STAGE_KEY],
        keyCubes = CUBES[cubesKey]

    return {
        ceiling: {
            ...defaultStageCubes.ceiling,
            ...keyCubes.ceiling
        },
        floor: {
            ...defaultStageCubes.floor,
            ...keyCubes.floor
        },
        slantDirection: keyCubes.slantDirection || ''
    }
}

export {
    CUBES,
    getCubesForKey
}
