import PropTypes from 'prop-types'

import PuppetBennettBegin from './Puppets/PuppetBennettBegin'
import PuppetFamilyBegin from './Puppets/PuppetFamilyBegin'
import PuppetBennettMiddle from './Puppets/PuppetBennettMiddle'
import PuppetFamilyMiddle from './Puppets/PuppetFamilyMiddle'
import PuppetBennettEnd from './Puppets/PuppetBennettEnd'
import PuppetFamilyEnd from './Puppets/PuppetFamilyEnd'
import PchelkaMushkaRocket from './Puppets/PchelkaMushkaRocket'
import Earth from './Puppets/Earth'
import SpaceColony from './Puppets/SpaceColony'
import OpalLap from './Puppets/OpalLap'
import OpalGazing from './Puppets/OpalGazing'
import OpalCouch from './Puppets/OpalCouch'
import OpalLicking from './Puppets/OpalLicking'
import Peahen from './Puppets/Peahen'
import Peacock from './Puppets/Peacock'
import PuppetReatta from './Puppets/PuppetReatta'
import GhostOdinCampus from './Puppets/GhostOdinCampus'
import GhostOdinClub from './Puppets/GhostOdinClub'
import GhostOdinAlley from './Puppets/GhostOdinAlley'
import GhostOdinDemonstration from './Puppets/GhostOdinDemonstration'
import PuppetKhariLiz from './Puppets/PuppetKhariLiz'

import {
    PUPPET_BENNETT_BEGIN,
    PUPPET_FAMILY_BEGIN,
    PUPPET_BENNETT_MIDDLE,
    PUPPET_FAMILY_MIDDLE,
    PUPPET_BENNETT_END,
    PUPPET_FAMILY_END,
    PCHELKA_MUSHKA_ROCKET,
    EARTH,
    SPACE_COLONY,
    OPAL_LAP,
    OPAL_GAZING,
    OPAL_COUCH,
    OPAL_LICKING,
    PEAHEN,
    PEACOCK,
    PUPPET_REATTA,
    GHOST_ODIN_CAMPUS,
    GHOST_ODIN_CLUB,
    GHOST_ODIN_ALLEY,
    GHOST_ODIN_DEMONSTRATION,
    PUPPET_KHARI_LIZ
} from 'scene/puppetKeys'

const propTypes = {
    [PUPPET_BENNETT_BEGIN]: PropTypes.bool,
    [PUPPET_FAMILY_BEGIN]: PropTypes.bool,
    [PUPPET_BENNETT_MIDDLE]: PropTypes.bool,
    [PUPPET_FAMILY_MIDDLE]: PropTypes.bool,
    [PUPPET_BENNETT_END]: PropTypes.bool,
    [PUPPET_FAMILY_END]: PropTypes.bool,
    [PCHELKA_MUSHKA_ROCKET]: PropTypes.bool,
    [EARTH]: PropTypes.bool,
    [SPACE_COLONY]: PropTypes.bool,
    [OPAL_LAP]: PropTypes.bool,
    [OPAL_GAZING]: PropTypes.bool,
    [OPAL_COUCH]: PropTypes.bool,
    [OPAL_LICKING]: PropTypes.bool,
    [PEAHEN]: PropTypes.bool,
    [PEACOCK]: PropTypes.bool,
    [PUPPET_REATTA]: PropTypes.bool,
    [GHOST_ODIN_CAMPUS]: PropTypes.bool,
    [GHOST_ODIN_CLUB]: PropTypes.bool,
    [GHOST_ODIN_ALLEY]: PropTypes.bool,
    [GHOST_ODIN_DEMONSTRATION]: PropTypes.bool,
    [PUPPET_KHARI_LIZ]: PropTypes.bool
}

export { propTypes }

export default {
    [PUPPET_BENNETT_BEGIN]: PuppetBennettBegin,
    [PUPPET_FAMILY_BEGIN]: PuppetFamilyBegin,
    [PUPPET_BENNETT_MIDDLE]: PuppetBennettMiddle,
    [PUPPET_FAMILY_MIDDLE]: PuppetFamilyMiddle,
    [PUPPET_BENNETT_END]: PuppetBennettEnd,
    [PUPPET_FAMILY_END]: PuppetFamilyEnd,
    [PCHELKA_MUSHKA_ROCKET]: PchelkaMushkaRocket,
    [EARTH]: Earth,
    [SPACE_COLONY]: SpaceColony,
    [OPAL_LAP]: OpalLap,
    [OPAL_GAZING]: OpalGazing,
    [OPAL_COUCH]: OpalCouch,
    [OPAL_LICKING]: OpalLicking,
    [PEAHEN]: Peahen,
    [PEACOCK]: Peacock,
    [PUPPET_REATTA]: PuppetReatta,
    [GHOST_ODIN_CAMPUS]: GhostOdinCampus,
    [GHOST_ODIN_CLUB]: GhostOdinClub,
    [GHOST_ODIN_ALLEY]: GhostOdinAlley,
    [GHOST_ODIN_DEMONSTRATION]: GhostOdinDemonstration,
    [PUPPET_KHARI_LIZ]: PuppetKhariLiz
}
