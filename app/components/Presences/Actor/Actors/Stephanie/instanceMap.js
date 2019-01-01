import PropTypes from 'prop-types'

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
} from 'scene/instanceKeys/stephanie'

import {
    SQUEEZING,
    MINGLING,
    PROTESTER,
    EPILOGUE
} from 'scene/instanceKeys/songs'

export const propTypes = {
    [BENNETT_KEYBOARD]: PropTypes.bool,
    [FLAPPER]: PropTypes.bool,
    [SQUEEZING]: PropTypes.bool,
    [MINGLING]: PropTypes.bool,
    [BENNETT_DEFIANT]: PropTypes.bool,
    [BENNETT_RECORDING]: PropTypes.bool,
    [PROTESTER]: PropTypes.bool,
    [EPILOGUE]: PropTypes.bool
}

export { propTypes }

export default {
    [BENNETT_KEYBOARD]: BennettKeyboard,
    [FLAPPER]: Flapper,
    [SQUEEZING]: Squeezing,
    [MINGLING]: Mingling,
    [BENNETT_DEFIANT]: BennettDefiant,
    [BENNETT_RECORDING]: BennettRecording,
    [PROTESTER]: Protester,
    [EPILOGUE]: Epilogue
}
