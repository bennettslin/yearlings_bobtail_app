import {
    BENNETT_KEYBOARD,
    FLAPPER,
    BENNETT_DEFIANT,
    BENNETT_RECORDING
} from '../../../../../constants/scene/actors/stephanie'
import {
    MINGLING,
    PROTESTER,
    EPILOGUE
} from '../../../../../constants/scene/actors/songs'
import { BENNETT } from '../../../../../constants/scene/actors'
import { BENNETT_FUTURE__SHARED } from '../../../actors'
import { HEINEKEN__SHARED } from '../../../shared/food'
import { VIOLIN__SHARED } from '../../../shared/instruments'

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