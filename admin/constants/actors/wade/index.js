import {
    WADE
} from 'constants/scene/actors'
import {
    CATHOLIC_GUY,
    WATCHING
} from 'constants/scene/actors/wade'
import {
    MINGLING,
    EPILOGUE,
    PROTESTER
} from 'constants/scene/actors/songs'

const INSTANCES = [
    {
        type: WADE,
        instance: WATCHING
    },
    {
        type: WADE,
        instance: MINGLING
    },
    {
        type: WADE,
        instance: EPILOGUE
    },
    {
        type: WADE,
        instance: CATHOLIC_GUY
    },
    {
        type: WADE,
        instance: PROTESTER
    }
]

export default INSTANCES
