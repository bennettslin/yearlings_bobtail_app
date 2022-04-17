import {
    SMOKER,
    DOCTOR,
} from '../../../../../../src/constants/scene/actors/amy'
import {
    FLIRTING,
    MINGLING,
    PROTESTER,
    EPILOGUE,
} from '../../../../../../src/constants/scene/actors/songs'
import {
    CIGARETTE__SHARED,
    HEINEKEN__SHARED,
} from '../../../../../../src/constants/scene/sharedStyles/food'
import { HOSPITAL_LINENS__SHARED } from '../../../../../../src/constants/scene/sharedStyles/furniture'

export default {
    [SMOKER]: CIGARETTE__SHARED,
    [FLIRTING]: null,
    [MINGLING]: HEINEKEN__SHARED,
    [PROTESTER]: null,
    [DOCTOR]: HOSPITAL_LINENS__SHARED,
    [EPILOGUE]: null,
}
