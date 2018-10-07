import keys from 'lodash.keys'

/**
 * Organising actor instances by scene just makes it easier to tweak the
 * arrangements of all the various presences within the same scene together.
 * They are actually compiled into a single object used for lookup by the
 * components, which do not distinguish by scene.
 */
import ACTORS_LOGUE from 'scene/scenes/logue/actors'
import ACTORS_NOHO_HOUSES from 'scene/scenes/nohoHouses/actors'
import ACTORS_NOHO_SCHOOL from 'scene/scenes/nohoSchool/actors'
import ACTORS_BATHROOM from 'scene/scenes/bathroom/actors'
import ACTORS_FREEWAY from 'scene/scenes/freeway/actors'
import ACTORS_PORCH from 'scene/scenes/porch/actors'
import ACTORS_CHANGELING_CAVE from 'scene/scenes/changelingCave/actors'
import ACTORS_SCHOOLBUS from 'scene/scenes/schoolbus/actors'
import ACTORS_TETHERBALL_COURT from 'scene/scenes/tetherballCourt/actors'
import ACTORS_TAIWAN_ROOM from 'scene/scenes/taiwanRoom/actors'
import ACTORS_TAIWAN_STAIRS from 'scene/scenes/taiwanStairs/actors'
import ACTORS_TAIWAN_GATE from 'scene/scenes/taiwanGate/actors'
import ACTORS_RICKSHAW from 'scene/scenes/rickshaw/actors'
import ACTORS_SHORE from 'scene/scenes/shore/actors'
import ACTORS_BUOY from 'scene/scenes/buoy/actors'
import ACTORS_OCEAN_DEPTHS from 'scene/scenes/oceanDepths/actors'
import ACTORS_OCEAN_FLOOR from 'scene/scenes/oceanFloor/actors'
import ACTORS_BEDROOM from 'scene/scenes/bedroom/actors'
import ACTORS_VAN_NUYS_LOCKERS from 'scene/scenes/vanNuysLockers/actors'
import ACTORS_VAN_NUYS_QUAD from 'scene/scenes/vanNuysQuad/actors'
import ACTORS_VAN_NUYS_HALLWAY from 'scene/scenes/vanNuysHallway/actors'
import ACTORS_CATHOLIC_CHURCH from 'scene/scenes/catholicChurch/actors'
import ACTORS_UC_BERKELEY from 'scene/scenes/ucBerkeley/actors'
import ACTORS_CINEMA from 'scene/scenes/cinema/actors'
import ACTORS_BASEMENT from 'scene/scenes/basement/actors'
import ACTORS_MUSEUM from 'scene/scenes/museum/actors'
import ACTORS_BACKSTAGE from 'scene/scenes/backstage/actors'
import ACTORS_GO_KARTS from 'scene/scenes/goKarts/actors'
import ACTORS_DISHROOM from 'scene/scenes/dishroom/actors'
import ACTORS_WAITING_ROOM from 'scene/scenes/waitingRoom/actors'
import ACTORS_CLUB_FRONT from 'scene/scenes/clubFront/actors'
import ACTORS_CLUB_SIDE from 'scene/scenes/clubSide/actors'
import ACTORS_CLUB_FAR from 'scene/scenes/clubFar/actors'
import ACTORS_CLUB_LOADING from 'scene/scenes/clubLoading/actors'
import ACTORS_BENNETT_BED from 'scene/scenes/bennettBed/actors'
import ACTORS_BENNETT_COUCH from 'scene/scenes/bennettCouch/actors'
import ACTORS_COURTYARD from 'scene/scenes/courtyard/actors'
import ACTORS_BENNETT_GATE from 'scene/scenes/bennettGate/actors'
import ACTORS_LIZ_BED from 'scene/scenes/lizBed/actors'
import ACTORS_LIZ_COUCH from 'scene/scenes/lizCouch/actors'
import ACTORS_LIZ_GATE from 'scene/scenes/lizGate/actors'
import ACTORS_ROYCE_HALL from 'scene/scenes/royceHall/actors'
import ACTORS_WALGREENS from 'scene/scenes/walgreens/actors'
import ACTORS_STEAM_TUNNEL from 'scene/scenes/steamTunnel/actors'
import ACTORS_CEMETERY from 'scene/scenes/cemetery/actors'
import ACTORS_STATION_WAGON from 'scene/scenes/stationWagon/actors'
import ACTORS_ATTIC from 'scene/scenes/attic/actors'
import ACTORS_OAKLAND_HOUSES from 'scene/scenes/oaklandHouses/actors'
import ACTORS_OAKLAND_RESIDENTIAL from 'scene/scenes/oaklandResidential/actors'
import ACTORS_OAKLAND_COMMERCIAL from 'scene/scenes/oaklandCommercial/actors'
import ACTORS_OAKLAND_PUBLIC from 'scene/scenes/oaklandPublic/actors'
import ACTORS_SNOWGLOBES_PAST from 'scene/scenes/snowglobesPast/actors'
import ACTORS_SNOWGLOBES_PRESENT from 'scene/scenes/snowglobesPresent/actors'
import ACTORS_SNOWGLOBES_FUTURE from 'scene/scenes/snowglobesFuture/actors'
import ACTORS_EL_CERRITO from 'scene/scenes/elCerrito/actors'
import ACTORS_ALLEY from 'scene/scenes/alley/actors'
import ACTORS_EL_TORITO from 'scene/scenes/elTorito/actors'
import ACTORS_PAMPAS from 'scene/scenes/pampas/actors'
import ACTORS_OUTDOOR_WEDDING from 'scene/scenes/outdoorWedding/actors'
import ACTORS_CLIFF from 'scene/scenes/cliff/actors'
import ACTORS_DEATHBED from 'scene/scenes/deathbed/actors'

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
    ACTORS_OUTDOOR_WEDDING,
    ACTORS_CLIFF,
    ACTORS_DEATHBED
]

const ARRANGEMENTS = SCENE_ARRANGEMENTS.reduce((arrangements, arrangement) => {
    const actorKeys = keys(arrangement)

    actorKeys.forEach(actorKey => {
        arrangements[actorKey] = {
            ...arrangements[actorKey],
            ...arrangement[actorKey]
        }
    })

    return arrangements
}, {})

export default ARRANGEMENTS
