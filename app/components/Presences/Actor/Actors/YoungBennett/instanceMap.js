import PropTypes from 'prop-types'

import Panicked from './Instances/Panicked'
import Flustered from './Instances/Flustered'
import Bathing from './Instances/Bathing'
import Singing from './Instances/Singing'
import YoungChild from './Instances/YoungChild'

import {
    PANICKED,
    FLUSTERED,
    BATHING,
    SINGING
} from 'scene/instanceKeys/youngBennett'

import {
    YOUNG_CHILD
} from 'scene/instanceKeys/songs'

const propTypes = {
    [PANICKED]: PropTypes.bool,
    [FLUSTERED]: PropTypes.bool,
    [BATHING]: PropTypes.bool,
    [SINGING]: PropTypes.bool,
    [YOUNG_CHILD]: PropTypes.bool
}

export { propTypes }

export default {
    [PANICKED]: Panicked,
    [FLUSTERED]: Flustered,
    [BATHING]: Bathing,
    [SINGING]: Singing,
    [YOUNG_CHILD]: YoungChild
}
