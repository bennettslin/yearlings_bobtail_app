import {
    PRETEEN_BENNETT,
    BRAD_BENNETT,
    CHRISTOPHER_BENNETT,
    CHRISTOPHER_BENNETT_WILLY,
    SASHA_BENNETT
} from '../../../../app/constants/scene/actors'
import {
    CAUTIOUS,
    ENRAGED,
    FEARFUL,
    PANICKED,
    MAT,
    STAIRS,
    GATE,
    RICKSHAW,
    SHORE,
    BUOY,
    OCEAN_FLOOR,
    FEIGNING_SICK,
    SHAKEN,
    STOIC,
    WISTFUL,
    SHEEPISH
} from '../../../../app/constants/scene/actors/preteenBennett'
import { TYING_TETHER } from '../../../../app/constants/scene/actors/bradBennett'
import { BLISSFUL_GUILTY } from '../../../../app/constants/scene/actors/christopherBennett'
import { REASSURING_ENCHANTED } from '../../../../app/constants/scene/actors/christopherBennettWilly'
import {
    MERMAID,
    COMFORTING_HUMILIATED
} from '../../../../app/constants/scene/actors/sashaBennett'
import {
    ASLEEP,
    EPILOGUE
} from '../../../../app/constants/scene/actors/songs'

export default [
    {
        type: PRETEEN_BENNETT,
        instance: CAUTIOUS
    },
    {
        type: PRETEEN_BENNETT,
        instance: ENRAGED
    },
    {
        type: PRETEEN_BENNETT,
        instance: FEARFUL
    },
    {
        type: CHRISTOPHER_BENNETT_WILLY,
        instance: REASSURING_ENCHANTED
    },
    {
        type: PRETEEN_BENNETT,
        instance: PANICKED
    },
    {
        type: BRAD_BENNETT,
        instance: TYING_TETHER
    },
    {
        type: PRETEEN_BENNETT,
        instance: MAT
    },
    {
        type: PRETEEN_BENNETT,
        instance: STAIRS
    },
    {
        type: PRETEEN_BENNETT,
        instance: GATE
    },
    {
        type: PRETEEN_BENNETT,
        instance: RICKSHAW
    },
    {
        type: PRETEEN_BENNETT,
        instance: SHORE
    },
    {
        type: PRETEEN_BENNETT,
        instance: BUOY
    },
    {
        type: SASHA_BENNETT,
        instance: MERMAID
    },
    {
        type: PRETEEN_BENNETT,
        instance: OCEAN_FLOOR
    },
    {
        type: CHRISTOPHER_BENNETT,
        instance: BLISSFUL_GUILTY
    },
    {
        type: PRETEEN_BENNETT,
        instance: FEIGNING_SICK
    },
    {
        type: PRETEEN_BENNETT,
        instance: ASLEEP
    },
    {
        type: PRETEEN_BENNETT,
        instance: SHAKEN
    },
    {
        type: PRETEEN_BENNETT,
        instance: STOIC
    },
    {
        type: PRETEEN_BENNETT,
        instance: WISTFUL
    },
    {
        type: PRETEEN_BENNETT,
        instance: SHEEPISH
    },
    {
        type: SASHA_BENNETT,
        instance: COMFORTING_HUMILIATED
    },
    {
        type: SASHA_BENNETT,
        instance: EPILOGUE
    }
]
