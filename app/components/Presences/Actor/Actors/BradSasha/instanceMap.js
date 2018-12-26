import PropTypes from 'prop-types'

import CharmedSchoolbus from './Instances/CharmedSchoolbus'

import {
    CHARMED_SCHOOLBUS
} from 'scene/instanceKeys/bradSasha'

const propTypes = {
    [CHARMED_SCHOOLBUS]: PropTypes.bool
}

export { propTypes }

export default {
    [CHARMED_SCHOOLBUS]: CharmedSchoolbus
}
