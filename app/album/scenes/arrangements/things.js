import keys from 'lodash.keys'

import THINGS_NOHO_HOUSES from 'scene/scenes/nohoHouses/things'
import THINGS_NOHO_SCHOOL from 'scene/scenes/nohoSchool/things'
import THINGS_BATHROOM, {
    THINGS_BATHROOM_BATHING,
    THINGS_BATHROOM_SINGING
} from 'scene/scenes/bathroom/things'
import THINGS_FREEWAY from 'scene/scenes/freeway/things'
import THINGS_PORCH from 'scene/scenes/porch/things'
import THINGS_CHANGELING_CAVE from 'scene/scenes/changelingCave/things'
import THINGS_PUPPET_SHOW, {
    THINGS_PUPPET_SHOW_BEGIN,
    THINGS_PUPPET_SHOW_MIDDLE,
    THINGS_PUPPET_SHOW_END
} from 'scene/scenes/puppetShow/things'
import THINGS_SCHOOLBUS from 'scene/scenes/schoolbus/things'
import THINGS_TETHERBALL_COURT from 'scene/scenes/tetherballCourt/things'
import THINGS_TAIWAN_ROOM from 'scene/scenes/taiwanRoom/things'
import THINGS_TAIWAN_STAIRS from 'scene/scenes/taiwanStairs/things'
import THINGS_TAIWAN_GATE from 'scene/scenes/taiwanGate/things'
import THINGS_RICKSHAW from 'scene/scenes/rickshaw/things'
import THINGS_SHORE from 'scene/scenes/shore/things'
import THINGS_BUOY from 'scene/scenes/buoy/things'
import THINGS_OCEAN_DEPTHS from 'scene/scenes/oceanDepths/things'
import THINGS_OCEAN_FLOOR from 'scene/scenes/oceanFloor/things'
import THINGS_BEDROOM, {
    THINGS_BEDROOM_ENRAGED,
    THINGS_BEDROOM_FEARFUL,
    THINGS_BEDROOM_GUILTY,
    THINGS_BEDROOM_FEIGNING,
    THINGS_BEDROOM_ASLEEP,
    THINGS_BEDROOM_SHAKEN
} from 'scene/scenes/bedroom/things'
import THINGS_VAN_NUYS_LOCKERS from 'scene/scenes/vanNuysLockers/things'
import THINGS_VAN_NUYS_QUAD from 'scene/scenes/vanNuysQuad/things'
import THINGS_VAN_NUYS_HALLWAY from 'scene/scenes/vanNuysHallway/things'
import THINGS_CATHOLIC_CHURCH from 'scene/scenes/catholicChurch/things'
import THINGS_BERKELEY_BANCROFT, {
    THINGS_BERKELEY_BANCROFT_VEGAN
} from 'scene/scenes/berkeleyBancroft/things'
import THINGS_BERKELEY_CAMPANILE, {
    THINGS_BERKELEY_CAMPANILE_VEGAN
} from 'scene/scenes/berkeleyCampanile/things'
import THINGS_CINEMA from 'scene/scenes/cinema/things'
import THINGS_CINEMA_STREET from 'scene/scenes/cinemaStreet/things'
import THINGS_BASEMENT from 'scene/scenes/basement/things'
import THINGS_MUSEUM from 'scene/scenes/museum/things'
import THINGS_BACKSTAGE from 'scene/scenes/backstage/things'
import THINGS_GO_KARTS from 'scene/scenes/goKarts/things'
import THINGS_DISHROOM from 'scene/scenes/dishroom/things'
import THINGS_WAITING_ROOM, {
    THINGS_WAITING_ROOM_ASLEEP
} from 'scene/scenes/waitingRoom/things'
import THINGS_CLUB_FRONT, {
    THINGS_CLUB_FRONT_M
} from 'scene/scenes/clubFront/things'
import THINGS_CLUB_SIDE_CROWD from 'scene/scenes/clubSideCrowd/things'
import THINGS_CLUB_SIDE_STAGE from 'scene/scenes/clubSideStage/things'
import THINGS_CLUB_FAR from 'scene/scenes/clubFar/things'
import THINGS_CLUB_LOADING from 'scene/scenes/clubLoading/things'
import THINGS_BENNETT_BED from 'scene/scenes/bennettBed/things'
import THINGS_BENNETT_COUCH, {
    THINGS_BENNETT_COUCH_OPINION,
    THINGS_BENNETT_COUCH_PONDERING,
    THINGS_BENNETT_COUCH_RUBIKS,
    THINGS_BENNETT_COUCH_READING
} from 'scene/scenes/bennettCouch/things'
import THINGS_COURTYARD from 'scene/scenes/courtyard/things'
import THINGS_BENNETT_GATE from 'scene/scenes/bennettGate/things'
import THINGS_LIZ_BED, {
    THINGS_LIZ_BED_AFTERGLOW,
    THINGS_LIZ_BED_LOOK_BACK,
    THINGS_LIZ_BED_VEGAN
} from 'scene/scenes/lizBed/things'
import THINGS_LIZ_COUCH, {
    THINGS_LIZ_COUCH_GOLDEN,
    THINGS_LIZ_COUCH_TCHOTCHKES,
    THINGS_LIZ_COUCH_DEFENDING,
    THINGS_LIZ_COUCH_NOT_HUNGRY,
    THINGS_LIZ_COUCH_ASLEEP,
    THINGS_LIZ_COUCH_PEAFOWL
} from 'scene/scenes/lizCouch/things'
import {
    THINGS_LIZ_GATE_DATE_ENDED
} from 'scene/scenes/lizGate/things'
import THINGS_ROYCE_HALL from 'scene/scenes/royceHall/things'
import THINGS_WALGREENS from 'scene/scenes/walgreens/things'
import THINGS_STEAM_TUNNEL from 'scene/scenes/steamTunnel/things'
import THINGS_CEMETERY from 'scene/scenes/cemetery/things'
import THINGS_STATION_WAGON from 'scene/scenes/stationWagon/things'
import THINGS_ATTIC from 'scene/scenes/attic/things'
import THINGS_OAKLAND_HOUSES, {
    THINGS_OAKLAND_HOUSES_GARRYOWEN
} from 'scene/scenes/oaklandHouses/things'
import THINGS_OAKLAND_RESIDENTIAL from 'scene/scenes/oaklandResidential/things'
import THINGS_OAKLAND_COMMERCIAL from 'scene/scenes/oaklandCommercial/things'
import THINGS_OAKLAND_PUBLIC from 'scene/scenes/oaklandPublic/things'
import THINGS_BASEMENT_SOFA from 'scene/scenes/basementCouch/things'
import THINGS_BASEMENT_BED from 'scene/scenes/basementBed/things'
import THINGS_SNOWGLOBES_PAST from 'scene/scenes/snowglobesPast/things'
import THINGS_SNOWGLOBES_PRESENT from 'scene/scenes/snowglobesPresent/things'
import THINGS_SNOWGLOBES_FUTURE from 'scene/scenes/snowglobesFuture/things'
import THINGS_EL_CERRITO, {
    THINGS_EL_CERRITO_REATTA
} from 'scene/scenes/elCerrito/things'
import THINGS_ALLEY from 'scene/scenes/alley/things'
import THINGS_EL_TORITO from 'scene/scenes/elTorito/things'
import THINGS_PAMPAS from 'scene/scenes/pampas/things'
import THINGS_WEDDING from 'scene/scenes/wedding/things'
import THINGS_CLIFF from 'scene/scenes/cliff/things'
import THINGS_DEATHBED, {
    THINGS_DEATHBED_CREMATED,
    THINGS_DEATHBED_DREAM
} from 'scene/scenes/deathbed/things'

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
    THINGS_BASEMENT_SOFA,
    THINGS_OAKLAND_RESIDENTIAL,
    THINGS_OAKLAND_COMMERCIAL,
    THINGS_OAKLAND_PUBLIC,
    THINGS_BASEMENT_BED,
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
