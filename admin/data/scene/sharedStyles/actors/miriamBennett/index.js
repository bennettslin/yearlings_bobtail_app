import {
    ASLEEP_FEARFUL,
    FENDING_OFF,
    COWGIRL,
    BLOWJOB,
} from '../../../../../../src/constants/scene/actors/miriamBennett'
import { ASLEEP } from '../../../../../../src/constants/scene/actors/songs'
import { DARKEN__SHARED } from '../../../../../../src/constants/scene/sharedStyles'
import { BENNETT_LINENS__SHARED } from '../../../../../../src/constants/scene/sharedStyles/furniture'

export default {
    [ASLEEP]: [
        DARKEN__SHARED,
        BENNETT_LINENS__SHARED,
    ],
    [ASLEEP_FEARFUL]: [
        DARKEN__SHARED,
        BENNETT_LINENS__SHARED,
    ],
    [FENDING_OFF]: BENNETT_LINENS__SHARED,
    [COWGIRL]: null,
    [BLOWJOB]: null,
}
