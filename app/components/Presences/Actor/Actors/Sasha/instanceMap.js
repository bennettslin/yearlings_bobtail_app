import PropTypes from 'prop-types'

import Indignant from './Instances/Indignant'
import PopularGirl from './Instances/PopularGirl'

import {
    INDIGNANT,
    POPULAR_GIRL
} from 'scene/instanceKeys/sasha'

const propTypes = {
    [INDIGNANT]: PropTypes.bool,
    [POPULAR_GIRL]: PropTypes.bool
}

export { propTypes }

export default {
    [INDIGNANT]: Indignant,
    [POPULAR_GIRL]: PopularGirl
}
