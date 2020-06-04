import {
    SMOKER,
    DOCTOR
} from '../../../../constants/scene/actors/amy'
import {
    FLIRTING,
    MINGLING,
    PROTESTER,
    EPILOGUE
} from '../../../../constants/scene/actors/songs'
import {
    CIGARETTE__SHARED,
    HEINEKEN__SHARED
} from '../../../../constants/scene/sharedStyles/food'
import { HOSPITAL_LINENS__SHARED } from '../../../../constants/scene/sharedStyles/furniture'
import { BOOK__SHARED } from '../../../../constants/scene/sharedStyles/paper'

export default {
    [SMOKER]: CIGARETTE__SHARED,
    [FLIRTING]: null,
    [MINGLING]: HEINEKEN__SHARED,
    [PROTESTER]: BOOK__SHARED,
    [DOCTOR]: HOSPITAL_LINENS__SHARED,
    [EPILOGUE]: null
}
