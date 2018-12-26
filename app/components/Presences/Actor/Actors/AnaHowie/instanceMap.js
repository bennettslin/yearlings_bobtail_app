import PropTypes from 'prop-types'

import Cemetery from './Instances/Cemetery'

import {
    CEMETERY
} from 'scene/instanceKeys/songs'

const propTypes = {
    [CEMETERY]: PropTypes.bool
}

export { propTypes }

export default {
    [CEMETERY]: Cemetery
}
