import PropTypes from 'prop-types'

import HurtConsoling from './Instances/HurtConsoling'
import SobbingShielding from './Instances/SobbingShielding'

import {
    HURT_CONSOLING,
    SOBBING_SHIELDING
} from 'scene/instanceKeys/estherMother'

const propTypes = {
    [HURT_CONSOLING]: PropTypes.bool,
    [SOBBING_SHIELDING]: PropTypes.bool
}

export { propTypes }

export default {
    [HURT_CONSOLING]: HurtConsoling,
    [SOBBING_SHIELDING]: SobbingShielding
}
