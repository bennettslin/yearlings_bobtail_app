import {
    BENNETT_KEYBOARD,
    FLAPPER,
    BENNETT_DEFIANT,
    BENNETT_RECORDING
} from '../../../../constants/scene/actors/stephanie'
import {
    MINGLING,
    PROTESTER,
    EPILOGUE
} from '../../../../constants/scene/actors/songs'
import { BENNETT } from '../../../../constants/scene/actors'
import { BENNETT_FUTURE__SHARED } from '../../../presences/actors'
import { HEINEKEN__SHARED } from '../../../presences/sharedStyles/food'
import { VIOLIN__SHARED } from '../../../presences/sharedStyles/instruments'

export default {
    [BENNETT_KEYBOARD]: BENNETT,
    [FLAPPER]: null,
    [MINGLING]: HEINEKEN__SHARED,
    [BENNETT_DEFIANT]: BENNETT,
    [BENNETT_RECORDING]: [
        BENNETT_FUTURE__SHARED,
        VIOLIN__SHARED
    ],
    [PROTESTER]: null,
    [EPILOGUE]: null
}
