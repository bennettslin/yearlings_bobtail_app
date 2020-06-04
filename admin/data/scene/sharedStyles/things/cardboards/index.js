import {
    BENNETT_MAT,
    BENNETT_ODIN_BUOY,
    BENNETT_ODIN_DEPTHS,
    BENNETT_ODIN_OCEAN_FLOOR,
    BENNETT_ODIN_RICKSHAW,
    BENNETT_SHORE,
    BENNETT_TAIWAN_GATE,
    BENNETT_TAIWAN_STAIRS,
    BLOOM_COUNTY_POSTER,
    CLIPBOARD,
    CODE_BOX,
    CORKBOARD,
    EARTH,
    ELLIOTT_SMITH_POSTER,
    GLADIATOR_POSTER,
    JOHNNY_HORTON_ALBUM,
    LEONARD_COHEN_POSTER,
    MARA_GLADIATOR_POSTER,
    MARA_MEMENTO_POSTER,
    MARQUEE_FRAME,
    NAS_ALBUM,
    NIRVANA_POSTER,
    ODIN_MAT,
    ODIN_SHORE,
    ODIN_TAIWAN_GATE,
    ODIN_TAIWAN_STAIRS,
    PAINTING,
    DOGS_ROCKET,
    POLICE_ALBUM,
    PROGRESS_CHART_EARLY,
    PROGRESS_CHART_LATE,
    SEA_SERPENT_LEFT,
    SEA_SERPENT_RIGHT,
    SNOWGLOBE_FUTURE_CORD,
    SNOWGLOBE_FUTURE_REATTA,
    SNOWGLOBE_PAST,
    SNOWGLOBE_PRESENT,
    SNOWGLOBE_SMALL,
    SPACE_STATION,
    TELEVISION_ALBUM,
    TINTIN_POSTER,
    VAN_NUYS_LOGO
} from '../../../../../../app/constants/scene/things/cardboards'
import {
    BENNETT,
    LIZ,
    MARA
} from '../../../../../../app/constants/scene/actors'
import {
    ALL_PAST__SHARED,
    ALL_PEOPLE__SHARED,
    BENNETT_PAST__SHARED,
    CHRISTOPHER_PAST__SHARED,
    BENNETT_FUTURE__SHARED,
    MIRIAM_FUTURE__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/actors'
import {
    ODIN_PAST__SHARED,
    SEA_SERPENT__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/animals'
import { TAIWAN_LINENS__SHARED } from '../../../../../../app/constants/scene/sharedStyles/furniture'
import {
    FOLIAGE__SHARED,
    MOUNTAIN__SHARED,
    SHORE__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/outdoor'
import {
    POSTER_GLADIATOR__SHARED,
    PROGRESS_CHART__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/print'
import {
    BUBBLE__SHARED,
    SNOWGLOBE__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/props'
import {
    TAIWAN_BUOY__SHARED,
    TAIWAN_RICKSHAW__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/taiwan'
import {
    REATTA__SHARED,
    ALL_VEHICLES__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/vehicles'

export default {
    [BENNETT_MAT]: [
        ALL_PAST__SHARED,
        ALL_PEOPLE__SHARED,
        BENNETT_PAST__SHARED,
        TAIWAN_LINENS__SHARED
    ],
    [BENNETT_ODIN_BUOY]: [
        ALL_PAST__SHARED,
        ALL_PEOPLE__SHARED,
        BENNETT_PAST__SHARED,
        ODIN_PAST__SHARED,
        SHORE__SHARED,
        TAIWAN_BUOY__SHARED
    ],
    [BENNETT_ODIN_DEPTHS]: [
        ALL_PAST__SHARED,
        ALL_PEOPLE__SHARED,
        BENNETT_PAST__SHARED,
        ODIN_PAST__SHARED
    ],
    [BENNETT_ODIN_OCEAN_FLOOR]: [
        ALL_PAST__SHARED,
        ALL_PEOPLE__SHARED,
        BENNETT_PAST__SHARED,
        ODIN_PAST__SHARED
    ],
    [BENNETT_ODIN_RICKSHAW]: [
        ALL_PAST__SHARED,
        ALL_PEOPLE__SHARED,
        ALL_VEHICLES__SHARED,
        BENNETT_PAST__SHARED,
        ODIN_PAST__SHARED,
        TAIWAN_RICKSHAW__SHARED
    ],
    [BENNETT_SHORE]: [
        ALL_PAST__SHARED,
        ALL_PEOPLE__SHARED,
        BENNETT_PAST__SHARED
    ],
    [BENNETT_TAIWAN_GATE]: [
        ALL_PAST__SHARED,
        ALL_PEOPLE__SHARED,
        BENNETT_PAST__SHARED
    ],
    [BENNETT_TAIWAN_STAIRS]: [
        ALL_PAST__SHARED,
        ALL_PEOPLE__SHARED,
        BENNETT_PAST__SHARED
    ],
    [BLOOM_COUNTY_POSTER]: [
        ALL_PEOPLE__SHARED,
        MOUNTAIN__SHARED
    ],
    [CLIPBOARD]: null,
    [CODE_BOX]: null,
    [CORKBOARD]: null,
    [EARTH]: null,
    [ELLIOTT_SMITH_POSTER]: ALL_PEOPLE__SHARED,
    [GLADIATOR_POSTER]: [
        POSTER_GLADIATOR__SHARED,
        ALL_PEOPLE__SHARED
    ],
    [JOHNNY_HORTON_ALBUM]: [
        ALL_PEOPLE__SHARED,
        BUBBLE__SHARED,
        FOLIAGE__SHARED
    ],
    [LEONARD_COHEN_POSTER]: ALL_PEOPLE__SHARED,
    [MARA_GLADIATOR_POSTER]: [
        POSTER_GLADIATOR__SHARED,
        ALL_PEOPLE__SHARED,
        MARA
    ],
    [MARA_MEMENTO_POSTER]: [
        ALL_PEOPLE__SHARED,
        MARA
    ],
    [MARQUEE_FRAME]: null,
    [NAS_ALBUM]: null,
    [NIRVANA_POSTER]: ALL_PEOPLE__SHARED,
    [ODIN_MAT]: ODIN_PAST__SHARED,
    [ODIN_SHORE]: ODIN_PAST__SHARED,
    [ODIN_TAIWAN_GATE]: ODIN_PAST__SHARED,
    [ODIN_TAIWAN_STAIRS]: ODIN_PAST__SHARED,
    [PAINTING]: null,
    [DOGS_ROCKET]: null,
    [POLICE_ALBUM]: null,
    [PROGRESS_CHART_EARLY]: PROGRESS_CHART__SHARED,
    [PROGRESS_CHART_LATE]: PROGRESS_CHART__SHARED,
    [SEA_SERPENT_LEFT]: SEA_SERPENT__SHARED,
    [SEA_SERPENT_RIGHT]: SEA_SERPENT__SHARED,
    [SNOWGLOBE_FUTURE_CORD]: [
        SNOWGLOBE__SHARED,
        BENNETT_FUTURE__SHARED,
        ALL_PEOPLE__SHARED
    ],
    [SNOWGLOBE_FUTURE_REATTA]: [
        REATTA__SHARED,
        SNOWGLOBE__SHARED,
        BENNETT_FUTURE__SHARED,
        MIRIAM_FUTURE__SHARED,
        ALL_PEOPLE__SHARED,
        ALL_VEHICLES__SHARED
    ],
    [SNOWGLOBE_PAST]: [
        SNOWGLOBE__SHARED,
        BENNETT_PAST__SHARED,
        CHRISTOPHER_PAST__SHARED,
        ALL_PEOPLE__SHARED
    ],
    [SNOWGLOBE_PRESENT]: [
        SNOWGLOBE__SHARED,
        BENNETT,
        LIZ,
        ALL_PEOPLE__SHARED
    ],
    [SNOWGLOBE_SMALL]: SNOWGLOBE__SHARED,
    [SPACE_STATION]: null,
    [TELEVISION_ALBUM]: ALL_PEOPLE__SHARED,
    [TINTIN_POSTER]: ALL_PEOPLE__SHARED,
    [VAN_NUYS_LOGO]: null
}

