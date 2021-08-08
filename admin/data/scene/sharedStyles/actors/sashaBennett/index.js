import {
    ALL_PAST__SHARED,
    BENNETT_PAST__SHARED,
    SASHA_PAST__SHARED,
} from '../../../../../../src/constants/scene/sharedStyles/actors'
import {
    MERMAID,
    COMFORTING_HUMILIATED,
} from '../../../../../../src/constants/scene/actors/sashaBennett'
import { EPILOGUE } from '../../../../../../src/constants/scene/actors/songs'
import { SEA_SERPENT__SHARED } from '../../../../../../src/constants/scene/sharedStyles/animals'

export default {
    [MERMAID]: SEA_SERPENT__SHARED,
    [COMFORTING_HUMILIATED]: [
        ALL_PAST__SHARED,
        BENNETT_PAST__SHARED,
        SASHA_PAST__SHARED,
    ],
    [EPILOGUE]: null,
}
