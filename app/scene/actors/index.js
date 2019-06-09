import keys from 'lodash.keys'

/**
 * Organising actor instances by scene just makes it easier to tweak the
 * allArrangements of all the various presences within the same scene together.
 * They are actually compiled into a single object used for lookup by the
 * components, which do not distinguish by scene.
 */
import {
    ACTORS_LOGUE_PROLOGUE,
    ACTORS_LOGUE_EPILOGUE
} from './scenes/logue'
import {
    ACTORS_NOHO_HOUSES_DIDI,
    ACTORS_NOHO_HOUSES_WILLY
} from './scenes/nohoHouses'
import ACTORS_NOHO_SCHOOL from './scenes/nohoSchool'
import {
    ACTORS_BATHROOM_BATHING,
    ACTORS_BATHROOM_SINGING
} from './scenes/bathroom'
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
import {
    ACTORS_BEDROOM_ENRAGED,
    ACTORS_BEDROOM_FEARFUL,
    ACTORS_BEDROOM_GUILTY,
    ACTORS_BEDROOM_FEIGNING,
    ACTORS_BEDROOM_ASLEEP,
    ACTORS_BEDROOM_SHAKEN
} from './scenes/bedroom'
import ACTORS_VAN_NUYS_LOCKERS from './scenes/vanNuysLockers'
import ACTORS_VAN_NUYS_QUAD from './scenes/vanNuysQuad'
import ACTORS_VAN_NUYS_HALLWAY from './scenes/vanNuysHallway'
import ACTORS_CATHOLIC_CHURCH from './scenes/catholicChurch'
import {
    ACTORS_BERKELEY_BANCROFT_ASH,
    ACTORS_BERKELEY_BANCROFT_VEGAN
} from './scenes/berkeleyBancroft'
import {
    ACTORS_BERKELEY_CAMPANILE_ASH,
    ACTORS_BERKELEY_CAMPANILE_VEGAN
} from './scenes/berkeleyCampanile'
import {
    ACTORS_CINEMA_CRUSHED,
    ACTORS_CINEMA_WONDERING
} from './scenes/cinema'
import ACTORS_CINEMA_STREET from './scenes/cinemaStreet'
import ACTORS_BASEMENT from './scenes/basement'
import ACTORS_MUSEUM from './scenes/museum'
import ACTORS_BACKSTAGE from './scenes/backstage'
import ACTORS_GO_KARTS from './scenes/goKarts'
import {
    ACTORS_DISHROOM_READING,
    ACTORS_DISHROOM_LANCET
} from './scenes/dishroom'
import {
    ACTORS_WAITING_ROOM_ASLEEP,
    ACTORS_WAITING_ROOM_CHEEK
} from './scenes/waitingRoom'
import {
    ACTORS_CLUB_FRONT_M,
    ACTORS_CLUB_FRONT_GARRYOWEN
} from './scenes/clubFront'
import ACTORS_CLUB_SIDE_CROWD from './scenes/clubSideCrowd'
import ACTORS_CLUB_SIDE_STAGE from './scenes/clubSideStage'
import ACTORS_CLUB_FAR from './scenes/clubFar'
import ACTORS_CLUB_LOADING from './scenes/clubLoading'
import {
    ACTORS_BENNETT_BED_GINGERBREAD,
    ACTORS_BENNETT_BED_LINENS
} from './scenes/bennettBed'
import {
    ACTORS_BENNETT_COUCH_OPINION,
    ACTORS_BENNETT_COUCH_PONDERING,
    ACTORS_BENNETT_COUCH_RUBIKS,
    ACTORS_BENNETT_COUCH_READING
} from './scenes/bennettCouch'
import ACTORS_COURTYARD from './scenes/courtyard'
import {
    ACTORS_BENNETT_GATE_MOP_SOPPED,
    ACTORS_BENNETT_GATE_GATE_CODE
} from './scenes/bennettGate'
import {
    ACTORS_LIZ_BED_HARD_ON,
    ACTORS_LIZ_BED_MISSIONARY,
    ACTORS_LIZ_BED_AFTERGLOW,
    ACTORS_LIZ_BED_LOOK_BACK,
    ACTORS_LIZ_BED_VEGAN
} from './scenes/lizBed'
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
} from './scenes/lizCouch'
import {
    ACTORS_LIZ_GATE_DATE_ENDING,
    ACTORS_LIZ_GATE_DATE_ENDED
} from './scenes/lizGate'
import ACTORS_ROYCE_HALL from './scenes/royceHall'
import ACTORS_WALGREENS from './scenes/walgreens'
import ACTORS_STEAM_TUNNEL from './scenes/steamTunnel'
import ACTORS_CEMETERY from './scenes/cemetery'
import ACTORS_STATION_WAGON from './scenes/stationWagon'
import ACTORS_ATTIC from './scenes/attic'
import {
    ACTORS_OAKLAND_HOUSES_GARRYOWEN,
    ACTORS_OAKLAND_HOUSES_GOLDEN
} from './scenes/oaklandHouses'
import ACTORS_BASEMENT_SOFA from './scenes/basementCouch'
import ACTORS_OAKLAND_RESIDENTIAL from './scenes/oaklandResidential'
import ACTORS_OAKLAND_COMMERCIAL from './scenes/oaklandCommercial'
import ACTORS_OAKLAND_PUBLIC from './scenes/oaklandPublic'
import {
    ACTORS_BASEMENT_BED_FEARFUL,
    ACTORS_BASEMENT_BED_FENDING
} from './scenes/basementBed'
import ACTORS_SNOWGLOBES_PAST from './scenes/snowglobesPast'
import ACTORS_SNOWGLOBES_PRESENT from './scenes/snowglobesPresent'
import ACTORS_SNOWGLOBES_FUTURE from './scenes/snowglobesFuture'
import {
    ACTORS_EL_CERRITO_REMOVING,
    ACTORS_EL_CERRITO_COWGIRL,
    ACTORS_EL_CERRITO_BLOWJOB,
    ACTORS_EL_CERRITO_DISPOSING
} from './scenes/elCerrito'
import ACTORS_ALLEY from './scenes/alley'
import ACTORS_EL_TORITO from './scenes/elTorito'
import ACTORS_PAMPAS from './scenes/pampas'
import ACTORS_WEDDING from './scenes/wedding'
import ACTORS_CLIFF from './scenes/cliff'
import {
    ACTORS_DEATHBED_CREMATED,
    ACTORS_DEATHBED_DREAM
} from './scenes/deathbed'

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
