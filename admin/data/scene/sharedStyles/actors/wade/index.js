import {
    CATHOLIC_GUY,
    WATCHING,
} from '../../../../../../src/constants/scene/actors/wade'
import {
    MINGLING,
    PROTESTER,
    EPILOGUE,
} from '../../../../../../src/constants/scene/actors/songs'
import { BUDWEISER__SHARED } from '../../../../../../src/constants/scene/sharedStyles/food'
import { BACKPACK__SHARED } from '../../../../../../src/constants/scene/sharedStyles/wardrobe'

export default {
    [WATCHING]: BUDWEISER__SHARED,
    [MINGLING]: BUDWEISER__SHARED,
    [EPILOGUE]: null,
    [CATHOLIC_GUY]: BACKPACK__SHARED,
    [PROTESTER]: null,
}
