import keys from 'lodash.keys'

import THINGS_NOHO_HOUSES from './scenes/nohoHouses'
import THINGS_NOHO_SCHOOL from './scenes/nohoSchool'
import THINGS_BATHROOM, {
    THINGS_BATHROOM_BATHING,
    THINGS_BATHROOM_SINGING
} from './scenes/bathroom'
import THINGS_FREEWAY from './scenes/freeway'
import THINGS_PORCH from './scenes/porch'
import THINGS_CHANGELING_CAVE from './scenes/changelingCave'
import THINGS_PUPPET_SHOW, {
    THINGS_PUPPET_SHOW_BEGIN,
    THINGS_PUPPET_SHOW_MIDDLE,
    THINGS_PUPPET_SHOW_END
} from './scenes/puppetShow'
import THINGS_SCHOOLBUS from './scenes/schoolbus'
import THINGS_TETHERBALL_COURT from './scenes/tetherballCourt'
import THINGS_TAIWAN_ROOM from './scenes/taiwanRoom'
import THINGS_TAIWAN_STAIRS from './scenes/taiwanStairs'
import THINGS_TAIWAN_GATE from './scenes/taiwanGate'
import THINGS_RICKSHAW from './scenes/rickshaw'
import THINGS_SHORE from './scenes/shore'
import THINGS_BUOY from './scenes/buoy'
import THINGS_OCEAN_DEPTHS from './scenes/oceanDepths'
import THINGS_OCEAN_FLOOR from './scenes/oceanFloor'
import THINGS_BEDROOM, {
    THINGS_BEDROOM_ENRAGED,
    THINGS_BEDROOM_FEARFUL,
    THINGS_BEDROOM_GUILTY,
    THINGS_BEDROOM_FEIGNING,
    THINGS_BEDROOM_ASLEEP,
    THINGS_BEDROOM_SHAKEN
} from './scenes/bedroom'
import THINGS_VAN_NUYS_LOCKERS from './scenes/vanNuysLockers'
import THINGS_VAN_NUYS_QUAD from './scenes/vanNuysQuad'
import THINGS_VAN_NUYS_HALLWAY from './scenes/vanNuysHallway'
import THINGS_CATHOLIC_CHURCH from './scenes/catholicChurch'
import THINGS_BERKELEY_BANCROFT, {
    THINGS_BERKELEY_BANCROFT_VEGAN
} from './scenes/berkeleyBancroft'
import THINGS_BERKELEY_CAMPANILE, {
    THINGS_BERKELEY_CAMPANILE_VEGAN
} from './scenes/berkeleyCampanile'
import THINGS_CINEMA from './scenes/cinema'
import THINGS_CINEMA_STREET from './scenes/cinemaStreet'
import THINGS_BASEMENT from './scenes/basement'
import THINGS_BASEMENT_BED, {
    THINGS_BASEMENT_BED_GARRYOWEN,
    THINGS_BASEMENT_BED_FENDING
} from './scenes/basementBed'
import THINGS_MUSEUM from './scenes/museum'
import THINGS_BACKSTAGE from './scenes/backstage'
import THINGS_GO_KARTS from './scenes/goKarts'
import THINGS_DISHROOM from './scenes/dishroom'
import THINGS_WAITING_ROOM, {
    THINGS_WAITING_ROOM_ASLEEP
} from './scenes/waitingRoom'
import THINGS_CLUB_FRONT, {
    THINGS_CLUB_FRONT_M
} from './scenes/clubFront'
import THINGS_CLUB_SIDE_CROWD from './scenes/clubSideCrowd'
import THINGS_CLUB_SIDE_STAGE from './scenes/clubSideStage'
import THINGS_CLUB_FAR from './scenes/clubFar'
import THINGS_CLUB_LOADING from './scenes/clubLoading'
import THINGS_BENNETT_BED from './scenes/bennettBed'
import THINGS_BENNETT_COUCH, {
    THINGS_BENNETT_COUCH_OPINION,
    THINGS_BENNETT_COUCH_PONDERING,
    THINGS_BENNETT_COUCH_RUBIKS,
    THINGS_BENNETT_COUCH_READING
} from './scenes/bennettCouch'
import THINGS_COURTYARD from './scenes/courtyard'
import THINGS_BENNETT_GATE from './scenes/bennettGate'
import THINGS_LIZ_BED, {
    THINGS_LIZ_BED_AFTERGLOW,
    THINGS_LIZ_BED_LOOK_BACK,
    THINGS_LIZ_BED_VEGAN
} from './scenes/lizBed'
import THINGS_LIZ_COUCH, {
    THINGS_LIZ_COUCH_GOLDEN,
    THINGS_LIZ_COUCH_TCHOTCHKES,
    THINGS_LIZ_COUCH_DEFENDING,
    THINGS_LIZ_COUCH_NOT_HUNGRY,
    THINGS_LIZ_COUCH_ASLEEP,
    THINGS_LIZ_COUCH_PEAFOWL
} from './scenes/lizCouch'
import {
    THINGS_LIZ_GATE_DATE_ENDED
} from './scenes/lizGate'
import THINGS_ROYCE_HALL from './scenes/royceHall'
import THINGS_WALGREENS from './scenes/walgreens'
import THINGS_STEAM_TUNNEL from './scenes/steamTunnel'
import THINGS_CEMETERY from './scenes/cemetery'
import THINGS_STATION_WAGON from './scenes/stationWagon'
import THINGS_ATTIC from './scenes/attic'
import THINGS_OAKLAND_HOUSES, {
    THINGS_OAKLAND_HOUSES_GARRYOWEN
} from './scenes/oaklandHouses'
import THINGS_OAKLAND_RESIDENTIAL from './scenes/oaklandResidential'
import THINGS_OAKLAND_COMMERCIAL from './scenes/oaklandCommercial'
import THINGS_OAKLAND_PUBLIC from './scenes/oaklandPublic'
import THINGS_SNOWGLOBES_PAST from './scenes/snowglobesPast'
import THINGS_SNOWGLOBES_PRESENT from './scenes/snowglobesPresent'
import THINGS_SNOWGLOBES_FUTURE from './scenes/snowglobesFuture'
import THINGS_EL_CERRITO, {
    THINGS_EL_CERRITO_REATTA
} from './scenes/elCerrito'
import THINGS_ALLEY from './scenes/alley'
import THINGS_EL_TORITO from './scenes/elTorito'
import THINGS_PAMPAS from './scenes/pampas'
import THINGS_WEDDING from './scenes/wedding'
import THINGS_CLIFF from './scenes/cliff'
import THINGS_DEATHBED, {
    THINGS_DEATHBED_CREMATED,
    THINGS_DEATHBED_DREAM
} from './scenes/deathbed'

const SCENE_ARRANGEMENTS = [
    THINGS_NOHO_HOUSES,
    THINGS_NOHO_SCHOOL,
    THINGS_BATHROOM,
    THINGS_BATHROOM_BATHING,
    THINGS_BATHROOM_SINGING,
    THINGS_FREEWAY,
    THINGS_PORCH,
    THINGS_CHANGELING_CAVE,
    THINGS_PUPPET_SHOW,
    THINGS_PUPPET_SHOW_BEGIN,
    THINGS_PUPPET_SHOW_MIDDLE,
    THINGS_PUPPET_SHOW_END,
    THINGS_SCHOOLBUS,
    THINGS_TETHERBALL_COURT,
    THINGS_TAIWAN_ROOM,
    THINGS_TAIWAN_STAIRS,
    THINGS_TAIWAN_GATE,
    THINGS_RICKSHAW,
    THINGS_SHORE,
    THINGS_BUOY,
    THINGS_OCEAN_DEPTHS,
    THINGS_OCEAN_FLOOR,
    THINGS_BEDROOM,
    THINGS_BEDROOM_ENRAGED,
    THINGS_BEDROOM_FEARFUL,
    THINGS_BEDROOM_GUILTY,
    THINGS_BEDROOM_FEIGNING,
    THINGS_BEDROOM_ASLEEP,
    THINGS_BEDROOM_SHAKEN,
    THINGS_VAN_NUYS_LOCKERS,
    THINGS_VAN_NUYS_QUAD,
    THINGS_VAN_NUYS_HALLWAY,
    THINGS_CATHOLIC_CHURCH,
    THINGS_BERKELEY_BANCROFT,
    THINGS_BERKELEY_BANCROFT_VEGAN,
    THINGS_BERKELEY_CAMPANILE,
    THINGS_BERKELEY_CAMPANILE_VEGAN,
    THINGS_CINEMA,
    THINGS_CINEMA_STREET,
    THINGS_BASEMENT,
    THINGS_BASEMENT_BED,
    THINGS_BASEMENT_BED_GARRYOWEN,
    THINGS_BASEMENT_BED_FENDING,
    THINGS_MUSEUM,
    THINGS_BACKSTAGE,
    THINGS_GO_KARTS,
    THINGS_DISHROOM,
    THINGS_WAITING_ROOM,
    THINGS_WAITING_ROOM_ASLEEP,
    THINGS_CLUB_FRONT,
    THINGS_CLUB_FRONT_M,
    THINGS_CLUB_SIDE_CROWD,
    THINGS_CLUB_SIDE_STAGE,
    THINGS_CLUB_FAR,
    THINGS_CLUB_LOADING,
    THINGS_BENNETT_BED,
    THINGS_BENNETT_COUCH,
    THINGS_BENNETT_COUCH_OPINION,
    THINGS_BENNETT_COUCH_PONDERING,
    THINGS_BENNETT_COUCH_RUBIKS,
    THINGS_BENNETT_COUCH_READING,
    THINGS_COURTYARD,
    THINGS_BENNETT_GATE,
    THINGS_LIZ_BED,
    THINGS_LIZ_BED_AFTERGLOW,
    THINGS_LIZ_BED_LOOK_BACK,
    THINGS_LIZ_BED_VEGAN,
    THINGS_LIZ_COUCH,
    THINGS_LIZ_COUCH_GOLDEN,
    THINGS_LIZ_COUCH_TCHOTCHKES,
    THINGS_LIZ_COUCH_DEFENDING,
    THINGS_LIZ_COUCH_NOT_HUNGRY,
    THINGS_LIZ_COUCH_ASLEEP,
    THINGS_LIZ_COUCH_PEAFOWL,
    THINGS_LIZ_GATE_DATE_ENDED,
    THINGS_ROYCE_HALL,
    THINGS_WALGREENS,
    THINGS_STEAM_TUNNEL,
    THINGS_CEMETERY,
    THINGS_STATION_WAGON,
    THINGS_ATTIC,
    THINGS_OAKLAND_HOUSES,
    THINGS_OAKLAND_HOUSES_GARRYOWEN,
    THINGS_OAKLAND_RESIDENTIAL,
    THINGS_OAKLAND_COMMERCIAL,
    THINGS_OAKLAND_PUBLIC,
    THINGS_SNOWGLOBES_PAST,
    THINGS_SNOWGLOBES_PRESENT,
    THINGS_SNOWGLOBES_FUTURE,
    THINGS_EL_CERRITO,
    THINGS_EL_CERRITO_REATTA,
    THINGS_ALLEY,
    THINGS_EL_TORITO,
    THINGS_PAMPAS,
    THINGS_WEDDING,
    THINGS_CLIFF,
    THINGS_DEATHBED,
    THINGS_DEATHBED_CREMATED,
    THINGS_DEATHBED_DREAM
]

const ALL_ARRANGEMENTS_THINGS = SCENE_ARRANGEMENTS.reduce((allArrangements, arrangements) => {
    const thingKeys = keys(arrangements)

    thingKeys.forEach(thingKey => {
        allArrangements[thingKey] = {
            ...allArrangements[thingKey],
            ...arrangements[thingKey]
        }
    })

    return allArrangements
}, {})

export default ALL_ARRANGEMENTS_THINGS
