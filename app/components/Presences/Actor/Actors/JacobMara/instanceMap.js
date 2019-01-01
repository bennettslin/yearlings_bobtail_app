import PropTypes from 'prop-types'

import Eating from './Instances/Eating'

import {
    EATING
} from 'scene/instanceKeys/songs'

export const propTypes = {
    [EATING]: PropTypes.bool
}

export default {
    [EATING]: Eating
}
