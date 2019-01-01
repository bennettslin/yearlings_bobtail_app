import PropTypes from 'prop-types'

import Noogie from './Instances/Noogie'
import Greeting from './Instances/Greeting'

import {
    NOOGIE
} from 'scene/instanceKeys/miriamTristan'

import {
    GREETING
} from 'scene/instanceKeys/songs'

export const propTypes = {
    [NOOGIE]: PropTypes.bool,
    [GREETING]: PropTypes.bool
}

export { propTypes }

export default {
    [NOOGIE]: Noogie,
    [GREETING]: Greeting
}
