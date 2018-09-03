import keys from 'lodash.keys'

import {
    YOUNG_BENNETT,
    PRETEEN_BENNETT,
    BENNETT,
    OLD_BENNETT,
    ANITA,
    ESTHER,
    WILLY,
    MOTHER,
    FATHER,
    CHRISTOPHER,
    SASHA,
    BRAD,
    ANDREW,
    CATHERINE,
    MARA,
    JACOB,
    ANA,
    HOWIE,
    TOMER,
    LIZ,
    KHARI,
    MIRIAM,
    TRISTAN,
    NESTOR,
    AMY,
    STEPHANIE,
    WADE,
    BENNETT_REFLECTION,
    LIZ_REFLECTION,
    KHARI_REFLECTION
} from 'scene/actorKeys'

// TODO: Delete.
import ARRANGEMENTS_YOUNG_BENNETT from './actors/youngBennett'
import ARRANGEMENTS_PRETEEN_BENNETT from './actors/preteenBennett'
import {
    ARRANGEMENTS_BENNETT,
    ARRANGEMENTS_BENNETT_REFLECTION
} from './actors/bennett'
import ARRANGEMENTS_OLD_BENNETT from './actors/oldBennett'
import ARRANGEMENTS_ANITA from './actors/anita'
import ARRANGEMENTS_ESTHER from './actors/esther'
import ARRANGEMENTS_WILLY from './actors/willy'
import ARRANGEMENTS_MOTHER from './actors/mother'
import ARRANGEMENTS_FATHER from './actors/father'
import ARRANGEMENTS_CHRISTOPHER from './actors/christopher'
import ARRANGEMENTS_SASHA from './actors/sasha'
import ARRANGEMENTS_BRAD from './actors/brad'
import ARRANGEMENTS_ANDREW from './actors/andrew'
import ARRANGEMENTS_CATHERINE from './actors/catherine'
import ARRANGEMENTS_MARA from './actors/mara'
import ARRANGEMENTS_JACOB from './actors/jacob'
import ARRANGEMENTS_ANA from './actors/ana'
import ARRANGEMENTS_HOWIE from './actors/howie'
import ARRANGEMENTS_TOMER from './actors/tomer'
import {
    ARRANGEMENTS_LIZ,
    ARRANGEMENTS_LIZ_REFLECTION
} from './actors/liz'
import {
    ARRANGEMENTS_KHARI,
    ARRANGEMENTS_KHARI_REFLECTION
} from './actors/khari'
import ARRANGEMENTS_MIRIAM from './actors/miriam'
import ARRANGEMENTS_TRISTAN from './actors/tristan'
import ARRANGEMENTS_NESTOR from './actors/nestor'
import ARRANGEMENTS_AMY from './actors/amy'
import ARRANGEMENTS_STEPHANIE from './actors/stephanie'
import ARRANGEMENTS_WADE from './actors/wade'

import ACTORS_LOGUE from 'scene/scenes/logue/actors'
import ACTORS_NOHO_HOUSES from 'scene/scenes/nohoHouses/actors'
import ACTORS_NOHO_SCHOOL from 'scene/scenes/nohoSchool/actors'
import ACTORS_FAMILY_BATHROOM from 'scene/scenes/familyBathroom/actors'
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
import ACTORS_BENNETT_ROOM from 'scene/scenes/bennettRoom/actors'
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
import ACTORS_CLUB_LOADING from 'scene/scenes/clubLoading/actors'
import ACTORS_BENNETT_BED from 'scene/scenes/bennettBed/actors'
import ACTORS_BENNETT_COUCH from 'scene/scenes/bennettCouch/actors'
import ACTORS_BENNETT_COURTYARD from 'scene/scenes/bennettCourtyard/actors'
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

// TODO: Delete.
const ARRANGEMENTS_ACTORS = {
    [YOUNG_BENNETT]: ARRANGEMENTS_YOUNG_BENNETT,
    [PRETEEN_BENNETT]: ARRANGEMENTS_PRETEEN_BENNETT,
    [BENNETT]: ARRANGEMENTS_BENNETT,
    [OLD_BENNETT]: ARRANGEMENTS_OLD_BENNETT,
    [ANITA]: ARRANGEMENTS_ANITA,
    [ESTHER]: ARRANGEMENTS_ESTHER,
    [WILLY]: ARRANGEMENTS_WILLY,
    [MOTHER]: ARRANGEMENTS_MOTHER,
    [FATHER]: ARRANGEMENTS_FATHER,
    [CHRISTOPHER]: ARRANGEMENTS_CHRISTOPHER,
    [SASHA]: ARRANGEMENTS_SASHA,
    [BRAD]: ARRANGEMENTS_BRAD,
    [ANDREW]: ARRANGEMENTS_ANDREW,
    [CATHERINE]: ARRANGEMENTS_CATHERINE,
    [MARA]: ARRANGEMENTS_MARA,
    [JACOB]: ARRANGEMENTS_JACOB,
    [ANA]: ARRANGEMENTS_ANA,
    [HOWIE]: ARRANGEMENTS_HOWIE,
    [TOMER]: ARRANGEMENTS_TOMER,
    [LIZ]: ARRANGEMENTS_LIZ,
    [KHARI]: ARRANGEMENTS_KHARI,
    [MIRIAM]: ARRANGEMENTS_MIRIAM,
    [TRISTAN]: ARRANGEMENTS_TRISTAN,
    [NESTOR]: ARRANGEMENTS_NESTOR,
    [AMY]: ARRANGEMENTS_AMY,
    [STEPHANIE]: ARRANGEMENTS_STEPHANIE,
    [WADE]: ARRANGEMENTS_WADE,
    [BENNETT_REFLECTION]: ARRANGEMENTS_BENNETT_REFLECTION,
    [LIZ_REFLECTION]: ARRANGEMENTS_LIZ_REFLECTION,
    [KHARI_REFLECTION]: ARRANGEMENTS_KHARI_REFLECTION
}

const SCENE_ARRANGEMENTS = [
    ARRANGEMENTS_ACTORS,
    ACTORS_LOGUE,
    ACTORS_NOHO_HOUSES,
    ACTORS_NOHO_SCHOOL,
    ACTORS_FAMILY_BATHROOM,
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
    ACTORS_BENNETT_ROOM,
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
    ACTORS_CLUB_LOADING,
    ACTORS_BENNETT_BED,
    ACTORS_BENNETT_COUCH,
    ACTORS_BENNETT_COURTYARD,
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
    ACTORS_CLIFF
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
