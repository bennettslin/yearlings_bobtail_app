import PropTypes from 'prop-types'

import Prologue from './Instances/Prologue'

import {
    PROLOGUE
} from 'constants/scene/actors/instances/songs'

export const propTypes = {
    [PROLOGUE]: PropTypes.bool
}

export default {
    [PROLOGUE]: Prologue
}
