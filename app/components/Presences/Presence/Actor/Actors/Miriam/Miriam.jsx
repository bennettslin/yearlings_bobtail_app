import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import InfantCurious from './Instances/InfantCurious'
import InfantNursing from './Instances/InfantNursing'
import Perfuming from './Instances/Perfuming'
import Tennis from './Instances/Tennis'
import Reversing from './Instances/Reversing'
import Gopi from './Instances/Gopi'
import Epilogue from '../MiriamTristan/Instances/Greeting'

import {
    INFANT_CURIOUS,
    INFANT_NURSING,
    PERFUMING,
    TENNIS,
    REVERSING
} from '../../../../../../scene/instanceKeys/miriam'

import {
    GOPI,
    EPILOGUE
} from '../../../../../../scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [INFANT_CURIOUS]: InfantCurious,
    [INFANT_NURSING]: InfantNursing,
    [PERFUMING]: Perfuming,
    [TENNIS]: Tennis,
    [REVERSING]: Reversing,
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

Miriam.propTypes = propTypes

export default Miriam
