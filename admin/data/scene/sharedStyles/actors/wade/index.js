import {
    CATHOLIC_GUY,
    WATCHING
} from '../../../../../../app/constants/scene/actors/wade'
import {
    MINGLING,
    PROTESTER,
    EPILOGUE
} from '../../../../../../app/constants/scene/actors/songs'
import { BUDWEISER__SHARED } from '../../../../../../app/constants/scene/sharedStyles/food'
import { BOOK__SHARED } from '../../../../../../app/constants/scene/sharedStyles/paper'
import { BACKPACK__SHARED } from '../../../../../../app/constants/scene/sharedStyles/wardrobe'

export default {
    [WATCHING]: BUDWEISER__SHARED,
    [MINGLING]: BUDWEISER__SHARED,
    [EPILOGUE]: null,
    [CATHOLIC_GUY]: BACKPACK__SHARED,
    [PROTESTER]: BOOK__SHARED
}
