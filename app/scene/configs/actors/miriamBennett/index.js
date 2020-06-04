import {
    ASLEEP_FEARFUL,
    FENDING_OFF,
    COWGIRL,
    BLOWJOB
} from '../../../../constants/scene/actors/miriamBennett'
import { ASLEEP } from '../../../../constants/scene/actors/songs'
import { BENNETT_LINENS__SHARED } from '../../../presences/shared/furniture'

export default {
    [ASLEEP]: BENNETT_LINENS__SHARED,
    [ASLEEP_FEARFUL]: BENNETT_LINENS__SHARED,
    [FENDING_OFF]: BENNETT_LINENS__SHARED,
    [COWGIRL]: null,
    [BLOWJOB]: null
}
