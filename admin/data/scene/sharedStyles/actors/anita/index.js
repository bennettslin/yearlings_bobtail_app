import {
    EXASPERATED,
    CONCERNED,
    CHEERING,
} from '../../../../../../app/constants/scene/actors/anita'
import { YOUNG_CHILD } from '../../../../../../app/constants/scene/actors/songs'
import {
    BACKPACK__SHARED,
    RAINBOW__SHARED,
} from '../../../../../../app/constants/scene/sharedStyles/wardrobe'

export default {
    [EXASPERATED]: [
        BACKPACK__SHARED,
        RAINBOW__SHARED,
    ],
    [CONCERNED]: null,
    [CHEERING]: null,
    [YOUNG_CHILD]: BACKPACK__SHARED,
}
