import {
    FATHER,
    BENNETT_FATHER
} from 'constants/scene/actors'
import {
    ROARING,
    ACCUSATORY,
    REELING
} from 'constants/scene/actors/father'
import {
    PAST,
    PRESENT,
    FUTURE,
    EPILOGUE
} from 'constants/scene/actors/songs'

const INSTANCES = [
    {
        actor: FATHER,
        instance: ROARING
    },
    {
        actor: FATHER,
        instance: ACCUSATORY
    },
    {
        actor: FATHER,
        instance: PAST
    },
    {
        actor: BENNETT_FATHER,
        instance: PRESENT
    },
    {
        actor: FATHER,
        instance: FUTURE
    },
    {
        actor: FATHER,
        instance: REELING
    },
    {
        actor: FATHER,
        instance: EPILOGUE
    }
]

export default INSTANCES
