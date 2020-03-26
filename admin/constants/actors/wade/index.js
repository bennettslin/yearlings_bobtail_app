import {
    WADE
} from '../../../../app/constants/scene/actors'
import {
    CATHOLIC_GUY,
    WATCHING
} from '../../../../app/constants/scene/actors/wade'
import {
    MINGLING,
    EPILOGUE,
    PROTESTER
} from '../../../../app/constants/scene/actors/songs'

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
