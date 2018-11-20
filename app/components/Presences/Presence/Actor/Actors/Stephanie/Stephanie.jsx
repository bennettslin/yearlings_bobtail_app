import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import BennettKeyboard from './Instances/BennettKeyboard'
import Flapper from './Instances/Flapper'
import Squeezing from './Instances/Squeezing'
import Mingling from './Instances/Mingling'
import BennettDefiant from './Instances/BennettDefiant'
import BennettRecording from './Instances/BennettRecording'
import Protester from './Instances/Protester'
import Epilogue from './Instances/Epilogue'

import {
    BENNETT_KEYBOARD,
    FLAPPER,
    BENNETT_DEFIANT,
    BENNETT_RECORDING
} from '../../../../../../scene/instanceKeys/stephanie'

import {
    SQUEEZING,
    MINGLING,
    PROTESTER,
    EPILOGUE
} from '../../../../../../scene/instanceKeys/songs'

const INSTANCES_MAP = {
    [BENNETT_KEYBOARD]: BennettKeyboard,
    [FLAPPER]: Flapper,
    [SQUEEZING]: Squeezing,
    [MINGLING]: Mingling,
    [BENNETT_DEFIANT]: BennettDefiant,
    [BENNETT_RECORDING]: BennettRecording,
    [PROTESTER]: Protester,
    [EPILOGUE]: Epilogue
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    instanceKey: PropTypes.string.isRequired
}

const Stephanie = ({

    className,
    instanceKey,

...other }) => {

    const InstanceComponent = INSTANCES_MAP[instanceKey]

    return (
        <InstanceComponent {...other}
            className={cx(
                'Stephanie',
                className
            )}
        />
    )
}

Stephanie.propTypes = propTypes;

export default Stephanie
