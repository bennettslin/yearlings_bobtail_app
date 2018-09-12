import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import PuppetBennettBegin from './Puppets/PuppetShow/PuppetBennettBegin'
import PuppetAnitaBegin from './Puppets/PuppetShow/PuppetAnitaBegin'
import PuppetMotherBegin from './Puppets/PuppetShow/PuppetMotherBegin'
import PuppetFatherBegin from './Puppets/PuppetShow/PuppetFatherBegin'
import PuppetBennettMiddle from './Puppets/PuppetShow/PuppetBennettMiddle'
import PuppetAnitaMiddle from './Puppets/PuppetShow/PuppetAnitaMiddle'
import PuppetMotherMiddle from './Puppets/PuppetShow/PuppetMotherMiddle'
import PuppetFatherMiddle from './Puppets/PuppetShow/PuppetFatherMiddle'
import PuppetBennettEnd from './Puppets/PuppetShow/PuppetBennettEnd'
import PuppetAnitaEnd from './Puppets/PuppetShow/PuppetAnitaEnd'
import PuppetMotherEnd from './Puppets/PuppetShow/PuppetMotherEnd'
import PuppetFatherEnd from './Puppets/PuppetShow/PuppetFatherEnd'
import Pchelka from './Puppets/Bedroom/Pchelka'
import Mushka from './Puppets/Bedroom/Mushka'
import Rocket from './Puppets/Bedroom/Rocket'
import Earth from './Puppets/Bedroom/Earth'
import SpaceColony from './Puppets/Bedroom/SpaceColony'
import OpalLap from './Puppets/LizCouch/OpalLap'
import OpalWindow from './Puppets/LizCouch/OpalWindow'
import OpalCouch from './Puppets/LizCouch/OpalCouch'
import ConvertibleFar from './Puppets/ElCerrito/ConvertibleFar'
import PuppetKhari from './Puppets/OutdoorWedding/PuppetKhari'
import PuppetLiz from './Puppets/OutdoorWedding/PuppetLiz'

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
    OPAL_WINDOW,
    OPAL_COUCH,
    CONVERTIBLE_FAR,
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
    [OPAL_WINDOW]: OpalWindow,
    [OPAL_COUCH]: OpalCouch,
    [CONVERTIBLE_FAR]: ConvertibleFar,
    [PUPPET_KHARI]: PuppetKhari,
    [PUPPET_LIZ]: PuppetLiz
},
DEFAULT_COMPONENT = () => (null)

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

    const PuppetComponent =
        PUPPETS_MAP[nameKey] || DEFAULT_COMPONENT

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
