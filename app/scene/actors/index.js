import keys from 'lodash.keys'

/**
 * Organising actor instances by scene just makes it easier to tweak the
 * allArrangements of all the various presences within the same scene together.
 * They are actually compiled into a single object used for lookup by the
 * components, which do not distinguish by scene.
 */
import ACTORS_LOGUE from './scenes/logue'
import ACTORS_NOHO_HOUSES from './scenes/nohoHouses'
import ACTORS_NOHO_SCHOOL from './scenes/nohoSchool'
import ACTORS_BATHROOM from './scenes/bathroom'
import ACTORS_FREEWAY from './scenes/freeway'
import ACTORS_PORCH from './scenes/porch'
import ACTORS_CHANGELING_CAVE from './scenes/changelingCave'
import ACTORS_SCHOOLBUS from './scenes/schoolbus'
import ACTORS_TETHERBALL_COURT from './scenes/tetherballCourt'
import ACTORS_TAIWAN_ROOM from './scenes/taiwanRoom'
import ACTORS_TAIWAN_STAIRS from './scenes/taiwanStairs'
import ACTORS_TAIWAN_GATE from './scenes/taiwanGate'
import ACTORS_RICKSHAW from './scenes/rickshaw'
import ACTORS_SHORE from './scenes/shore'
import ACTORS_BUOY from './scenes/buoy'
import ACTORS_OCEAN_DEPTHS from './scenes/oceanDepths'
import ACTORS_OCEAN_FLOOR from './scenes/oceanFloor'
import ACTORS_BEDROOM from './scenes/bedroom'
import ACTORS_VAN_NUYS_LOCKERS from './scenes/vanNuysLockers'
import ACTORS_VAN_NUYS_QUAD from './scenes/vanNuysQuad'
import ACTORS_VAN_NUYS_HALLWAY from './scenes/vanNuysHallway'
import ACTORS_CATHOLIC_CHURCH from './scenes/catholicChurch'
import ACTORS_UC_BERKELEY from './scenes/ucBerkeley'
import ACTORS_CINEMA from './scenes/cinema'
import ACTORS_BASEMENT from './scenes/basement'
import ACTORS_MUSEUM from './scenes/museum'
import ACTORS_BACKSTAGE from './scenes/backstage'
import ACTORS_GO_KARTS from './scenes/goKarts'
import ACTORS_DISHROOM from './scenes/dishroom'
import ACTORS_WAITING_ROOM from './scenes/waitingRoom'
import ACTORS_CLUB_FRONT from './scenes/clubFront'
import ACTORS_CLUB_SIDE from './scenes/clubSide'
import ACTORS_CLUB_FAR from './scenes/clubFar'
import ACTORS_CLUB_LOADING from './scenes/clubLoading'
import ACTORS_BENNETT_BED from './scenes/bennettBed'
import ACTORS_BENNETT_COUCH from './scenes/bennettCouch'
import ACTORS_COURTYARD from './scenes/courtyard'
import ACTORS_BENNETT_GATE from './scenes/bennettGate'
import ACTORS_LIZ_BED from './scenes/lizBed'
import ACTORS_LIZ_COUCH from './scenes/lizCouch'
import ACTORS_LIZ_GATE from './scenes/lizGate'
import ACTORS_ROYCE_HALL from './scenes/royceHall'
import ACTORS_WALGREENS from './scenes/walgreens'
import ACTORS_STEAM_TUNNEL from './scenes/steamTunnel'
import ACTORS_CEMETERY from './scenes/cemetery'
import ACTORS_STATION_WAGON from './scenes/stationWagon'
import ACTORS_ATTIC from './scenes/attic'
import ACTORS_OAKLAND_HOUSES from './scenes/oaklandHouses'
import ACTORS_OAKLAND_RESIDENTIAL from './scenes/oaklandResidential'
import ACTORS_OAKLAND_COMMERCIAL from './scenes/oaklandCommercial'
import ACTORS_OAKLAND_PUBLIC from './scenes/oaklandPublic'
import ACTORS_SNOWGLOBES_PAST from './scenes/snowglobesPast'
import ACTORS_SNOWGLOBES_PRESENT from './scenes/snowglobesPresent'
import ACTORS_SNOWGLOBES_FUTURE from './scenes/snowglobesFuture'
import ACTORS_EL_CERRITO from './scenes/elCerrito'
import ACTORS_ALLEY from './scenes/alley'
import ACTORS_EL_TORITO from './scenes/elTorito'
import ACTORS_PAMPAS from './scenes/pampas'
import ACTORS_WEDDING from './scenes/wedding'
import ACTORS_CLIFF from './scenes/cliff'
import ACTORS_DEATHBED from './scenes/deathbed'

const SCENE_ARRANGEMENTS = [
    ACTORS_LOGUE,
    ACTORS_NOHO_HOUSES,
    ACTORS_NOHO_SCHOOL,
    ACTORS_BATHROOM,
    ACTORS_FREEWAY,
    ACTORS_PORCH,
    ACTORS_CHANGELING_CAVE,
    ACTORS_SCHOOLBUS,
    ACTORS_TETHERBALL_COURT,
    ACTORS_TAIWAN_ROOM,
    ACTORS_TAIWAN_STAIRS,
    ACTORS_TAIWAN_GATE,
    ACTORS_RICKSHAW,
    ACTORS_SHORE,
    ACTORS_BUOY,
    ACTORS_OCEAN_DEPTHS,
    ACTORS_OCEAN_FLOOR,
    ACTORS_BEDROOM,
    ACTORS_VAN_NUYS_LOCKERS,
    ACTORS_VAN_NUYS_QUAD,
    ACTORS_VAN_NUYS_HALLWAY,
    ACTORS_CATHOLIC_CHURCH,
    ACTORS_UC_BERKELEY,
    ACTORS_CINEMA,
    ACTORS_BASEMENT,
    ACTORS_MUSEUM,
    ACTORS_BACKSTAGE,
    ACTORS_GO_KARTS,
    ACTORS_DISHROOM,
    ACTORS_WAITING_ROOM,
    ACTORS_CLUB_FRONT,
    ACTORS_CLUB_SIDE,
    ACTORS_CLUB_FAR,
    ACTORS_CLUB_LOADING,
    ACTORS_BENNETT_BED,
    ACTORS_BENNETT_COUCH,
    ACTORS_COURTYARD,
    ACTORS_BENNETT_GATE,
    ACTORS_LIZ_BED,
    ACTORS_LIZ_COUCH,
    ACTORS_LIZ_GATE,
    ACTORS_ROYCE_HALL,
    ACTORS_WALGREENS,
    ACTORS_STEAM_TUNNEL,
    ACTORS_CEMETERY,
    ACTORS_STATION_WAGON,
    ACTORS_ATTIC,
    ACTORS_OAKLAND_HOUSES,
    ACTORS_OAKLAND_RESIDENTIAL,
    ACTORS_OAKLAND_COMMERCIAL,
    ACTORS_OAKLAND_PUBLIC,
    ACTORS_SNOWGLOBES_PAST,
    ACTORS_SNOWGLOBES_PRESENT,
    ACTORS_SNOWGLOBES_FUTURE,
    ACTORS_EL_CERRITO,
    ACTORS_ALLEY,
    ACTORS_EL_TORITO,
    ACTORS_PAMPAS,
    ACTORS_WEDDING,
    ACTORS_CLIFF,
    ACTORS_DEATHBED
]

const ALL_ARRANGEMENTS_ACTORS = SCENE_ARRANGEMENTS.reduce((allArrangements, arrangements) => {
    const actorKeys = keys(arrangements)

    actorKeys.forEach(actorKey => {
        allArrangements[actorKey] = {
            ...allArrangements[actorKey],
            ...arrangements[actorKey]
        }
    })

    return allArrangements
}, {})

export default ALL_ARRANGEMENTS_ACTORS
