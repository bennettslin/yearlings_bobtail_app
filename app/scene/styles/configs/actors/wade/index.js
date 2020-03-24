import {
    CATHOLIC_GUY,
    WATCHING
} from '../../../../../constants/scene/actors/wade'

import {
    MINGLING,
    PROTESTER,
    EPILOGUE
} from '../../../../../constants/scene/actors/songs'

import { BUDWEISER__SHARED } from '../../../shared/food'
import { BOOK__SHARED } from '../../../shared/paper'
import { BACKPACK__SHARED } from '../../../shared/wardrobe'

export default {
    [WATCHING]: BUDWEISER__SHARED,
    [MINGLING]: BUDWEISER__SHARED,
    [EPILOGUE]: null,
    [CATHOLIC_GUY]: BACKPACK__SHARED,
    [PROTESTER]: BOOK__SHARED
}
