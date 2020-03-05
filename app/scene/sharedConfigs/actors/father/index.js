import {
    ROARING,
    ACCUSATORY,
    REELING
} from 'constants/scene/actors/father'

import {
    PAST,
    FUTURE,
    EPILOGUE
} from 'constants/scene/actors/songs'

import { GHOST__SHARED } from '../../../sharedStyles/wardrobe'

export default {
    [ROARING]: null,
    [ACCUSATORY]: GHOST__SHARED,
    [PAST]: GHOST__SHARED,
    [FUTURE]: GHOST__SHARED,
    [REELING]: GHOST__SHARED,
    [EPILOGUE]: null
}

export const FATHER_WIRE = {
    [ACCUSATORY]: {},
    [PAST]: {},
    [FUTURE]: {},
    [REELING]: {}
}
