import {
    INFANT_CURIOUS,
    INFANT_NURSING,
    PERFUMING,
    TENNIS,
    REVERSING,
} from '../../../../../../src/constants/scene/actors/miriam'
import {
    GOPI,
    EPILOGUE,
} from '../../../../../../src/constants/scene/actors/songs'
import { MARA } from '../../../../../../src/constants/scene/actors'
import { REATTA__SHARED } from '../../../../../../src/constants/scene/sharedStyles/vehicles'
import {
    SARI__SHARED,
    YOUNG_MOM__SHARED,
} from '../../../../../../src/constants/scene/sharedStyles/wardrobe'

export default {
    [INFANT_CURIOUS]: [
        MARA,
        YOUNG_MOM__SHARED,
    ],
    [INFANT_NURSING]: [
        MARA,
        YOUNG_MOM__SHARED,
    ],
    [PERFUMING]: null,
    [TENNIS]: null,
    [REVERSING]: REATTA__SHARED,
    [GOPI]: SARI__SHARED,
    [EPILOGUE]: null,
}
