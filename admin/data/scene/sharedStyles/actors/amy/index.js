import {
    SMOKER,
    DOCTOR,
} from '../../../../../../app/constants/scene/actors/amy'
import {
    FLIRTING,
    MINGLING,
    PROTESTER,
    EPILOGUE,
} from '../../../../../../app/constants/scene/actors/songs'
import {
    CIGARETTE__SHARED,
    HEINEKEN__SHARED,
} from '../../../../../../app/constants/scene/sharedStyles/food'
import { HOSPITAL_LINENS__SHARED } from '../../../../../../app/constants/scene/sharedStyles/furniture'
import { BOOK__SHARED } from '../../../../../../app/constants/scene/sharedStyles/paper'

export default {
    [SMOKER]: CIGARETTE__SHARED,
    [FLIRTING]: null,
    [MINGLING]: HEINEKEN__SHARED,
    [PROTESTER]: BOOK__SHARED,
    [DOCTOR]: HOSPITAL_LINENS__SHARED,
    [EPILOGUE]: null,
}
