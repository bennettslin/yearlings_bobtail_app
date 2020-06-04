import {
    ALL_PAST__SHARED,
    BENNETT_PAST__SHARED,
    SASHA_PAST__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/actors'
import {
    MERMAID,
    COMFORTING_HUMILIATED
} from '../../../../../../app/constants/scene/actors/sashaBennett'
import { EPILOGUE } from '../../../../../../app/constants/scene/actors/songs'

export default {
    [MERMAID]: null,
    [COMFORTING_HUMILIATED]: [
        ALL_PAST__SHARED,
        BENNETT_PAST__SHARED,
        SASHA_PAST__SHARED
    ],
    [EPILOGUE]: null
}
