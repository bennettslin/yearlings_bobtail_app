import PropTypes from 'prop-types'

import ReassuringEnchanted from './Instances/ReassuringEnchanted'
import BlissfulGuilty from './Instances/BlissfulGuilty'

import {
    REASSURING_ENCHANTED,
    BLISSFUL_GUILTY
} from 'scene/instanceKeys/christopherBennett'

const propTypes = {
    [REASSURING_ENCHANTED]: PropTypes.bool,
    [BLISSFUL_GUILTY]: PropTypes.bool
}

export { propTypes }

export default {
    [REASSURING_ENCHANTED]: ReassuringEnchanted,
    [BLISSFUL_GUILTY]: BlissfulGuilty
}
