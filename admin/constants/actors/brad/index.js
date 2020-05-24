import {
    BRAD,
    BRAD_BENNETT,
    BRAD_SASHA
} from '../../../../app/constants/scene/actors'
import {
    GESTURING,
    SNACKING
} from '../../../../app/constants/scene/actors/brad'
import { TYING_TETHER } from '../../../../app/constants/scene/actors/bradBennett'
import { CHARMED_SCHOOLBUS } from '../../../../app/constants/scene/actors/bradSasha'
import { EPILOGUE } from '../../../../app/constants/scene/actors/songs'

export default [
    {
        type: BRAD_BENNETT,
        instance: TYING_TETHER
    },
    {
        type: BRAD,
        instance: GESTURING
    },
    {
        type: BRAD,
        instance: SNACKING
    },
    {
        type: BRAD,
        instance: EPILOGUE
    },
    {
        type: BRAD_SASHA,
        instance: CHARMED_SCHOOLBUS
    }
]
