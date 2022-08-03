import {
    BENNETT_KEYBOARD,
    FLAPPER,
    BENNETT_DEFIANT,
    BENNETT_RECORDING,
} from '../../../../../../src/constants/scene/actors/stephanie'
import {
    MINGLING,
    PROTESTER,
    EPILOGUE,
} from '../../../../../../src/constants/scene/actors/songs'
import { BENNETT } from '../../../../../../src/constants/scene/actors'
import { HEINEKEN__SHARED } from '../../../../../../src/constants/scene/sharedStyles/food'
import { VIOLIN__SHARED } from '../../../../../../src/constants/scene/sharedStyles/instruments'
import { FUTURE__SHARED } from '../../../../../../src/constants/scene/sharedStyles'

export default {
    [BENNETT_KEYBOARD]: BENNETT,
    [FLAPPER]: null,
    [MINGLING]: HEINEKEN__SHARED,
    [BENNETT_DEFIANT]: BENNETT,
    [BENNETT_RECORDING]: [
        BENNETT,
        VIOLIN__SHARED,
        FUTURE__SHARED,
    ],
    [PROTESTER]: null,
    [EPILOGUE]: null,
}
