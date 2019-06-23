import PropTypes from 'prop-types'

import Exasperated from './Instances/Exasperated'
import Concerned from './Instances/Concerned'
import Cheering from './Instances/Cheering'
import YoungChild from './Instances/YoungChild'

import {
    EXASPERATED,
    CONCERNED,
    CHEERING
} from 'constants/scene/actors/instances/anita'

import {
    YOUNG_CHILD
} from 'constants/scene/actors/instances/songs'

export const propTypes = {
    [EXASPERATED]: PropTypes.bool,
    [CONCERNED]: PropTypes.bool,
    [CHEERING]: PropTypes.bool,
    [YOUNG_CHILD]: PropTypes.bool
}

export default {
    [EXASPERATED]: Exasperated,
    [CONCERNED]: Concerned,
    [CHEERING]: Cheering,
    [YOUNG_CHILD]: YoungChild
}
