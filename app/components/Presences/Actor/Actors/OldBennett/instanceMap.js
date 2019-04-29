import PropTypes from 'prop-types'

import Prologue from './Instances/Prologue'

import {
    PROLOGUE
} from 'scene/actors/keys/instances/songs'

export const propTypes = {
    [PROLOGUE]: PropTypes.bool
}

export default {
    [PROLOGUE]: Prologue
}
