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
import { BENNETT_FUTURE__SHARED } from '../../../../../../src/constants/scene/sharedStyles/actors'
import { HEINEKEN__SHARED } from '../../../../../../src/constants/scene/sharedStyles/food'
import { VIOLIN__SHARED } from '../../../../../../src/constants/scene/sharedStyles/instruments'

export default {
    [BENNETT_KEYBOARD]: BENNETT,
    [FLAPPER]: null,
    [MINGLING]: HEINEKEN__SHARED,
    [BENNETT_DEFIANT]: BENNETT,
    [BENNETT_RECORDING]: [
        BENNETT_FUTURE__SHARED,
        VIOLIN__SHARED,
    ],
    [PROTESTER]: null,
    [EPILOGUE]: null,
}
