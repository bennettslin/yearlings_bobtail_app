import PropTypes from 'prop-types'

import TyingTether from './Instances/TyingTether'

import {
    TYING_TETHER
} from 'scene/instanceKeys/bradBennett'

const propTypes = {
    [TYING_TETHER]: PropTypes.bool
}

export { propTypes }

export default {
    [TYING_TETHER]: TyingTether
}
