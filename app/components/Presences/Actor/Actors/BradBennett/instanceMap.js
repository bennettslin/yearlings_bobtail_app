import PropTypes from 'prop-types'

import TyingTether from './Instances/TyingTether'

import {
    TYING_TETHER
} from 'constants/scene/actors/instances/bradBennett'

export const propTypes = {
    [TYING_TETHER]: PropTypes.bool
}

export default {
    [TYING_TETHER]: TyingTether
}
