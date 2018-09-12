import keys from 'lodash.keys'

import THINGS_NOHO_HOUSES from 'scene/scenes/nohoHouses/things'
import THINGS_NOHO_SCHOOL from 'scene/scenes/nohoSchool/things'
import THINGS_FAMILY_BATHROOM from 'scene/scenes/familyBathroom/things'
import THINGS_FREEWAY from 'scene/scenes/freeway/things'
import THINGS_PORCH from 'scene/scenes/porch/things'
import THINGS_CHANGELING_CAVE from 'scene/scenes/changelingCave/things'
import THINGS_PUPPET_SHOW from 'scene/scenes/puppetShow/things'
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
import THINGS_BEDROOM from 'scene/scenes/bedroom/things'
import THINGS_VAN_NUYS_LOCKERS from 'scene/scenes/vanNuysLockers/things'
import THINGS_VAN_NUYS_QUAD from 'scene/scenes/vanNuysQuad/things'
import THINGS_VAN_NUYS_HALLWAY from 'scene/scenes/vanNuysHallway/things'
import THINGS_CATHOLIC_CHURCH from 'scene/scenes/catholicChurch/things'
import THINGS_UC_BERKELEY from 'scene/scenes/ucBerkeley/things'
import THINGS_CINEMA from 'scene/scenes/cinema/things'
import THINGS_BASEMENT from 'scene/scenes/basement/things'
import THINGS_MUSEUM from 'scene/scenes/museum/things'
import THINGS_BACKSTAGE from 'scene/scenes/backstage/things'
import THINGS_GO_KARTS from 'scene/scenes/goKarts/things'
import THINGS_DISHROOM from 'scene/scenes/dishroom/things'
import THINGS_WAITING_ROOM from 'scene/scenes/waitingRoom/things'
import THINGS_CLUB_FRONT from 'scene/scenes/clubFront/things'
import THINGS_CLUB_SIDE from 'scene/scenes/clubSide/things'
import THINGS_CLUB_FAR from 'scene/scenes/clubFar/things'
import THINGS_CLUB_LOADING from 'scene/scenes/clubLoading/things'
import THINGS_BENNETT_BED from 'scene/scenes/bennettBed/things'
import THINGS_BENNETT_COUCH from 'scene/scenes/bennettCouch/things'
import THINGS_COURTYARD from 'scene/scenes/courtyard/things'
import THINGS_BENNETT_GATE from 'scene/scenes/bennettGate/things'
import THINGS_LIZ_BED from 'scene/scenes/lizBed/things'
import THINGS_LIZ_COUCH from 'scene/scenes/lizCouch/things'
import THINGS_LIZ_GATE from 'scene/scenes/lizGate/things'
import THINGS_ROYCE_HALL from 'scene/scenes/royceHall/things'
import THINGS_WALGREENS from 'scene/scenes/walgreens/things'
import THINGS_STEAM_TUNNEL from 'scene/scenes/steamTunnel/things'
import THINGS_CEMETERY from 'scene/scenes/cemetery/things'
import THINGS_STATION_WAGON from 'scene/scenes/stationWagon/things'
import THINGS_ATTIC from 'scene/scenes/attic/things'
import THINGS_OAKLAND_HOUSES from 'scene/scenes/oaklandHouses/things'
import THINGS_OAKLAND_RESIDENTIAL from 'scene/scenes/oaklandResidential/things'
import THINGS_OAKLAND_COMMERCIAL from 'scene/scenes/oaklandCommercial/things'
import THINGS_OAKLAND_PUBLIC from 'scene/scenes/oaklandPublic/things'
import THINGS_SNOWGLOBES_PAST from 'scene/scenes/snowglobesPast/things'
import THINGS_SNOWGLOBES_PRESENT from 'scene/scenes/snowglobesPresent/things'
import THINGS_SNOWGLOBES_FUTURE from 'scene/scenes/snowglobesFuture/things'
import THINGS_EL_CERRITO from 'scene/scenes/elCerrito/things'
import THINGS_ALLEY from 'scene/scenes/alley/things'
import THINGS_EL_TORITO from 'scene/scenes/elTorito/things'
import THINGS_PAMPAS from 'scene/scenes/pampas/things'
import THINGS_OUTDOOR_WEDDING from 'scene/scenes/outdoorWedding/things'
import THINGS_CLIFF from 'scene/scenes/cliff/things'
import THINGS_DEATHBED from 'scene/scenes/deathbed/things'

const SCENE_ARRANGEMENTS = [
    THINGS_NOHO_HOUSES,
    THINGS_NOHO_SCHOOL,
    THINGS_FAMILY_BATHROOM,
    THINGS_FREEWAY,
    THINGS_PORCH,
    THINGS_CHANGELING_CAVE,
    THINGS_PUPPET_SHOW,
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
    THINGS_VAN_NUYS_LOCKERS,
    THINGS_VAN_NUYS_QUAD,
    THINGS_VAN_NUYS_HALLWAY,
    THINGS_CATHOLIC_CHURCH,
    THINGS_UC_BERKELEY,
    THINGS_CINEMA,
    THINGS_BASEMENT,
    THINGS_MUSEUM,
    THINGS_BACKSTAGE,
    THINGS_GO_KARTS,
    THINGS_DISHROOM,
    THINGS_WAITING_ROOM,
    THINGS_CLUB_FRONT,
    THINGS_CLUB_SIDE,
    THINGS_CLUB_FAR,
    THINGS_CLUB_LOADING,
    THINGS_BENNETT_BED,
    THINGS_BENNETT_COUCH,
    THINGS_COURTYARD,
    THINGS_BENNETT_GATE,
    THINGS_LIZ_BED,
    THINGS_LIZ_COUCH,
    THINGS_LIZ_GATE,
    THINGS_ROYCE_HALL,
    THINGS_WALGREENS,
    THINGS_STEAM_TUNNEL,
    THINGS_CEMETERY,
    THINGS_STATION_WAGON,
    THINGS_ATTIC,
    THINGS_OAKLAND_HOUSES,
    THINGS_OAKLAND_RESIDENTIAL,
    THINGS_OAKLAND_COMMERCIAL,
    THINGS_OAKLAND_PUBLIC,
    THINGS_SNOWGLOBES_PAST,
    THINGS_SNOWGLOBES_PRESENT,
    THINGS_SNOWGLOBES_FUTURE,
    THINGS_EL_CERRITO,
    THINGS_ALLEY,
    THINGS_EL_TORITO,
    THINGS_PAMPAS,
    THINGS_OUTDOOR_WEDDING,
    THINGS_CLIFF,
    THINGS_DEATHBED
]

const ARRANGEMENTS = SCENE_ARRANGEMENTS.reduce((arrangements, arrangement) => {
    const thingKeys = keys(arrangement)

    thingKeys.forEach(thingKey => {
        arrangements[thingKey] = {
            ...arrangements[thingKey],
            ...arrangement[thingKey]
        }
    })

    return arrangements
}, {})

export default ARRANGEMENTS
