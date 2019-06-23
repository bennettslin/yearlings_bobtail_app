import PropTypes from 'prop-types'

import Squeezing from './Instances/Squeezing'

import {
    SQUEEZING
} from 'constants/scene/actors/instances/amyStephanie'

export const propTypes = {
    [SQUEEZING]: PropTypes.bool
}

export default {
    [SQUEEZING]: Squeezing
}
