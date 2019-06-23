import PropTypes from 'prop-types'

import Present from './Instances/Present'

import { PRESENT } from 'constants/scene/actors/instances/songs'

export const propTypes = {
    [PRESENT]: PropTypes.bool
}

export default {
    [PRESENT]: Present
}
