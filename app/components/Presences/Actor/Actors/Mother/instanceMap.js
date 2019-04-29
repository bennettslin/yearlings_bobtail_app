import PropTypes from 'prop-types'

import Stooping from './Instances/Stooping'
import Comforting from './Instances/Comforting'
import Arguing from './Instances/Arguing'
import Present from './Instances/Present'
import Future from './Instances/Future'
import Epilogue from './Instances/Epilogue'

import {
    STOOPING,
    COMFORTING,
    ARGUING
} from 'scene/actors/keys/instances/mother'

import {
    PRESENT,
    FUTURE,
    EPILOGUE
} from 'scene/actors/keys/instances/songs'

export const propTypes = {
    [STOOPING]: PropTypes.bool,
    [COMFORTING]: PropTypes.bool,
    [ARGUING]: PropTypes.bool,
    [PRESENT]: PropTypes.bool,
    [FUTURE]: PropTypes.bool,
    [EPILOGUE]: PropTypes.bool
}

export default {
    [STOOPING]: Stooping,
    [COMFORTING]: Comforting,
    [ARGUING]: Arguing,
    [PRESENT]: Present,
    [FUTURE]: Future,
    [EPILOGUE]: Epilogue
}
