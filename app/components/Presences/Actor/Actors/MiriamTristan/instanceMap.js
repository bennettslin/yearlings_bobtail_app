import PropTypes from 'prop-types'

import Noogie from './Instances/Noogie'
import Greeting from './Instances/Greeting'

import {
    NOOGIE
} from 'scene/actors/keys/instances/miriamTristan'

import {
    GREETING
} from 'scene/actors/keys/instances/songs'

export const propTypes = {
    [NOOGIE]: PropTypes.bool,
    [GREETING]: PropTypes.bool
}

export default {
    [NOOGIE]: Noogie,
    [GREETING]: Greeting
}
