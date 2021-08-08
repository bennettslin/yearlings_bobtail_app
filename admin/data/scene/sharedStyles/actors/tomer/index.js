import {
    SHANE_BUYING,
    SHANE_SPILLING,
} from '../../../../../../src/constants/scene/actors/tomer'
import {
    GANGBANGER,
    ABBEY_ROAD,
    WALGREENS,
    STEAM_TUNNEL,
    CEMETERY,
    STATION_WAGON,
    EPILOGUE,
} from '../../../../../../src/constants/scene/actors/songs'
import { SHANE__SHARED } from '../../../../../../src/constants/scene/sharedStyles/actors'
import {
    EVIAN__SHARED,
    GARBAGE_BAG__SHARED,
    HEINEKEN__SHARED,
    ROBITUSSIN__SHARED,
    WINE__SHARED,
} from '../../../../../../src/constants/scene/sharedStyles/food'
export default {
    [ABBEY_ROAD]: null,
    [WALGREENS]: ROBITUSSIN__SHARED,
    [STEAM_TUNNEL]: null,
    [CEMETERY]: EVIAN__SHARED,
    [STATION_WAGON]: null,
    [EPILOGUE]: null,
    [GANGBANGER]: [
        GARBAGE_BAG__SHARED,
        WINE__SHARED,
    ],
    [SHANE_BUYING]: SHANE__SHARED,
    [SHANE_SPILLING]: [
        SHANE__SHARED,
        HEINEKEN__SHARED,
    ],
}
