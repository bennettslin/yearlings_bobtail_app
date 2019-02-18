import PropTypes from 'prop-types'

import Gangbanger from './Instances/Gangbanger'

import { GANGBANGER } from 'scene/instanceKeys/songs'

export const propTypes = {
    [GANGBANGER]: PropTypes.bool
}

export default {
    [GANGBANGER]: Gangbanger
}
