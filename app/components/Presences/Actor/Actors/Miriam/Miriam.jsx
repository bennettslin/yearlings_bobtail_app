import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Noogie from './Instances/Noogie'
import InfantCurious from './Instances/InfantCurious'
import InfantNursing from './Instances/InfantNursing'
import Asleep from './Instances/Asleep'
import Fending from './Instances/Fending'
import Perfuming from './Instances/Perfuming'
import Cowgirl from './Instances/Cowgirl'
import Blowjob from './Instances/Blowjob'
import Tennis from './Instances/Tennis'
import Reversing from './Instances/Reversing'
import Greeting from './Instances/Greeting'
import Gopi from './Instances/Gopi'
import Epilogue from './Instances/Epilogue'

import {
    INFANT_CURIOUS,
    INFANT_NURSING,
    ASLEEP,
    FENDING,
    PERFUMING,
    TENNIS,
    REVERSING
} from '../../../../../scene/instanceKeys/miriam'

import {
    NOOGIE,
    COWGIRL,
    BLOWJOB,
    GREETING,
    GOPI,
    EPILOGUE
} from '../../../../../scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [NOOGIE]: Noogie,
    [INFANT_CURIOUS]: InfantCurious,
    [INFANT_NURSING]: InfantNursing,
    [ASLEEP]: Asleep,
    [FENDING]: Fending,
    [PERFUMING]: Perfuming,
    [COWGIRL]: Cowgirl,
    [BLOWJOB]: Blowjob,
    [TENNIS]: Tennis,
    [REVERSING]: Reversing,
    [GREETING]: Greeting,
    [GOPI]: Gopi,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Miriam = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'Miriam',
                className
            )}
        />
    )
}

Miriam.propTypes = propTypes;

export default Miriam
