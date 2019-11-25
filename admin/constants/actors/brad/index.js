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
        actor: BRAD_SASHA,
        instance: CHARMED_SCHOOLBUS
    },
    {
        actor: BRAD_BENNETT,
        instance: TYING_TETHER
    },
    {
        actor: BRAD,
        instance: GESTURING
    },
    {
        actor: BRAD,
        instance: SNACKING
    },
    {
        actor: BRAD,
        instance: EPILOGUE
    }
]

export default INSTANCES
