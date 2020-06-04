import {
    CATHOLIC_GUY,
    WATCHING
} from '../../../../constants/scene/actors/wade'
import {
    MINGLING,
    PROTESTER,
    EPILOGUE
} from '../../../../constants/scene/actors/songs'
import { BUDWEISER__SHARED } from '../../../presences/sharedStyles/food'
import { BOOK__SHARED } from '../../../presences/sharedStyles/paper'
import { BACKPACK__SHARED } from '../../../presences/sharedStyles/wardrobe'

export default {
    [WATCHING]: BUDWEISER__SHARED,
    [MINGLING]: BUDWEISER__SHARED,
    [EPILOGUE]: null,
    [CATHOLIC_GUY]: BACKPACK__SHARED,
    [PROTESTER]: BOOK__SHARED
}
