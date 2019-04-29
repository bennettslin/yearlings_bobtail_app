import PropTypes from 'prop-types'

import Officer from './Instances/Officer'

import {
    OFFICER
} from 'scene/actors/keys/instances/amyNestorTomer'

export const propTypes = {
    [OFFICER]: PropTypes.bool
}

export default {
    [OFFICER]: Officer
}
