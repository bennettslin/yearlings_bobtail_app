import {
    BRAD,
    BRAD_BENNETT,
    BRAD_SASHA,
} from '../../../../src/constants/scene/actors'
import {
    GESTURING,
    SNACKING,
} from '../../../../src/constants/scene/actors/brad'
import { TYING_TETHER } from '../../../../src/constants/scene/actors/bradBennett'
import { CHARMED_SCHOOLBUS } from '../../../../src/constants/scene/actors/bradSasha'
import { EPILOGUE } from '../../../../src/constants/scene/actors/songs'

export default [
    {
        type: BRAD_BENNETT,
        instance: TYING_TETHER,
    },
    {
        type: BRAD,
        instance: GESTURING,
    },
    {
        type: BRAD,
        instance: SNACKING,
    },
    {
        type: BRAD,
        instance: EPILOGUE,
    },
    {
        type: BRAD_SASHA,
        instance: CHARMED_SCHOOLBUS,
    },
]
