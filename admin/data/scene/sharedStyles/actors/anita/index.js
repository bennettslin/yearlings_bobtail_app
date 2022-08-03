import {
    EXASPERATED,
    CONCERNED,
    CHEERING,
} from '../../../../../../src/constants/scene/actors/anita'
import { YOUNG_CHILD } from '../../../../../../src/constants/scene/actors/songs'
import { PAST__SHARED } from '../../../../../../src/constants/scene/sharedStyles'
import { BACKPACK__SHARED } from '../../../../../../src/constants/scene/sharedStyles/wardrobe'

export default {
    [EXASPERATED]: BACKPACK__SHARED,
    [CONCERNED]: null,
    [CHEERING]: PAST__SHARED,
    [YOUNG_CHILD]: BACKPACK__SHARED,
}
