import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import PuppetBennettBegin from './Puppets/PuppetBennettBegin'
import PuppetAnitaBegin from './Puppets/PuppetAnitaBegin'
import PuppetMotherBegin from './Puppets/PuppetMotherBegin'
import PuppetFatherBegin from './Puppets/PuppetFatherBegin'
import PuppetBennettMiddle from './Puppets/PuppetBennettMiddle'
import PuppetAnitaMiddle from './Puppets/PuppetAnitaMiddle'
import PuppetMotherMiddle from './Puppets/PuppetMotherMiddle'
import PuppetFatherMiddle from './Puppets/PuppetFatherMiddle'
import PuppetBennettEnd from './Puppets/PuppetBennettEnd'
import PuppetAnitaEnd from './Puppets/PuppetAnitaEnd'
import PuppetMotherEnd from './Puppets/PuppetMotherEnd'
import PuppetFatherEnd from './Puppets/PuppetFatherEnd'
import Pchelka from './Puppets/Pchelka'
import Mushka from './Puppets/Mushka'
import Rocket from './Puppets/Rocket'
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
import PuppetKhari from './Puppets/PuppetKhari'
import PuppetLiz from './Puppets/PuppetLiz'

import {
    PUPPET_BENNETT_BEGIN,
    PUPPET_ANITA_BEGIN,
    PUPPET_MOTHER_BEGIN,
    PUPPET_FATHER_BEGIN,
    PUPPET_BENNETT_MIDDLE,
    PUPPET_ANITA_MIDDLE,
    PUPPET_MOTHER_MIDDLE,
    PUPPET_FATHER_MIDDLE,
    PUPPET_BENNETT_END,
    PUPPET_ANITA_END,
    PUPPET_MOTHER_END,
    PUPPET_FATHER_END,
    PCHELKA,
    MUSHKA,
    ROCKET,
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
    PUPPET_KHARI,
    PUPPET_LIZ
} from 'scene/puppetKeys'

const PUPPETS_MAP = {
    [PUPPET_BENNETT_BEGIN]: PuppetBennettBegin,
    [PUPPET_ANITA_BEGIN]: PuppetAnitaBegin,
    [PUPPET_MOTHER_BEGIN]: PuppetMotherBegin,
    [PUPPET_FATHER_BEGIN]: PuppetFatherBegin,
    [PUPPET_BENNETT_MIDDLE]: PuppetBennettMiddle,
    [PUPPET_ANITA_MIDDLE]: PuppetAnitaMiddle,
    [PUPPET_MOTHER_MIDDLE]: PuppetMotherMiddle,
    [PUPPET_FATHER_MIDDLE]: PuppetFatherMiddle,
    [PUPPET_BENNETT_END]: PuppetBennettEnd,
    [PUPPET_ANITA_END]: PuppetAnitaEnd,
    [PUPPET_MOTHER_END]: PuppetMotherEnd,
    [PUPPET_FATHER_END]: PuppetFatherEnd,
    [PCHELKA]: Pchelka,
    [MUSHKA]: Mushka,
    [ROCKET]: Rocket,
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
    [PUPPET_KHARI]: PuppetKhari,
    [PUPPET_LIZ]: PuppetLiz
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    nameKey: PropTypes.string.isRequired,
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
}

const Puppet = ({

    className,
    nameKey,

...other }) => {

    const PuppetComponent = PUPPETS_MAP[nameKey]

    return (
        <PuppetComponent {...other}
            className={cx(
                'Puppet',
                className
            )}
        />
    )
}

Puppet.propTypes = propTypes;

export default Puppet
