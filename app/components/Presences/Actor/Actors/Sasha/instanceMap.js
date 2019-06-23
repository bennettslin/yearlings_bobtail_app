import PropTypes from 'prop-types'

import Indignant from './Instances/Indignant'
import PopularGirl from './Instances/PopularGirl'

import {
    INDIGNANT,
    POPULAR_GIRL
} from 'constants/scene/actors/instances/sasha'

export const propTypes = {
    [INDIGNANT]: PropTypes.bool,
    [POPULAR_GIRL]: PropTypes.bool
}

export default {
    [INDIGNANT]: Indignant,
    [POPULAR_GIRL]: PopularGirl
}
