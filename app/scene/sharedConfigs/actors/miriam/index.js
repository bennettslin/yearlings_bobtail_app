import {
    INFANT_CURIOUS,
    INFANT_NURSING,
    PERFUMING,
    TENNIS,
    REVERSING
} from 'constants/scene/actors/miriam'

import {
    GOPI,
    EPILOGUE
} from 'constants/scene/actors/songs'
import { MARA } from '../../../../constants/scene/actors'
import { YOUNG_MOM__SHARED } from '../../../sharedStyles/wardrobe'

export default {
    [INFANT_CURIOUS]: [
        MARA,
        YOUNG_MOM__SHARED
    ],
    [INFANT_NURSING]: [
        MARA,
        YOUNG_MOM__SHARED
    ],
    [PERFUMING]: null,
    [TENNIS]: null,
    [REVERSING]: null,
    [GOPI]: null,
    [EPILOGUE]: null
}
