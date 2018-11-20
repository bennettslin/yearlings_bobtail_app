import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Exasperated from './Instances/Exasperated'
import Concerned from './Instances/Concerned'
import Cheering from './Instances/Cheering'
import YoungChild from './Instances/YoungChild'

import {
    EXASPERATED,
    CONCERNED,
    CHEERING
} from '../../../../../../scene/instanceKeys/anita'

import {
    YOUNG_CHILD
} from '../../../../../../scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [EXASPERATED]: Exasperated,
    [CONCERNED]: Concerned,
    [CHEERING]: Cheering,
    [YOUNG_CHILD]: YoungChild
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Anita = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'Anita',
                className
            )}
        />
    )
}

Anita.propTypes = propTypes;

export default Anita
