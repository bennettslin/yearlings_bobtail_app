import {
    STOOPING,
    COMFORTING,
    ARGUING
} from '../../../../../constants/scene/actors/mother'
import {
    PRESENT,
    FUTURE,
    EPILOGUE
} from '../../../../../constants/scene/actors/songs'
import { GHOST__SHARED } from '../../../shared/wardrobe'

export default {
    [STOOPING]: null,
    [COMFORTING]: null,
    [ARGUING]: null,
    [PRESENT]: GHOST__SHARED,
    [FUTURE]: GHOST__SHARED,
    [EPILOGUE]: null
}