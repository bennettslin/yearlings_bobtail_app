import PropTypes from 'prop-types'

import Prologue from './Instances/Prologue'

import {
    PROLOGUE
} from 'scene/instanceKeys/songs'

export const propTypes = {
    [PROLOGUE]: PropTypes.bool
}

export { propTypes }

export default {
    [PROLOGUE]: Prologue
}
