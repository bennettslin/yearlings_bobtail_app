import {
    USHER_WAITING,
    USHER_LOOKING
} from '../../../../constants/scene/actors/howie'
import {
    ABBEY_ROAD,
    WALGREENS,
    STEAM_TUNNEL,
    STATION_WAGON,
    ATTIC,
    EPILOGUE
} from '../../../../constants/scene/actors/songs'
import { MARA } from '../../../../constants/scene/actors'
import { USHER__SHARED } from '../../../presences/actors'
import { ROBITUSSIN__SHARED } from '../../../presences/sharedStyles/food'
import { SATURN__SHARED } from '../../../presences/sharedStyles/vehicles'
import { STEAM_TUNNEL__SHARED } from '../../../presences/sharedStyles/wardrobe'

export default {
    [ABBEY_ROAD]: null,
    [WALGREENS]: ROBITUSSIN__SHARED,
    [STEAM_TUNNEL]: STEAM_TUNNEL__SHARED,
    [STATION_WAGON]: SATURN__SHARED,
    [ATTIC]: null,
    [EPILOGUE]: null,
    [USHER_WAITING]: [
        MARA,
        USHER__SHARED
    ],
    [USHER_LOOKING]: USHER__SHARED
}
