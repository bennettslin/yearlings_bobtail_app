import {
    INFANT_CURIOUS,
    INFANT_NURSING,
    PERFUMING,
    TENNIS,
    REVERSING
} from '../../../../../../app/constants/scene/actors/miriam'
import {
    GOPI,
    EPILOGUE
} from '../../../../../../app/constants/scene/actors/songs'
import { MARA } from '../../../../../../app/constants/scene/actors'
import { THOUGHT__SHARED } from '../../../../../../app/constants/scene/sharedStyles/comic'
import { REATTA__SHARED } from '../../../../../../app/constants/scene/sharedStyles/vehicles'
import {
    SARI__SHARED,
    YOUNG_MOM__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/wardrobe'

export default {
    [INFANT_CURIOUS]: [
        MARA,
        YOUNG_MOM__SHARED,
        THOUGHT__SHARED
    ],
    [INFANT_NURSING]: [
        MARA,
        YOUNG_MOM__SHARED,
        THOUGHT__SHARED
    ],
    [PERFUMING]: null,
    [TENNIS]: null,
    [REVERSING]: REATTA__SHARED,
    [GOPI]: SARI__SHARED,
    [EPILOGUE]: null
}
