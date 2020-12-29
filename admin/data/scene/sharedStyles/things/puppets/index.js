import {
    GHOST_ODIN_ALLEY,
    GHOST_ODIN_CAMPUS,
    GHOST_ODIN_CLUB,
    GHOST_ODIN_DEMONSTRATION,
    OPAL_COUCH,
    OPAL_GAZING,
    PEACOCK,
    PEAHEN,
    PUPPET_ANITA_BEGIN,
    PUPPET_ANITA_END,
    PUPPET_ANITA_MIDDLE,
    PUPPET_BENNETT_BEGIN,
    PUPPET_BENNETT_END,
    PUPPET_BENNETT_MIDDLE,
    PUPPET_CHRISTOPHER_BEGIN,
    PUPPET_CHRISTOPHER_END,
    PUPPET_CHRISTOPHER_MIDDLE,
    PUPPET_FATHER_BEGIN,
    PUPPET_FATHER_END,
    PUPPET_FATHER_MIDDLE,
    PUPPET_KHARI_LIZ,
    PUPPET_MOTHER_BEGIN,
    PUPPET_MOTHER_END,
    PUPPET_MOTHER_MIDDLE,
    PUPPET_REATTA
} from '../../../../../../app/constants/scene/things/puppets'
import {
    ANITA,
    BENNETT,
    CHRISTOPHER,
    FATHER,
    MIRIAM,
    MOTHER
} from '../../../../../../app/constants/scene/actors'
import {
    ALL_CLOTHING__SHARED,
    ALL_PEOPLE__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/actors'
import {
    ODIN_GHOST__SHARED,
    OPAL__SHARED,
    PEAFOWL__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/animals'
import { RUBBER__SHARED } from '../../../../../../app/constants/scene/sharedStyles/material'
import { SKETCHBOOK__SHARED } from '../../../../../../app/constants/scene/sharedStyles/paper'
import {
    ALL_VEHICLES__SHARED,
    REATTA__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/vehicles'

export default {
    [GHOST_ODIN_ALLEY]: ODIN_GHOST__SHARED,
    [GHOST_ODIN_CAMPUS]: ODIN_GHOST__SHARED,
    [GHOST_ODIN_CLUB]: ODIN_GHOST__SHARED,
    [GHOST_ODIN_DEMONSTRATION]: ODIN_GHOST__SHARED,
    [OPAL_COUCH]: OPAL__SHARED,
    [OPAL_GAZING]: OPAL__SHARED,
    [PEACOCK]: PEAFOWL__SHARED,
    [PEAHEN]: PEAFOWL__SHARED,
    [PUPPET_ANITA_BEGIN]: [
        ALL_PEOPLE__SHARED,
        ANITA
    ],
    [PUPPET_ANITA_END]: [
        ALL_PEOPLE__SHARED,
        ANITA
    ],
    [PUPPET_ANITA_MIDDLE]: [
        ALL_PEOPLE__SHARED,
        ANITA
    ],
    [PUPPET_BENNETT_BEGIN]: [
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED,
        BENNETT,
        SKETCHBOOK__SHARED
    ],
    [PUPPET_BENNETT_END]: [
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED,
        BENNETT,
        SKETCHBOOK__SHARED
    ],
    [PUPPET_BENNETT_MIDDLE]: [
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED,
        BENNETT,
        SKETCHBOOK__SHARED
    ],
    [PUPPET_CHRISTOPHER_BEGIN]: [
        ALL_PEOPLE__SHARED,
        CHRISTOPHER
    ],
    [PUPPET_CHRISTOPHER_END]: [
        ALL_PEOPLE__SHARED,
        CHRISTOPHER
    ],
    [PUPPET_CHRISTOPHER_MIDDLE]: [
        ALL_PEOPLE__SHARED,
        CHRISTOPHER
    ],
    [PUPPET_FATHER_BEGIN]: [
        ALL_PEOPLE__SHARED,
        FATHER
    ],
    [PUPPET_FATHER_END]: [
        ALL_PEOPLE__SHARED,
        FATHER
    ],
    [PUPPET_FATHER_MIDDLE]: [
        ALL_PEOPLE__SHARED,
        FATHER
    ],
    [PUPPET_KHARI_LIZ]: ALL_PEOPLE__SHARED,
    [PUPPET_MOTHER_BEGIN]: [
        ALL_PEOPLE__SHARED,
        MOTHER
    ],
    [PUPPET_MOTHER_END]: [
        ALL_PEOPLE__SHARED,
        MOTHER
    ],
    [PUPPET_MOTHER_MIDDLE]: [
        ALL_PEOPLE__SHARED,
        MOTHER
    ],
    [PUPPET_REATTA]: [
        BENNETT,
        MIRIAM,
        ALL_PEOPLE__SHARED,
        ALL_VEHICLES__SHARED,
        REATTA__SHARED,
        RUBBER__SHARED
    ]
}
