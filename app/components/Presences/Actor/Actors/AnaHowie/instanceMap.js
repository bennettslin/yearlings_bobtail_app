import PropTypes from 'prop-types'

import Cemetery from './Instances/Cemetery'

import {
    CEMETERY
} from 'constants/scene/actors/instances/songs'

export const propTypes = {
    [CEMETERY]: PropTypes.bool
}

export default {
    [CEMETERY]: Cemetery
}
