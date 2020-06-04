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
} from '../../../presences/shared/food'
import { HOSPITAL_LINENS__SHARED } from '../../../presences/shared/furniture'
import { BOOK__SHARED } from '../../../presences/shared/paper'

export default {
    [SMOKER]: CIGARETTE__SHARED,
    [FLIRTING]: null,
    [MINGLING]: HEINEKEN__SHARED,
    [PROTESTER]: BOOK__SHARED,
    [DOCTOR]: HOSPITAL_LINENS__SHARED,
    [EPILOGUE]: null
}
