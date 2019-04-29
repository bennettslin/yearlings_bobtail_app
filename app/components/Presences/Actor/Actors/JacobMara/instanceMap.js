import PropTypes from 'prop-types'

import Eating from './Instances/Eating'

import {
    EATING
} from 'scene/actors/keys/instances/songs'

export const propTypes = {
    [EATING]: PropTypes.bool
}

export default {
    [EATING]: Eating
}
