import {
    USHER_WAITING,
    USHER_LOOKING,
} from '../../../../../../app/constants/scene/actors/howie'
import {
    ABBEY_ROAD,
    WALGREENS,
    STEAM_TUNNEL,
    STATION_WAGON,
    ATTIC,
    EPILOGUE,
} from '../../../../../../app/constants/scene/actors/songs'
import { MARA } from '../../../../../../app/constants/scene/actors'
import { USHER__SHARED } from '../../../../../../app/constants/scene/sharedStyles/actors'
import { THOUGHT__SHARED } from '../../../../../../app/constants/scene/sharedStyles/comic'
import { ROBITUSSIN__SHARED } from '../../../../../../app/constants/scene/sharedStyles/food'
import { SATURN__SHARED } from '../../../../../../app/constants/scene/sharedStyles/vehicles'
import { STEAM_TUNNEL__SHARED } from '../../../../../../app/constants/scene/sharedStyles/wardrobe'

export default {
    [ABBEY_ROAD]: null,
    [WALGREENS]: ROBITUSSIN__SHARED,
    [STEAM_TUNNEL]: STEAM_TUNNEL__SHARED,
    [STATION_WAGON]: SATURN__SHARED,
    [ATTIC]: null,
    [EPILOGUE]: null,
    [USHER_WAITING]: [
        MARA,
        USHER__SHARED,
        THOUGHT__SHARED,
    ],
    [USHER_LOOKING]: USHER__SHARED,
}
