import {
    WEEPING,
    QUIPPING,
    PUZZLED
} from '../../../../constants/scene/actors/catherine'
import {
    GOPI,
    EPILOGUE
} from '../../../../constants/scene/actors/songs'
import { BOOK__SHARED } from '../../../../constants/scene/sharedStyles/paper'
import { SARI__SHARED } from '../../../../constants/scene/sharedStyles/wardrobe'

export default {
    [WEEPING]: null,
    [QUIPPING]: BOOK__SHARED,
    [PUZZLED]: BOOK__SHARED,
    [GOPI]: SARI__SHARED,
    [EPILOGUE]: null
}
