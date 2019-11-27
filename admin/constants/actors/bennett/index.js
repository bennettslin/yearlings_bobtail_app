import {
    BENNETT,
    BENNETT_LIZ,
    BENNETT_STEPHANIE,
    MIRIAM_BENNETT,
    BENNETT_FATHER,
    BENNETTS_CHRISTOPHER_LIZ,
    BENNETT_LIZ_REFLECTION,
    BENNETT_REFLECTION
} from 'constants/scene/actors'
import {
    BREAKUP_DEJECTED,
    SOLICITING_OPINION,
    CATHOLIC_PENSIVE,
    CATHOLIC_IDEA,
    PIOUS,
    PONDERING,
    RUBIKS_CUBE,
    COUCH_READING,
    DISTRACTED,
    HOPELESSLY_CRUSHED,
    WONDERING_BABY,
    MERRILY_DERANGED,
    DISHROOM_READING,
    MOP_SOPPED,
    WAITING_ROOM_ASLEEP,
    SIDELONG_HESITANCE,
    REMOVING_SHOES,
    SHOES_REFLECTION,
    DROPPING_MEATS,
    CORD_SIDE,
    CORD_REAR,
    REMOVING_PANTS,
    INFIRM,
    DISPOSING_CONDOM,
    CAMPUS_ASHAMED,
    SHOW_ANNOYED,
    ALLEY,
    BROKEN_HEARTED,
    DEMONSTRATION
} from 'constants/scene/actors/bennett'
import {
    GINGERBREAD_PRISON,
    CHEEK_UNVEILED,
    HARD_ON,
    HARD_ON_REFLECTION,
    MISSIONARY,
    MISSIONARY_REFLECTION,
    AFTERGLOW,
    AFTERGLOW_REFLECTION,
    BRUSH_OFF,
    CELIBATE_FREEZING,
    AWKWARD_CONSOLATION,
    PAMPAS,
    GETTING_DARK,
    CLIFF,
    FINAL_DREAM
} from 'constants/scene/actors/bennettLiz'
import {
    HORSING,
    DRYING_TEARS
} from 'constants/scene/actors/bennettStephanie'
import {
    ASLEEP_FEARFUL,
    FENDING_OFF,
    COWGIRL,
    BLOWJOB
} from 'constants/scene/actors/miriamBennett'
import {
    EATING,
    DATE_ENDING,
    MUSEUM,
    BACKSTAGE,
    GO_KARTS,
    DATE_ENDED,
    DISHROOM_LANCET,
    GATE_CODE,
    RUMPLED_LINENS,
    ABBEY_ROAD,
    WALGREENS,
    STEAM_TUNNEL,
    CEMETERY,
    STATION_WAGON,
    ATTIC,
    PERFORMING,
    FLIRTING,
    GREETING,
    LEAVING_CRUMBLED,
    PAST,
    PRESENT,
    FUTURE,
    EL_TORITO,
    EPILOGUE
} from 'constants/scene/actors/songs'

const INSTANCES = [
    {
        type: BENNETT,
        instance: BREAKUP_DEJECTED
    },
    {
        type: BENNETT,
        instance: SOLICITING_OPINION
    },
    {
        type: BENNETT,
        instance: CATHOLIC_PENSIVE
    },
    {
        type: BENNETT,
        instance: CATHOLIC_IDEA
    },
    {
        type: BENNETT,
        instance: PIOUS
    },
    {
        type: BENNETT,
        instance: PONDERING
    },
    {
        type: BENNETT,
        instance: RUBIKS_CUBE
    },
    {
        type: BENNETT,
        instance: COUCH_READING
    },
    {
        type: BENNETT,
        instance: DISTRACTED
    },
    {
        type: BENNETT,
        instance: EATING
    },
    {
        type: BENNETT,
        instance: HOPELESSLY_CRUSHED
    },
    {
        type: BENNETT,
        instance: WONDERING_BABY
    },
    {
        type: BENNETT,
        instance: MERRILY_DERANGED
    },
    {
        type: BENNETT,
        instance: DATE_ENDING
    },
    {
        type: BENNETT,
        instance: MUSEUM
    },
    {
        type: BENNETT,
        instance: BACKSTAGE
    },
    {
        type: BENNETT,
        instance: GO_KARTS
    },
    {
        type: BENNETT,
        instance: DATE_ENDED
    },
    {
        type: BENNETT,
        instance: DISHROOM_READING
    },
    {
        type: BENNETT,
        instance: DISHROOM_LANCET
    },
    {
        type: BENNETT,
        instance: MOP_SOPPED
    },
    {
        type: BENNETT,
        instance: GATE_CODE
    },
    {
        type: BENNETT_LIZ,
        instance: GINGERBREAD_PRISON
    },
    {
        type: BENNETT,
        instance: RUMPLED_LINENS
    },
    {
        type: BENNETT,
        instance: WAITING_ROOM_ASLEEP
    },
    {
        type: BENNETT_LIZ,
        instance: CHEEK_UNVEILED
    },
    {
        type: BENNETT_LIZ,
        instance: HARD_ON
    },
    {
        type: BENNETT_LIZ_REFLECTION,
        instance: HARD_ON_REFLECTION
    },
    {
        type: BENNETT_LIZ,
        instance: MISSIONARY
    },
    {
        type: BENNETT_LIZ_REFLECTION,
        instance: MISSIONARY_REFLECTION
    },
    {
        type: BENNETT_LIZ,
        instance: AFTERGLOW
    },
    {
        type: BENNETT_LIZ_REFLECTION,
        instance: AFTERGLOW_REFLECTION
    },
    {
        type: BENNETT,
        instance: ABBEY_ROAD
    },
    {
        type: BENNETT,
        instance: WALGREENS
    },
    {
        type: BENNETT,
        instance: STEAM_TUNNEL
    },
    {
        type: BENNETT,
        instance: CEMETERY
    },
    {
        type: BENNETT,
        instance: STATION_WAGON
    },
    {
        type: BENNETT,
        instance: ATTIC
    },
    {
        type: BENNETT,
        instance: PERFORMING
    },
    {
        type: BENNETT,
        instance: FLIRTING
    },
    {
        type: BENNETT,
        instance: SIDELONG_HESITANCE
    },
    {
        type: BENNETT,
        instance: REMOVING_SHOES
    },
    {
        type: BENNETT_REFLECTION,
        instance: SHOES_REFLECTION
    },
    {
        type: BENNETT_LIZ,
        instance: BRUSH_OFF
    },
    {
        type: BENNETT,
        instance: DROPPING_MEATS
    },
    {
        type: BENNETT_LIZ,
        instance: CELIBATE_FREEZING
    },
    {
        type: BENNETT,
        instance: GREETING
    },
    {
        type: BENNETT,
        instance: LEAVING_CRUMBLED
    },
    {
        type: BENNETT,
        instance: CORD_SIDE
    },
    {
        type: BENNETT_LIZ,
        instance: AWKWARD_CONSOLATION
    },
    {
        type: BENNETT,
        instance: CORD_REAR
    },
    {
        type: BENNETT_STEPHANIE,
        instance: HORSING
    },
    {
        type: BENNETT_STEPHANIE,
        instance: DRYING_TEARS
    },
    {
        type: MIRIAM_BENNETT,
        instance: ASLEEP_FEARFUL
    },
    {
        type: BENNETT,
        instance: PAST
    },
    {
        type: BENNETT_FATHER,
        instance: PRESENT
    },
    {
        type: BENNETT,
        instance: FUTURE
    },
    {
        type: MIRIAM_BENNETT,
        instance: FENDING_OFF
    },
    {
        type: BENNETT,
        instance: REMOVING_PANTS
    },
    {
        type: MIRIAM_BENNETT,
        instance: COWGIRL
    },
    {
        type: MIRIAM_BENNETT,
        instance: BLOWJOB
    },
    {
        type: BENNETT,
        instance: INFIRM
    },
    {
        type: BENNETT,
        instance: DISPOSING_CONDOM
    },
    {
        type: BENNETT,
        instance: CAMPUS_ASHAMED
    },
    {
        type: BENNETT,
        instance: SHOW_ANNOYED
    },
    {
        type: BENNETT,
        instance: ALLEY
    },
    {
        type: BENNETT,
        instance: BROKEN_HEARTED
    },
    {
        type: BENNETT,
        instance: DEMONSTRATION
    },
    {
        type: BENNETT,
        instance: EL_TORITO
    },
    {
        type: BENNETT_LIZ,
        instance: PAMPAS
    },
    {
        type: BENNETT_LIZ,
        instance: GETTING_DARK
    },
    {
        type: BENNETT_LIZ,
        instance: CLIFF
    },
    {
        type: BENNETT_LIZ,
        instance: FINAL_DREAM
    },
    {
        type: BENNETTS_CHRISTOPHER_LIZ,
        instance: EPILOGUE
    }
]

export default INSTANCES
