import {
    USHER_WAITING,
    USHER_LOOKING
} from '../../../../../constants/scene/actors/howie'

import {
    ABBEY_ROAD,
    WALGREENS,
    STEAM_TUNNEL,
    STATION_WAGON,
    ATTIC,
    EPILOGUE
} from '../../../../../constants/scene/actors/songs'

import { MARA } from '../../../../../constants/scene/actors'
import { ROBITUSSIN__SHARED } from '../../../shared/food'
import { MASKED_USHER__SHARED } from '../../../shared/people'
import { STEAM_TUNNEL__SHARED } from '../../../shared/wardrobe'

export default {
    [ABBEY_ROAD]: null,
    [WALGREENS]: ROBITUSSIN__SHARED,
    [STEAM_TUNNEL]: STEAM_TUNNEL__SHARED,
    [STATION_WAGON]: null,
    [ATTIC]: null,
    [EPILOGUE]: null,
    [USHER_WAITING]: [
        MARA,
        MASKED_USHER__SHARED
    ],
    [USHER_LOOKING]: MASKED_USHER__SHARED
}
