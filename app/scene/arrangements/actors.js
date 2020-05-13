import keys from '../../utils/lodash/keys'

/**
 * Arrangements are organised by scene to make it easier to adjust the various
 * presences within the same scene together. They are then compiled into a
 * single object used for lookup by the components, which do not distinguish by
 * scene.
 */
import {
    ACTORS_LOGUE_PROLOGUE,
    ACTORS_LOGUE_EPILOGUE
} from '../../scene/scenes/logue'
import {
    ACTORS_NOHO_HOUSES_DIDI,
    ACTORS_NOHO_HOUSES_WILLY
} from '../../scene/scenes/nohoHouses'
import ACTORS_NOHO_SCHOOL from '../../scene/scenes/nohoSchool'
import {
    ACTORS_BATHROOM_BATHING,
    ACTORS_BATHROOM_SINGING
} from '../../scene/scenes/bathroom'
import ACTORS_FREEWAY from '../../scene/scenes/freeway'
import ACTORS_PORCH from '../../scene/scenes/porch'
import ACTORS_CHANGELING_CAVE from '../../scene/scenes/changelingCave'
import ACTORS_SCHOOLBUS from '../../scene/scenes/schoolbus'
import ACTORS_TETHERBALL_COURT from '../../scene/scenes/tetherballCourt'
import ACTORS_TAIWAN_ROOM from '../../scene/scenes/taiwanRoom'
import ACTORS_TAIWAN_STAIRS from '../../scene/scenes/taiwanStairs'
import ACTORS_TAIWAN_GATE from '../../scene/scenes/taiwanGate'
import ACTORS_RICKSHAW from '../../scene/scenes/rickshaw'
import ACTORS_SHORE from '../../scene/scenes/shore'
import ACTORS_BUOY from '../../scene/scenes/buoy'
import ACTORS_OCEAN_DEPTHS from '../../scene/scenes/oceanDepths'
import ACTORS_OCEAN_FLOOR from '../../scene/scenes/oceanFloor'
import {
    ACTORS_BEDROOM_ENRAGED,
    ACTORS_BEDROOM_FEARFUL,
    ACTORS_BEDROOM_GUILTY,
    ACTORS_BEDROOM_FEIGNING,
    ACTORS_BEDROOM_ASLEEP,
    ACTORS_BEDROOM_SHAKEN
} from '../../scene/scenes/bedroom'
import ACTORS_VAN_NUYS_LOCKERS from '../../scene/scenes/vanNuysLockers'
import ACTORS_VAN_NUYS_QUAD from '../../scene/scenes/vanNuysQuad'
import ACTORS_VAN_NUYS_HALLWAY from '../../scene/scenes/vanNuysHallway'
import ACTORS_CATHOLIC_CHURCH from '../../scene/scenes/catholicChurch'
import {
    ACTORS_BERKELEY_BANCROFT_ASH,
    ACTORS_BERKELEY_BANCROFT_VEGAN
} from '../../scene/scenes/berkeleyBancroft'
import {
    ACTORS_BERKELEY_CAMPANILE_ASH,
    ACTORS_BERKELEY_CAMPANILE_VEGAN
} from '../../scene/scenes/berkeleyCampanile'
import {
    ACTORS_CINEMA_CRUSHED,
    ACTORS_CINEMA_WONDERING
} from '../../scene/scenes/cinema'
import ACTORS_CINEMA_STREET from '../../scene/scenes/cinemaStreet'
import ACTORS_BASEMENT from '../../scene/scenes/basement'
import ACTORS_MUSEUM from '../../scene/scenes/museum'
import ACTORS_BACKSTAGE from '../../scene/scenes/backstage'
import ACTORS_GO_KARTS from '../../scene/scenes/goKarts'
import {
    ACTORS_DISHROOM_READING,
    ACTORS_DISHROOM_LANCET
} from '../../scene/scenes/dishroom'
import {
    ACTORS_WAITING_ROOM_ASLEEP,
    ACTORS_WAITING_ROOM_CHEEK
} from '../../scene/scenes/waitingRoom'
import {
    ACTORS_CLUB_FRONT_M,
    ACTORS_CLUB_FRONT_GARRYOWEN
} from '../../scene/scenes/clubFront'
import ACTORS_CLUB_SIDE_CROWD from '../../scene/scenes/clubSideCrowd'
import ACTORS_CLUB_SIDE_STAGE from '../../scene/scenes/clubSideStage'
import ACTORS_CLUB_FAR from '../../scene/scenes/clubFar'
import ACTORS_CLUB_LOADING from '../../scene/scenes/clubLoading'
import {
    ACTORS_BENNETT_BED_GINGERBREAD,
    ACTORS_BENNETT_BED_LINENS
} from '../../scene/scenes/bennettBed'
import {
    ACTORS_BENNETT_COUCH_OPINION,
    ACTORS_BENNETT_COUCH_PONDERING,
    ACTORS_BENNETT_COUCH_RUBIKS,
    ACTORS_BENNETT_COUCH_READING
} from '../../scene/scenes/bennettCouch'
import ACTORS_COURTYARD from '../../scene/scenes/courtyard'
import {
    ACTORS_BENNETT_GATE_MOP_SOPPED,
    ACTORS_BENNETT_GATE_GATE_CODE
} from '../../scene/scenes/bennettGate'
import {
    ACTORS_LIZ_BED_HARD_ON,
    ACTORS_LIZ_BED_MISSIONARY,
    ACTORS_LIZ_BED_AFTERGLOW,
    ACTORS_LIZ_BED_LOOK_BACK,
    ACTORS_LIZ_BED_VEGAN
} from '../../scene/scenes/lizBed'
import {
    ACTORS_LIZ_COUCH_ASLEEP,
    ACTORS_LIZ_COUCH_GOLDEN,
    ACTORS_LIZ_COUCH_BRUSH_OFF,
    ACTORS_LIZ_COUCH_DEFENDING,
    ACTORS_LIZ_COUCH_LEAVING,
    ACTORS_LIZ_COUCH_NOT_HUNGRY,
    ACTORS_LIZ_COUCH_OPENING,
    ACTORS_LIZ_COUCH_SEATED,
    ACTORS_LIZ_COUCH_SIFTING,
    ACTORS_LIZ_COUCH_STANDING
} from '../../scene/scenes/lizCouch'
import {
    ACTORS_LIZ_GATE_DATE_ENDING,
    ACTORS_LIZ_GATE_DATE_ENDED
} from '../../scene/scenes/lizGate'
import ACTORS_ROYCE_HALL from '../../scene/scenes/royceHall'
import ACTORS_WALGREENS from '../../scene/scenes/walgreens'
import ACTORS_STEAM_TUNNEL from '../../scene/scenes/steamTunnel'
import ACTORS_CEMETERY from '../../scene/scenes/cemetery'
import ACTORS_STATION_WAGON from '../../scene/scenes/stationWagon'
import ACTORS_ATTIC from '../../scene/scenes/attic'
import {
    ACTORS_OAKLAND_HOUSES_GARRYOWEN,
    ACTORS_OAKLAND_HOUSES_GOLDEN
} from '../../scene/scenes/oaklandHouses'
import ACTORS_BASEMENT_SOFA from '../../scene/scenes/basementCouch'
import ACTORS_OAKLAND_RESIDENTIAL from '../../scene/scenes/oaklandResidential'
import ACTORS_OAKLAND_COMMERCIAL from '../../scene/scenes/oaklandCommercial'
import ACTORS_OAKLAND_PUBLIC from '../../scene/scenes/oaklandPublic'
import {
    ACTORS_BASEMENT_BED_FEARFUL,
    ACTORS_BASEMENT_BED_FENDING
} from '../../scene/scenes/basementBed'
import ACTORS_SNOWGLOBES_PAST from '../../scene/scenes/snowglobesPast'
import ACTORS_SNOWGLOBES_PRESENT from '../../scene/scenes/snowglobesPresent'
import ACTORS_SNOWGLOBES_FUTURE from '../../scene/scenes/snowglobesFuture'
import {
    ACTORS_EL_CERRITO_REMOVING,
    ACTORS_EL_CERRITO_COWGIRL,
    ACTORS_EL_CERRITO_BLOWJOB,
    ACTORS_EL_CERRITO_DISPOSING
} from '../../scene/scenes/elCerrito'
import ACTORS_ALLEY from '../../scene/scenes/alley'
import ACTORS_EL_TORITO from '../../scene/scenes/elTorito'
import ACTORS_PAMPAS from '../../scene/scenes/pampas'
import ACTORS_WEDDING from '../../scene/scenes/wedding'
import ACTORS_CLIFF from '../../scene/scenes/cliff'
import {
    ACTORS_DEATHBED_CREMATED,
    ACTORS_DEATHBED_DREAM
} from '../../scene/scenes/deathbed'

const SCENE_ARRANGEMENTS = [
    ACTORS_LOGUE_PROLOGUE,
    ACTORS_LOGUE_EPILOGUE,
    ACTORS_NOHO_HOUSES_DIDI,
    ACTORS_NOHO_HOUSES_WILLY,
    ACTORS_NOHO_SCHOOL,
    ACTORS_BATHROOM_BATHING,
    ACTORS_BATHROOM_SINGING,
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
    ACTORS_BEDROOM_ENRAGED,
    ACTORS_BEDROOM_FEARFUL,
    ACTORS_BEDROOM_GUILTY,
    ACTORS_BEDROOM_FEIGNING,
    ACTORS_BEDROOM_ASLEEP,
    ACTORS_BEDROOM_SHAKEN,
    ACTORS_VAN_NUYS_LOCKERS,
    ACTORS_VAN_NUYS_QUAD,
    ACTORS_VAN_NUYS_HALLWAY,
    ACTORS_CATHOLIC_CHURCH,
    ACTORS_BERKELEY_BANCROFT_ASH,
    ACTORS_BERKELEY_BANCROFT_VEGAN,
    ACTORS_BERKELEY_CAMPANILE_ASH,
    ACTORS_BERKELEY_CAMPANILE_VEGAN,
    ACTORS_CINEMA_CRUSHED,
    ACTORS_CINEMA_WONDERING,
    ACTORS_CINEMA_STREET,
    ACTORS_BASEMENT,
    ACTORS_BASEMENT_SOFA,
    ACTORS_BASEMENT_BED_FEARFUL,
    ACTORS_BASEMENT_BED_FENDING,
    ACTORS_MUSEUM,
    ACTORS_BACKSTAGE,
    ACTORS_GO_KARTS,
    ACTORS_DISHROOM_READING,
    ACTORS_DISHROOM_LANCET,
    ACTORS_WAITING_ROOM_ASLEEP,
    ACTORS_WAITING_ROOM_CHEEK,
    ACTORS_CLUB_FRONT_GARRYOWEN,
    ACTORS_CLUB_FRONT_M,
    ACTORS_CLUB_SIDE_CROWD,
    ACTORS_CLUB_SIDE_STAGE,
    ACTORS_CLUB_FAR,
    ACTORS_CLUB_LOADING,
    ACTORS_BENNETT_BED_GINGERBREAD,
    ACTORS_BENNETT_BED_LINENS,
    ACTORS_BENNETT_COUCH_OPINION,
    ACTORS_BENNETT_COUCH_PONDERING,
    ACTORS_BENNETT_COUCH_RUBIKS,
    ACTORS_BENNETT_COUCH_READING,
    ACTORS_COURTYARD,
    ACTORS_BENNETT_GATE_MOP_SOPPED,
    ACTORS_BENNETT_GATE_GATE_CODE,
    ACTORS_LIZ_BED_HARD_ON,
    ACTORS_LIZ_BED_MISSIONARY,
    ACTORS_LIZ_BED_AFTERGLOW,
    ACTORS_LIZ_BED_LOOK_BACK,
    ACTORS_LIZ_BED_VEGAN,
    ACTORS_LIZ_COUCH_ASLEEP,
    ACTORS_LIZ_COUCH_GOLDEN,
    ACTORS_LIZ_COUCH_BRUSH_OFF,
    ACTORS_LIZ_COUCH_DEFENDING,
    ACTORS_LIZ_COUCH_LEAVING,
    ACTORS_LIZ_COUCH_NOT_HUNGRY,
    ACTORS_LIZ_COUCH_OPENING,
    ACTORS_LIZ_COUCH_SEATED,
    ACTORS_LIZ_COUCH_SIFTING,
    ACTORS_LIZ_COUCH_STANDING,
    ACTORS_LIZ_GATE_DATE_ENDING,
    ACTORS_LIZ_GATE_DATE_ENDED,
    ACTORS_ROYCE_HALL,
    ACTORS_WALGREENS,
    ACTORS_STEAM_TUNNEL,
    ACTORS_CEMETERY,
    ACTORS_STATION_WAGON,
    ACTORS_ATTIC,
    ACTORS_OAKLAND_HOUSES_GARRYOWEN,
    ACTORS_OAKLAND_HOUSES_GOLDEN,
    ACTORS_OAKLAND_RESIDENTIAL,
    ACTORS_OAKLAND_COMMERCIAL,
    ACTORS_OAKLAND_PUBLIC,
    ACTORS_SNOWGLOBES_PAST,
    ACTORS_SNOWGLOBES_PRESENT,
    ACTORS_SNOWGLOBES_FUTURE,
    ACTORS_EL_CERRITO_REMOVING,
    ACTORS_EL_CERRITO_COWGIRL,
    ACTORS_EL_CERRITO_BLOWJOB,
    ACTORS_EL_CERRITO_DISPOSING,
    ACTORS_ALLEY,
    ACTORS_EL_TORITO,
    ACTORS_PAMPAS,
    ACTORS_WEDDING,
    ACTORS_CLIFF,
    ACTORS_DEATHBED_CREMATED,
    ACTORS_DEATHBED_DREAM
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
