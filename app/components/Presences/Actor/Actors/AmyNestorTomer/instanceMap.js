import PropTypes from 'prop-types'

import Officer from './Instances/Officer'

import {
    OFFICER
} from 'scene/instanceKeys/amyNestorTomer'

export const propTypes = {
    [OFFICER]: PropTypes.bool
}

export default {
    [OFFICER]: Officer
}
