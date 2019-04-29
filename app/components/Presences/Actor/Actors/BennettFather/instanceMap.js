import PropTypes from 'prop-types'

import Present from './Instances/Present'

import { PRESENT } from 'scene/actors/keys/instances/songs'

export const propTypes = {
    [PRESENT]: PropTypes.bool
}

export default {
    [PRESENT]: Present
}
