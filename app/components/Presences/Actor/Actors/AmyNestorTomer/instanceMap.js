import PropTypes from 'prop-types'

import Officer from './Instances/Officer'

import {
    OFFICER
} from 'scene/instanceKeys/amyNestorTomer'

export default {
    [OFFICER]: Officer
}

const propTypes = {
    [OFFICER]: PropTypes.bool
}

export { propTypes }
