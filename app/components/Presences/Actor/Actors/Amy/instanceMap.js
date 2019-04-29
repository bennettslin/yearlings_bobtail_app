import PropTypes from 'prop-types'

import Smoker from './Instances/Smoker'
import Flirting from './Instances/Flirting'
import Mingling from './Instances/Mingling'
import Officer from '../AmyNestorTomer/Instances/Officer'
import Protester from './Instances/Protester'
import Doctor from './Instances/Doctor'
import Epilogue from './Instances/Epilogue'

import {
    SMOKER,
    OFFICER,
    DOCTOR
} from 'scene/actors/keys/instances/amy'

import {
    FLIRTING,
    MINGLING,
    PROTESTER,
    EPILOGUE
} from 'scene/actors/keys/instances/songs'

export const propTypes = {
    [SMOKER]: PropTypes.bool,
    [FLIRTING]: PropTypes.bool,
    [MINGLING]: PropTypes.bool,
    [OFFICER]: PropTypes.bool,
    [PROTESTER]: PropTypes.bool,
    [DOCTOR]: PropTypes.bool,
    [EPILOGUE]: PropTypes.bool
}

export default {
    [SMOKER]: Smoker,
    [FLIRTING]: Flirting,
    [MINGLING]: Mingling,
    [OFFICER]: Officer,
    [PROTESTER]: Protester,
    [DOCTOR]: Doctor,
    [EPILOGUE]: Epilogue
}
