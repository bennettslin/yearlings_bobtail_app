import PropTypes from 'prop-types'

import Eating from './Instances/Eating'

import {
    EATING
} from 'scene/instanceKeys/songs'

const propTypes = {
    [EATING]: PropTypes.bool
}

export { propTypes }

export default {
    [EATING]: Eating
}
