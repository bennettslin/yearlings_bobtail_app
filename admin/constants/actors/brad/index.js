import {
    BRAD,
    BRAD_BENNETT,
    BRAD_SASHA
} from 'constants/scene/actors'
import {
    GESTURING,
    SNACKING
} from 'constants/scene/actors/brad'
import { TYING_TETHER } from 'constants/scene/actors/bradBennett'
import { CHARMED_SCHOOLBUS } from 'constants/scene/actors/bradSasha'
import { EPILOGUE } from 'constants/scene/actors/songs'

const INSTANCES = [
    {
        type: BRAD_SASHA,
        instance: CHARMED_SCHOOLBUS
    },
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
    }
]

export default INSTANCES
