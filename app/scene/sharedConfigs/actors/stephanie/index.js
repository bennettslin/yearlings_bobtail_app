import {
    BENNETT_KEYBOARD,
    FLAPPER,
    BENNETT_DEFIANT,
    BENNETT_RECORDING
} from 'constants/scene/actors/stephanie'

import {
    MINGLING,
    PROTESTER,
    EPILOGUE
} from 'constants/scene/actors/songs'

import { BENNETT } from 'constants/scene/actors'
import { HEINEKEN__SHARED } from '../../../sharedStyles/food'

export default {
    [BENNETT_KEYBOARD]: BENNETT,
    [FLAPPER]: null,
    [MINGLING]: HEINEKEN__SHARED,
    [BENNETT_DEFIANT]: BENNETT,
    [BENNETT_RECORDING]: BENNETT,
    [PROTESTER]: null,
    [EPILOGUE]: null
}
