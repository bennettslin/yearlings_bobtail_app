import PropTypes from 'prop-types'

import ReassuringEnchanted from './Instances/ReassuringEnchanted'

import {
    REASSURING_ENCHANTED
} from 'constants/scene/actors/instances/christopherBennettWilly'

export const propTypes = {
    [REASSURING_ENCHANTED]: PropTypes.bool
}

export default {
    [REASSURING_ENCHANTED]: ReassuringEnchanted
}
