import PropTypes from 'prop-types'

import CharmedSchoolbus from './Instances/CharmedSchoolbus'

import {
    CHARMED_SCHOOLBUS
} from 'constants/scene/actors/instances/bradSasha'

export const propTypes = {
    [CHARMED_SCHOOLBUS]: PropTypes.bool
}

export default {
    [CHARMED_SCHOOLBUS]: CharmedSchoolbus
}
