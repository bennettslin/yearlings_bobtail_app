import {
    ALL_PAST__SHARED,
    BENNETT_PAST__SHARED,
    SASHA_PAST__SHARED
} from '../../../../constants/scene/sharedStyles/actors'
import {
    MERMAID,
    COMFORTING_HUMILIATED
} from '../../../../constants/scene/actors/sashaBennett'
import { EPILOGUE } from '../../../../constants/scene/actors/songs'

export default {
    [MERMAID]: null,
    [COMFORTING_HUMILIATED]: [
        ALL_PAST__SHARED,
        BENNETT_PAST__SHARED,
        SASHA_PAST__SHARED
    ],
    [EPILOGUE]: null
}
