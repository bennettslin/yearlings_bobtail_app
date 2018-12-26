import PropTypes from 'prop-types'

import Squeezing from './Instances/Squeezing'

import {
    SQUEEZING
} from 'scene/instanceKeys/amyStephanie'

const propTypes = {
    [SQUEEZING]: PropTypes.bool
}

export { propTypes }

export default {
    [SQUEEZING]: Squeezing
}
