import PropTypes from 'prop-types'

import Officer from './Instances/Officer'

import {
    OFFICER
} from 'constants/scene/actors/instances/amyNestorTomer'

export const propTypes = {
    [OFFICER]: PropTypes.bool
}

export default {
    [OFFICER]: Officer
}
