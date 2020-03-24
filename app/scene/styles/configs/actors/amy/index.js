import {
    SMOKER,
    DOCTOR
} from '../../../../../constants/scene/actors/amy'
import {
    FLIRTING,
    MINGLING,
    PROTESTER,
    EPILOGUE
} from '../../../../../constants/scene/actors/songs'
import {
    CIGARETTE__SHARED,
    HEINEKEN__SHARED
} from '../../../shared/food'
import { HOSPITAL_LINENS__SHARED } from '../../../shared/furniture'
import { BOOK__SHARED } from '../../../shared/paper'

export default {
    [SMOKER]: CIGARETTE__SHARED,
    [FLIRTING]: null,
    [MINGLING]: HEINEKEN__SHARED,
    [PROTESTER]: BOOK__SHARED,
    [DOCTOR]: HOSPITAL_LINENS__SHARED,
    [EPILOGUE]: null
}
