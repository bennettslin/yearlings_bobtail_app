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
        type: FATHER,
        instance: ROARING
    },
    {
        type: FATHER,
        instance: ACCUSATORY
    },
    {
        type: FATHER,
        instance: PAST
    },
    {
        type: BENNETT_FATHER,
        instance: PRESENT
    },
    {
        type: FATHER,
        instance: FUTURE
    },
    {
        type: FATHER,
        instance: REELING
    },
    {
        type: FATHER,
        instance: EPILOGUE
    }
]

export default INSTANCES
