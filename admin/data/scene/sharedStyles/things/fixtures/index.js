import {
    BACKPACK_BENNETT,
    BALLED_FOIL,
    BASS_CASE_UPRIGHT,
    BEDROOM_LAMP,
    BEETHOVEN_BUST,
    BENNETT_COUCH_LAMP,
    BENNETT_LETTERS,
    BENNETT_RECORD_PLAYER,
    BENNETT_SHOE,
    BENNETT_SHOE_REFLECTION,
    BEYONDER_ENVELOPE,
    BUDWEISER_CASE,
    BUDWEISER_EMPTIER,
    BUDWEISER_FULLER,
    CASH_BOX,
    CHRISTOPHER_LETTERS,
    CONDOM_LIZ,
    CONDOM_MIRIAM,
    CONDOM_REFLECTION,
    CONDOM_WRAPPER_LIZ,
    CONDOM_WRAPPER_MIRIAM,
    CONDOM_WRAPPER_REFLECTION,
    CRACKED_PICTURE,
    DRUMKIT,
    DRUMS_STACKED,
    DRUM_THRONE,
    ELECTRIC_GUITAR,
    EVIAN_BOTTLES,
    FLOWER_BULBS,
    FREEWAY_SIGN,
    FRIDGE_DRAWINGS,
    GHOST_SHACKLES,
    GUITAR_CASE_OPEN,
    GUITAR_CASE_UPRIGHT,
    HAIRCUT_SCISSORS,
    HAWAIIAN_DOLL,
    HEINEKEN,
    HEINEKEN_PACK,
    HOSPITAL_RECORD_PLAYER,
    KEYBOARD,
    KICK_DRUM,
    LETTER_SCRAPS,
    LIGHT_SWITCH,
    LINGERIE_DRAWING,
    LIZ_PHONE,
    LIZ_PHONE_BASE,
    LIZ_PHONE_BASE_REFLECTION,
    LIZ_PHONE_REFLECTION,
    MANNEQUIN,
    PLAYGROUND_BALL,
    PUSH_BROOM,
    RECORDING_MIC,
    RECORD_PLAYER_STOOL,
    RED_ENVELOPE_MONEY,
    SAFEWAY_BAG,
    SHELF_BOOKS_EARLY,
    SHELF_BOOKS_LATE,
    SHELF_CUP,
    STAGE_MIC,
    STEPLADDER,
    TCHOTCHKES,
    TENNIS_BALL,
    TETHERBALL_POLE,
    THROWN_FRUIT,
    TORN_MAGAZINES,
    VASELINE,
    WINE_BOTTLE,
} from '../../../../../../src/constants/scene/things/fixtures'
import {
    ALL_CLOTHING__SHARED,
    ALL_PEOPLE__SHARED,
} from '../../../../../../src/constants/scene/sharedStyles/actors'
import {
    BENNETT,
    LIZ,
} from '../../../../../../src/constants/scene/actors'
import { DRAWING__SHARED } from '../../../../../../src/constants/scene/sharedStyles/comic'
import {
    BANANA__SHARED,
    BUDWEISER__SHARED,
    EVIAN__SHARED,
    HEINEKEN__SHARED,
    PUDDING__SHARED,
    WINE__SHARED,
} from '../../../../../../src/constants/scene/sharedStyles/food'
import { LIZ_PHONE__SHARED } from '../../../../../../src/constants/scene/sharedStyles/household'
import {
    BASS_CASE__SHARED,
    CYMBAL__SHARED,
    DRUMS__SHARED,
    ELECTRIC_GUITAR__SHARED,
    GUITAR_CASE__SHARED,
    MICROPHONE__SHARED,
} from '../../../../../../src/constants/scene/sharedStyles/instruments'
import {
    FOLIAGE__SHARED,
    FREEWAY_SIGN__SHARED,
    TETHERBALL_POLE__SHARED,
} from '../../../../../../src/constants/scene/sharedStyles/outdoor'
import {
    DOLLAR__SHARED,
    PROMISE_PHOTO__SHARED,
} from '../../../../../../src/constants/scene/sharedStyles/print'
import {
    BACKPACK__SHARED,
    GHOST__SHARED,
    LIZ_CONDOM__SHARED,
    MIRIAM_CONDOM__SHARED,
} from '../../../../../../src/constants/scene/sharedStyles/wardrobe'
import { DARK_ROOM_DEFAULT__SHARED, DIM_ROOM__SHARED, EVENING_TIME__SHARED, NIGHT_TIME__SHARED } from '../../../../../../src/constants/scene/sharedStyles'

export default {
    [BACKPACK_BENNETT]: BACKPACK__SHARED,
    [BALLED_FOIL]: EVENING_TIME__SHARED,
    [BASS_CASE_UPRIGHT]: [
        DARK_ROOM_DEFAULT__SHARED,
        BASS_CASE__SHARED,
    ],
    [BEDROOM_LAMP]: DARK_ROOM_DEFAULT__SHARED,
    [BEETHOVEN_BUST]: [
        DARK_ROOM_DEFAULT__SHARED,
        DIM_ROOM__SHARED,
    ],
    [BENNETT_COUCH_LAMP]: null,
    [BENNETT_LETTERS]: null,
    [BENNETT_RECORD_PLAYER]: null,
    [BENNETT_SHOE]: [
        ALL_CLOTHING__SHARED,
        BENNETT,
    ],
    [BENNETT_SHOE_REFLECTION]: [
        ALL_CLOTHING__SHARED,
        BENNETT,
    ],
    [BEYONDER_ENVELOPE]: DARK_ROOM_DEFAULT__SHARED,
    [BUDWEISER_CASE]: [
        DARK_ROOM_DEFAULT__SHARED,
        BUDWEISER__SHARED,
    ],
    [BUDWEISER_EMPTIER]: [
        DARK_ROOM_DEFAULT__SHARED,
        BUDWEISER__SHARED,
    ],
    [BUDWEISER_FULLER]: [
        DARK_ROOM_DEFAULT__SHARED,
        BUDWEISER__SHARED,
    ],
    [CASH_BOX]: DOLLAR__SHARED,
    [CONDOM_LIZ]: [
        DARK_ROOM_DEFAULT__SHARED,
        LIZ_CONDOM__SHARED,
    ],
    [CONDOM_REFLECTION]: [
        DARK_ROOM_DEFAULT__SHARED,
        LIZ_CONDOM__SHARED,
    ],
    [CONDOM_MIRIAM]: [
        EVENING_TIME__SHARED,
        MIRIAM_CONDOM__SHARED,
    ],
    [CONDOM_WRAPPER_LIZ]: [
        DARK_ROOM_DEFAULT__SHARED,
        LIZ_CONDOM__SHARED,
    ],
    [CONDOM_WRAPPER_REFLECTION]: [
        DARK_ROOM_DEFAULT__SHARED,
        LIZ_CONDOM__SHARED,
    ],
    [CONDOM_WRAPPER_MIRIAM]: [
        EVENING_TIME__SHARED,
        MIRIAM_CONDOM__SHARED,
    ],
    [CHRISTOPHER_LETTERS]: null,
    [CRACKED_PICTURE]: [
        PROMISE_PHOTO__SHARED,
        ALL_PEOPLE__SHARED,
        BENNETT,
        LIZ,
    ],
    [DRUMKIT]: [
        CYMBAL__SHARED,
        DRUMS__SHARED,
    ],
    [DRUMS_STACKED]: [
        DARK_ROOM_DEFAULT__SHARED,
        DRUMS__SHARED,
    ],
    [DRUM_THRONE]: DRUMS__SHARED,
    [ELECTRIC_GUITAR]: ELECTRIC_GUITAR__SHARED,
    [EVIAN_BOTTLES]: [
        NIGHT_TIME__SHARED,
        EVIAN__SHARED,
    ],
    [FLOWER_BULBS]: FOLIAGE__SHARED,
    [FREEWAY_SIGN]: [
        EVENING_TIME__SHARED,
        FREEWAY_SIGN__SHARED,
    ],
    [FRIDGE_DRAWINGS]: null,
    [GHOST_SHACKLES]: GHOST__SHARED,
    [GUITAR_CASE_OPEN]: GUITAR_CASE__SHARED,
    [GUITAR_CASE_UPRIGHT]: [
        DARK_ROOM_DEFAULT__SHARED,
        GUITAR_CASE__SHARED,
    ],
    [HAIRCUT_SCISSORS]: null,
    [HAWAIIAN_DOLL]: [
        ALL_PEOPLE__SHARED,
    ],
    [HEINEKEN]: HEINEKEN__SHARED,
    [HEINEKEN_PACK]: HEINEKEN__SHARED,
    [HOSPITAL_RECORD_PLAYER]: null,
    [KEYBOARD]: null,
    [KICK_DRUM]: DRUMS__SHARED,
    [LETTER_SCRAPS]: null,
    [LIGHT_SWITCH]: DARK_ROOM_DEFAULT__SHARED,
    [LINGERIE_DRAWING]: [
        DARK_ROOM_DEFAULT__SHARED,
        DRAWING__SHARED,
    ],
    [LIZ_PHONE]: [
        DARK_ROOM_DEFAULT__SHARED,
        LIZ_PHONE__SHARED,
    ],
    [LIZ_PHONE_BASE]: LIZ_PHONE__SHARED,
    [LIZ_PHONE_BASE_REFLECTION]: LIZ_PHONE__SHARED,
    [LIZ_PHONE_REFLECTION]: [
        DARK_ROOM_DEFAULT__SHARED,
        LIZ_PHONE__SHARED,
    ],
    [MANNEQUIN]: null,
    [PLAYGROUND_BALL]: null,
    [PUSH_BROOM]: null,
    [RECORDING_MIC]: MICROPHONE__SHARED,
    [RECORD_PLAYER_STOOL]: null,
    [RED_ENVELOPE_MONEY]: DOLLAR__SHARED,
    [SAFEWAY_BAG]: null,
    [SHELF_BOOKS_EARLY]: null,
    [SHELF_BOOKS_LATE]: null,
    [SHELF_CUP]: null,
    [STAGE_MIC]: MICROPHONE__SHARED,
    [STEPLADDER]: null,
    [TCHOTCHKES]: null,
    [TENNIS_BALL]: null,
    [TETHERBALL_POLE]: TETHERBALL_POLE__SHARED,
    [THROWN_FRUIT]: [
        BANANA__SHARED,
        EVENING_TIME__SHARED,
        PUDDING__SHARED,
    ],
    [TORN_MAGAZINES]: null,
    [VASELINE]: DARK_ROOM_DEFAULT__SHARED,
    [WINE_BOTTLE]: WINE__SHARED,
}
