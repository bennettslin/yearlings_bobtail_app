import PropTypes from 'prop-types'

import ReassuringEnchanted from './Instances/ReassuringEnchanted'

import {
    REASSURING_ENCHANTED
} from 'scene/actors/keys/instances/christopherBennettWilly'

export const propTypes = {
    [REASSURING_ENCHANTED]: PropTypes.bool
}

export default {
    [REASSURING_ENCHANTED]: ReassuringEnchanted
}
