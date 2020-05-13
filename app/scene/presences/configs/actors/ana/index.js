import {
    SQUATTING,
    CHUCKLING,
    SMIRKING
} from '../../../../../constants/scene/actors/ana'
import {
    EATING,
    ABBEY_ROAD,
    WALGREENS,
    STEAM_TUNNEL,
    STATION_WAGON,
    PERFORMING,
    WAITING,
    EPILOGUE
} from '../../../../../constants/scene/actors/songs'
import {
    BASEMENT_TAKEOUT__SHARED,
    BUDWEISER__SHARED,
    CIGARETTE__SHARED,
    ROBITUSSIN__SHARED
} from '../../../shared/food'
import {
    BASS__SHARED,
    BASS_CASE__SHARED
} from '../../../shared/instruments'
import { STEAM_TUNNEL__SHARED } from '../../../shared/wardrobe'

export default {
    [SQUATTING]: [
        BASS__SHARED,
        BASS_CASE__SHARED
    ],
    [EATING]: [
        BASEMENT_TAKEOUT__SHARED,
        BUDWEISER__SHARED
    ],
    [ABBEY_ROAD]: null,
    [WALGREENS]: ROBITUSSIN__SHARED,
    [STEAM_TUNNEL]: STEAM_TUNNEL__SHARED,
    [STATION_WAGON]: null,
    [PERFORMING]: BASS__SHARED,
    [WAITING]: CIGARETTE__SHARED,
    [CHUCKLING]: null,
    [SMIRKING]: BASS__SHARED,
    [EPILOGUE]: null
}
